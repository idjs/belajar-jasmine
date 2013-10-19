(function(global){
    var vector2d = {
        add: function( v1, v2 ){
            return {x: v1.x + v2.x , y: v1.y + v2.y};
        },

        substract: function( v1, v2 ){
            return {x: v1.x - v2.x , y: v1.y - v2.y};
        },

        dot: function( v1, v2 ) {
            return v1.x * v2.x + v1.y * v2.y;
        },

        mag: function( v ) {
            return Math.sqrt(this.dot(v, v));
        }
    };

    global.vector2d = vector2d;
}(window));