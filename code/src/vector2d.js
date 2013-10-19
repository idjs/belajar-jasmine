(function(global){
    var vector2d = {
        add: function( v1, v2 ){
            return {x: v1.x + v2.x , y: v1.y + v2.y};
        },

        substract: function( v1, v2 ){
            return {x: v1.x - v2.x , y: v1.y - v2.y};
        },

        dot: function( v1, v2 ) {
            return {x: v1.x * v2.x, y: v1.y * v2.y};
        },

        distance: function( v1, v2 ) {
            return {};
        }
    };

    global.vector2d = vector2d;
}(window));