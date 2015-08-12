var assert = require("assert");

//var ProductList = require("../productList");

describe("Find data in file", function(){

    var ProductList = require("../productList");
    it('should return a unique list of product in the file synchronously', function(){

        
        var productLines = ProductList.linesInFiles('./files/Nelisa Sales History.csv');
        assert.deepEqual(productLines, ["Milk 1l","Imasi","Bread","Chakalaka Can","Gold Dish Vegetable Curry Can","Fanta 500ml","Coke 500ml","Cream Soda 500ml","Iwisa Pap 5kg","Top Class Soy Mince","Shampoo 1 litre","Soap Bar","Bananas - loose","Apples - loose","Mixed Sweets 5s","Heart Chocolates","Rose (plastic)","Valentine Cards"]);

	});
});



describe("Find data in file", function(){


    it('should return the total number of items sold for each product', function(){

        var Products = require("../most_popular");
        var products = new Products('./files/Nelisa Sales History.csv');
        
        var products = products.productsSold();
            //assert.deepEqual(["Milk", "Bread", "Coffee"], products);
        assert.equal(142, products['Milk 1l']);
        assert.equal(125, products['Imasi']);
        assert.equal(130, products['Bread']);
        assert.equal(94, products['Chakalaka Can']);
        assert.equal(86, products['Gold Dish Vegetable Curry Can']);
        assert.equal(94, products['Fanta 500ml'])
        assert.equal(159, products['Coke 500ml']);
        assert.equal(75, products['Cream Soda 500ml']);
        assert.equal(47, products['Iwisa Pap 5kg']);
        assert.equal(98, products['Top Class Soy Mince']);
        assert.equal(26, products['Shampoo 1 litre']);
        assert.equal(50, products['Soap Bar']);
        assert.equal(114, products['Bananas - loose']);
        assert.equal(114, products['Apples - loose']);
        assert.equal(172, products['Mixed Sweets 5s']);
        assert.equal(20, products['Heart Chocolates']);
        assert.equal(14, products['Rose (plastic)']);
        assert.equal(14, products['Valentine Cards']);
        
    });

    it('should return most popular item', function(){

        var Products = require("../most_popular");
        var products = new Products('./files/Nelisa Sales History.csv');
        var popularProduct = products.mostPopular();
        var result = { name : "Mixed Sweets 5s", qty : 172};
        assert.deepEqual(popularProduct, result); 
    
        
       
        });

     it('should return least popular item', function(){

        var Products = require("../least_populer_product");
        var products = new Products();
        var popularProduct = products.leastPopularProduct('./files/Nelisa Sales History.csv');
        var result = { name : "Rose (plastic)", qty : 14};
        assert.deepEqual(popularProduct, result); 
    
        
       
        });



});