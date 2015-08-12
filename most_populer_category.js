var itemsSold  = require("./categoryTotals");
module.exports = function(){

this.mostPopularCategory = function(filepath){

  var newItemsSold = new itemsSold(filepath);
    var categoryMap = newItemsSold.categoryTotals(filepath);
        var mostPopularCat = {};
        var max = 0;
           for(var cat in categoryMap) {
              var value = categoryMap[cat];
              if(categoryMap[cat] > max) {
                max = categoryMap[cat];
                mostPopularCategory = {
                 name : cat,
                 qty: max
              }
           }
         }
     
          console.log(mostPopularCategory);
          return mostPopularCategory;
     };  

  }