var app = angular.module('app',['ui.router'])

.config(function($stateProvider,$urlRouterProvider,$locationProvider){

  $urlRouterProvider.otherwise('/');

  //========= state provider(routes) =============    
  $stateProvider
  
  .state('first',{
    url:'/first',
    templateUrl:'first.html',
    controller:"fc", 


  })

  

  .state('second',{
    url:'/second',
    templateUrl:'second.html'

  })

 

  .state('child', {
      parent:'first',
      url:'/child/:id',
      views: {
          'one@first': { templateUrl:'second.html' },
          'two@first': { 
            templateUrl:'third.html',
            controller: function($scope,$stateParams) {
                var sap = $stateParams.id;
                 $scope.name = sap;
            }
          }
      }
      
  })

  .state('third',{
    url:'/third',
    templateUrl:'third.html'

  });


  // ============  route provider route over =======================
  
  //=======remove hash from url ========  
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
  //===================================



})
 //=========================== config over ========================


 //====================controllers start==========================


 //======================== controller datatable =====================
.controller('BeerCounter', function($scope, $locale,service_parent) {
  
  $scope.beers = [0, 1, 2, 3, 4, 5, 6];


  $scope.data1 =
  [
   {name:'birav',surname:'jobanputra',like:'1',dislike:'2'},
   {name:'airav',surname:'jobanputra',like:'1',dislike:'2'},
   {name:'cirav',surname:'jobanputra',like:'1',dislike:'2'},
   {name:'dirav',surname:'jobanputra',like:'1',dislike:'2'}
  ]

  $scope.like = function(xxx)
  {
      xxx.like = service_parent.service_child(xxx.like);
  }

  $scope.dislike = function(xxx)
  {
      xxx.dislike = xxx.dislike - 1;
  }

  $scope.sortdata = function(xxx)
  {
      console.log(xxx);
      $scope.xyz = xxx;

  }

  $scope.xyz = 'name';


  
})


//=========== controller with hhttp request ============
.controller("fc", function($scope,$window,$http) {
  

  $scope.xxx = function(){

    $scope.name = "LODING....";

    $http({
          method : "POST",
          url : "https://jsonplaceholder.typicode.com/posts",
          data : {
            title: 'foo',
            body: 'bar',
            userId: 1
          }
      }).then(function mySuccess(response) {
        console.log(response);
          $scope.name = response.data.title;
      }, function myError(response) {
          $scope.myWelcome = response.statusText;
      });

  }

  $scope.xxx();
  
})

//============== working code for directives =====================
.controller('Controller', ['$scope', function($scope) {
  $scope.customer = {
    name: 'Naomi',
    address: '1600 Amphitheatre'
  };
}])
.directive('myCustomer', function() {
  return {
    templateUrl: function(elem, attr) {
      return 'customer-' + attr.type + '.html';
    }
  };
});

//=========================================================

//====================== filter working example ================
.filter('reverse', function() {
  return function(input, uppercase) {
    input = input || '';
    var out = '';
    for (var i = 0; i < input.length; i++) {
      out = input.charAt(i) + out;
    }
    // conditional based on optional argument
    if (uppercase) {
      out = out.toUpperCase();
    }
    return out;
  };
})
.controller('MyController', ['$scope', 'reverseFilter', function($scope, reverseFilter) {
  $scope.greeting = 'hello';
  $scope.filteredGreeting = reverseFilter($scope.greeting);
}]);
//=========================================================

// ====================== directives =======================
// app.directive('student', function() {
//             var directive = {};
//             directive.restrict = 'E';
//             directive.template = "Student: <b>{{student.name}}</b> , Roll No: <b>{{student.rollno}}</b>";
            
//             directive.scope = {
//                student : "=name"
//             }
            
//             directive.compile = function(element, attributes) {
//                element.css("border", "1px solid #cccccc");
               
//                var linkFunction = function($scope, element, attributes) {
//                   element.html("Student: <b>"+$scope.student.name +"</b> , Roll No: <b>"+$scope.student.rollno+"</b><br/>");
//                   element.css("background-color", "#ff00ff");
//                }
//                return linkFunction;
//             }
            
//             return directive;
//          });

//         app.controller('use_dir', function($scope) {
//             $scope.Mahesh = {};
//             $scope.Mahesh.name = "Mahesh Parashar";
//             $scope.Mahesh.rollno  = 1;

//             $scope.Piyush = {};
//             $scope.Piyush.name = "Piyush Parashar";
//             $scope.Piyush.rollno  = 2;
//          });

                



// app.directive('myTodo', function(){
//     return {
//       restrict: 'EA',
//       templateUrl: 'todo.html',
//       scope: {
//         list: '=',
//         title: '@'
//       }
//     };
//   });


// 1) directive ma att na name(scope) ma
// 2) attribute na paramiter ne kholvana
// 3) template ma banela object ne {{}} ma mukavana

