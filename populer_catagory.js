var itemsSold  = require("./most_populer_catagory");
module.exports = function(){

this.mostPopularCt = function(filepath){

  var newItemsSold = new itemsSold(filepath);
    var catagoryMap = newItemsSold.catagoryNames(filepath);
        var mostPopularCat = {};
        var max = 0;
           for(var cat in catagoryMap) {
              var value = catagoryMap[cat];
              if(catagoryMap[cat] > max) {
                max = catagoryMap[cat];
                mostPopularCat = {
                 name : cat,
                 qty: max
              }
           }
         }
     
          console.log(mostPopularCat);
          return mostPopularCat;
     };  

    }