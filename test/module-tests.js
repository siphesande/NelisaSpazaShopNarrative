var assert = require("assert");

describe("Module Tests", function(){

    it("Let's use modules", function(){

        var low_or_high = require('../my_module');

        assert.equal(low_or_high.low(), "low");
        assert.equal(low_or_high.high(), "high");

    });

    it("Constructor module", function () {

        var AnotherModule = require('../another_module');

        var anotherModule = new AnotherModule({low : "very low", high : "very high"});

        assert.equal(anotherModule.low(), "very low");
        assert.equal(anotherModule.high(), "very high");

    });

});