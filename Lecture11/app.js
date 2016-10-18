(function(){
  'use strict';

  angular.module('MsgApp', [])
    .controller('MsgController', MsgController);

  MsgController.$inject = ['$scope'];
  function MsgController($scope){
    $scope.name = "Luis";
    $scope.stateOfBeing= "hungry";

    $scope.seyMessage = function () {
      return "Luis liks eating pizza";
    };

    $scope.feedLuis = function () {
      $scope.stateOfBeing = "fed";
    };

  }

})();
