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
        it("Should substract properly", function(){
            var v1 = {x: 20, y: 30},
                v2 = {x: 5, y: 50};

            expect(vector2d.substract(v1, v2)).toEqual({x: 15, y: -20});
        });

        it("Should only have x and y as direct properties", function(){
            var v1 = {x: 20, y: 30},
                v2 = {x: 5, y: 50},
                result = vector2d.substract(v1, v2);

            // memeriksa sesuatu bernilai undefined
            expect(result.a).toBeUndefined();

            // berikut ini sama saja dengan bentuk di atas
            expect(result.a).not.toBeDefined();
        });

        it("Should have no problem working with PI", function(){
            var v1 = {x: 20, y: 30},
                v2 = {x: 5, y: Math.PI}, // Math.PI = 3.14.... sekian sekian
                result = vector2d.substract(v1, v2);

            expect(result.y).toBeGreaterThan(26); // lebih besar dari 26
            expect(result.y).toBeLessThan(27); // kurang dari 27

            expect(result.y).toBeCloseTo(26.85, 1);
        });
    });
});