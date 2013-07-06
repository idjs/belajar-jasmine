describe("Vector2d", function(){
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