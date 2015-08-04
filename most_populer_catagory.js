
var fs  = require("fs"); 

var itemsSold  = require("./most_popular");
module.exports = function(){

  this.catagoryNames = function(filepath){
      //var productsSold = [];
      var productCatagoryMap = {

         'Milk 1l':'Dairy products',
         'Imasi':'Dairy products',
         'Bread':'carbohydrates food',
         'Chakalaka Can':'Canned food',
         'Gold Dish Vegetable Curry Can':'Canned food',
         'Fanta 500ml':'Drinks & ice',
         'Coke 500ml':'Drinks & ice',
         'Cream Soda 500ml':'Drinks & ice',
         'Iwisa Pap 5kg':'carbohydrates food',
         'Top Class Soy Mince':'Canned food',
         'Shampoo 1 litre':'Cosmetics products',
         'Soap Bar': 'Cosmetics products',
         'Bananas - loose':'Fruits products',
         'Apples - loose':'Fruits products',
         'Mixed Sweets 5s':'Sweets products',
         'Heart Chocolates':'Sweets products',
         'Rose (plastic)':'Romantic gifts',
         'Valentine Cards':'Romantic gifts'
      };


    var newItemsSold = new itemsSold(filepath);
    var productMap = newItemsSold.productsSold();
    var catagoryMap={};       
    for (var productName in productMap) {
         var catagoryName = productCatagoryMap[productName];
         var qty = productMap[productName];
         if (catagoryMap[catagoryName]=== undefined){
             catagoryMap[catagoryName]=0
         }
    catagoryMap[catagoryName]= catagoryMap[catagoryName] + qty;

    }
  console.log (catagoryMap);
  return catagoryMap;
  };  

   this.mostPopularCt = function(catagoryMap){
        var mostPopularCat = {};
        var max = 0;
           for(var prop in catagoryMap) {
              var value = catagoryMap[prop];
              if(catagoryMap[prop] > max) {
                max = catagoryMap[prop];
                mostPopularCat = {
                 name : prop,
                 qty: max
              }
           }
         }
     
          console.log(mostPopularCat);
          return mostPopularCat;
     };  
}



















           