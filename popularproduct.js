/*var fs  = require("fs"); 

// two Asyncronous methods:
  module.exports = function(filePath){
    


    this.productsSold = function(callback){
      var  itermsSold = [];
      var productMap = {};
      var fileContent = fs.readFileSync(filePath, "utf8");
      // console.log(fileContent);
      var iterms = fileContent.split("\n"); 
     
      

      iterms.forEach(function(iterm) {

      var hold = iterm.split(',');

      var currentIterm = hold[1];
      var NumberOfIterms = hold[2];

          // console.log("holds :" + JSON.stringify(holds));

        if(productMap[currentIterm] === undefined){
          productMap[currentIterm]= 0;
        }
         productMap[currentIterm]= productMap[currentIterm] + Number(NumberOfIterms);
        
     });

            console.log(JSON.stringify(productMap));
            callback(null, productMap); //returns a map of how many of each product is sold - mapping productName to quantity sold.
    }

}*/
var fs  = require("fs"); 

var findFiles = function (folder) {
   //read each file in the folder
   // Synchronous readdir(3). Returns an array of filenames excluding '.' and '..'. 
  var files = fs.readdirSync(folder);
  var productList = []; 

  files.forEach(function (fileName) { 
    //how do I see wha tis inside of a file? 
    //Synchronous version of fs.readFile. Returns the contents of the filename. 
    var fileContent = fs.readFileSync(filePath, "utf8");
    var products = fileContent.split("\n"); 
     
    products.forEach(function(product){ 
      console.log(product); 
      productList.push(product); 
    }); 
    
  });
  return productList;

};
//expose 2 methods with parameters:
exports.linesInFiles = function(folderName){ 

   var productList = findFiles(folderName);

    return productList; 
};