// app.service('service_parent',function (){
// 	this.service_child = function (x) {
// 		///console.log('tetetete');
//         return parseInt(x) +1;
//     }
// });


//============= filter ================
// app.filter('myFormat',['hexafy', function(hexafy) {
//     return function(x) {
//         return parseInt(x) + 1;
//     };
// }]);
//=====================================

//================== service working example ============
app.factory('service_parent',function ()
	{
		return {
			service_child : function (x) {
	        return parseInt(x) + 1;
	    }
	}
});
//=======================================================
