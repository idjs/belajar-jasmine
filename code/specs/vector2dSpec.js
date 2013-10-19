describe("Vector2d", function(){
    describe("Add method", function(){
        it("Should have an add property", function(){
            expect(vector2d.add).toBeDefined();
        });

        it("Should have an add property which has the typeof function", function(){
            expect(typeof vector2d.add).toEqual("function");
        });

        it("Add method should return an object with property x and y", function(){
            var v1 = { x: 20, y: 30},
                v2 = { x: 5, y: 1};

            expect(vector2d.add(v1, v2).hasOwnProperty("x")).toBeTruthy();
        });

        it("Add method should return the correct answer", function(){
            var v1 = { x: 20, y: 30},
                v2 = { x: 5, y: 1};

            expect(vector2d.add(v1, v2)).toEqual({x: 25, y: 31});
        });
    });

    describe("Substract method", function(){
        var v1, v2;

        beforeEach(function(){
            v1 = {x: 20, y: 30};
            v2 = {x: 5, y: 50};
        });

        it("Should substract properly", function(){
            expect(vector2d.substract(v1, v2)).toEqual({x: 15, y: -20});
        });

        it("Should only have x and y as direct properties", function(){
            var result = vector2d.substract(v1, v2);

            // memeriksa sesuatu bernilai undefined
            expect(result.a).toBeUndefined();

            // berikut ini sama saja dengan bentuk di atas
            expect(result.a).not.toBeDefined();
        });

        it("Should have no problem working with PI", function(){
            var test = {x: 5, y: Math.PI}, // Math.PI = 3.14.... sekian sekian
                result = vector2d.substract(v1, test);

            expect(result.y).toBeGreaterThan(26); // lebih besar dari 26
            expect(result.y).toBeLessThan(27); // kurang dari 27

            expect(result.y).toBeCloseTo(26.85, 1);
        });
    });

    describe("Mag method", function() {

        var v;

        beforeEach(function() {
            v = {x: 3, y: -4};
        });

        it("Should calculate the magnitude properly", function() {
            var result = vector2d.mag(v);
            expect(result).toEqual(5);
        });

        it("Should call dot method", function() {
            // memasang mata-mata pada metode dot
            spyOn(vector2d, "dot");

            // jalankan metode mag
            vector2d.mag(v);

            expect(vector2d.dot).toHaveBeenCalled();
        });

        it("Should call dot method with the correct params", function() {

        });
    });
});