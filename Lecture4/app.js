(function(){
  'use strict';

  angular.module('myFirstApp',[])

  .controller('MyFirstController', function($scope){
    $scope.name="Luis";
    $scope.sayHello = function(){
      return "Hello Luis";
    }
  });
})();
