(function(){
  'use strict';
//declaracion de la App
  angular.module('MsgApp', [])
  //declaracion del controlador
    .controller('MsgController', MsgController)
    .filter('loves', LovesFilter);

//Inyeccion de las dependencias
  MsgController.$inject = ['$scope', '$filter','lovesFilter'];

//funcionalidad del controlador
  function MsgController($scope, $filter, lovesFilter){

    $scope.name = "Luis";
    $scope.stateOfBeing= "hungry";
    $scope.cookieCost = .45;

    $scope.seyMessage = function () {
      var msg = "Luis liks eating pizza";
      var output = $filter('uppercase')(msg);
      return output;
    };

    $scope.sayLovesMessage = function () {
      var msg = "Luis likes to eat healthy snacks at night!";
      msg = lovesFilter(msg);
      return msg;
    };

    $scope.feedLuis = function () {
      $scope.stateOfBeing = "fed";
    };

  }

  function LovesFilter(){
    return function (input){
      input = input || "";
      input = input.replace("likes", "loves");
      return input;
    };
  }

})();
