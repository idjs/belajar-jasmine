describe("Vector2d", function(){
    it("Should have an add property", function(){
        expect(vector2d.add).toBeDefined();
    });

    it("Should have an add property which has the typeof function", function(){
        expect(typeof vector2d.add).toEqual("function");
    });
});