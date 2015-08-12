var assert = require("assert");

describe("Find data in file", function(){
        it('should return catagoryList with quantity', function(){

        var Category = require("../categoryTotals");
        var categories = new Category();
        
        var categories = categories.categoryTotals("./files/Nelisa Sales History.csv");
            assert.equal(28,  categories["Romantic gifts"]);
            assert.equal(278, categories["Canned food"]);
            assert.equal(228, categories["Fruits products"]);
            assert.equal(76,  categories["Cosmetics products"]);
            assert.equal(177, categories["carbohydrates food"]);
            assert.equal(267, categories["Dairy products"]);
            assert.equal(328, categories["Drinks & ice"]);
            assert.equal(192, categories["Sweets products"]);
         /*it('it should show the categories and quantity', function(){
                var categoryCalculations = require('../most_populer_catagory');
                var salesPerCategory = categoryCalculations.catagoryNames('./files/Nelisa Sales History.csv');
                var expectedSalesPerCategory = {'Fruits' : 228, 'Sweets' : 192, 'Drinks & ice' : 328, 'Dairy' : 267, 'Starch' : 275, 'Cosmetics' : 76, 'Canned Goods' : 180, 'Gifts' : 28};
                assert.deepEqual(salesPerCategory,expectedSalesPerCategory);*/
        });    
            
     it('should return most popular category', function(){

        var Categories = require("../most_populer_category");
        var categories= new Categories();//'./files/Nelisa Sales History.csv');
        var populerCatergory = categories.mostPopularCategory('./files/Nelisa Sales History.csv');
        var result = { name : "Drinks & ice", qty : 328};
        assert.deepEqual(populerCatergory, result); 
    });
     it('should return least popular category', function(){

        var Categories = require("../least_populer_catergory");
        var categories= new Categories();//'./files/Nelisa Sales History.csv');
        var populerCatergory = categories.leastPopularCategory('./files/Nelisa Sales History.csv');
        var result = { name : "Romantic gifts", qty : 28};
        assert.deepEqual(populerCatergory, result); 
    });
});


