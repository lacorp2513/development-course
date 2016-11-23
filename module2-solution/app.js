(function () {
  'use strict';

  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// ToBuy Controller
  ToBuyController.$inject=['ShoppingListCheckOffService'];

  function ToBuyController(ShoppingListCheckOffService) {
    var showToBuyItems = this;
    //Show all items
    showToBuyItems.items = ShoppingListCheckOffService.getToBuyItems();


    showToBuyItems.bought = function ($index) {
      try {
        ShoppingListCheckOffService.addBouhtItems($index);
        ShoppingListCheckOffService.removeBuyItems($index);
      } catch (error) {
        showToBuyItems.error = error.message;
      }
    }
  }

  // ToBought Controller
   AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

   function AlreadyBoughtController(ShoppingListCheckOffService) {
     var alreadyBoughtItems = this;

       alreadyBoughtItems.items = ShoppingListCheckOffService.getBoughtItems();




   }


  function ShoppingListCheckOffService() {
    var service = this;
    var boughtItems = [];
    var toBuyItems = [
      {
        name : "cookies",
        quantity : "10"
      },
      {
        name : "bottle of juice",
        quantity : "5"
      },
      {
        name : "soda",
        quantity : "3"
      },
      {
        name : "gallons of milk",
        quantity : "4"
      },
      {
        name : "loaves of bread",
        quantity : "10"
      },
      {
        name : "cans of soup",
        quantity : "12"
      },
      {
        name : "pounds of meat",
        quantity : "3"
      },
      {
        name : "dozen eggs",
        quantity : "14"
      },
      {
        name : "bottles of jam",
        quantity : "5"
      },
      {
        name : "bottles of mayonnaise",
        quantity : "6"
      }
    ];

    service.getToBuyItems = function () {
      return toBuyItems;
    };

    service.getBoughtItems = function () {
      if (boughtItems.length < 0) {
          throw new Error("Nothing bought yet");
          console.log("here");
      }else {
        return boughtItems;
      }

    };

    service.addBouhtItems = function ($index) {

        boughtItems.push(toBuyItems[$index]);

    };

    service.removeBuyItems = function ($index) {
        toBuyItems.splice(toBuyItems[$index],1);
        console.log($index);
        if (boughtItems.length === 10) {
          console.log("here");
          throw new Error ("Everything is bought");
        }
    }
  }
})();
