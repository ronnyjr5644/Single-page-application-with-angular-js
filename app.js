(function(){
'use strict';
angular.module('NameCalculator',[])
.controller('NameCalculatorController',function($scope){
    $scope.name="";
    $scope.totalvalue=0;
    $scope.DisplayNumeric=function(){
        var totalnamevalue=calculateNumericForString($scope.name);
        $scope.totalvalue=totalnamevalue;
    }
    function calculateNumericForString(string){
        var totalstringvalue=0;
        for(var i=0;i<string.length;i++){
            totalstringvalue+=string.charCodeAt(i);
        }
        return totalstringvalue; 
    }
});
})();


// (function(){
// 'use strict';
// angular.module('myfirstapp',[])
// .controller('myfirstcontroller',function($scope){
// $scope.name="raunak";
// $scope.sayhello=function(){
//     return "hello from insie function"
// }
// });
// })();