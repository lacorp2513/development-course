(function(){
  'use strict';

  angular.module('DIApp', [])
  .controller('DIController', DIController);

  function DIController ($scope, $filter){
    $scope.name ="Luis";

    $scope.upper = function (){
      var upCase = $filter('uppercase');
      $scope.name= upCase($scope.name);
    }
  }

  function AnnoteMe(name, job, blah){
    return "Blah!";
  }
  console.log(AnnoteMe());
})();
