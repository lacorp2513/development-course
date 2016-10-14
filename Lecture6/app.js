(function(){
  'use strict';

  angular.module('NameCalculator',[])

  .controller('NameCalculatorController', function($scope){
    $scope.name = "";
    $scope.totalValue=0;

    $scope.displayNumeric = function(){
      var totalNameValue = calculateNumericForString($scope.name); //get the total value
      $scope.totalValue = totalNameValue;
    };

    function calculateNumericForString(string){
      var totalStrinValue = 0;
      for (var i = 0; i < string.length; i++) {
        totalStrinValue += string.charCodeAt(i);
      }
      return totalStrinValue;
    }
  });


})();
