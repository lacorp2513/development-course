(function(){
  'use strict';
  angular.module('LunchCheck',[])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject=['$scope'];

  function LunchCheckController($scope) {
    var arrayOfStrings = "";

    $scope.check = function () {
      var lunchmenu = $scope.lunchmenu;
      if (lunchmenu != "") {
        arrayOfStrings = lunchmenu.split(',');
        if (arrayOfStrings[0].charAt()!="") {
          if (arrayOfStrings.length <= 3) {
            $scope.message = "Enjoy!";
          }else{
            $scope.message = "Too much!";
          }
          console.log(arrayOfStrings.length);
        }
      }else{
        $scope.message = "Please enter data first";
      }


    };
  }

})();
