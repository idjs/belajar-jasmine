---
title: Mata mata
layout: base
---

## Mata-mata

Mari kita membuat module untuk menghitung ukuran(magnitude) dari vector. Rumusnya adalah sebagai berikut:

    function mag( v ) {
        return Math.sqrt(v.x * v.x + v.y * v.y);
    }

Ternyata, bagian `v.x * v.x + v.y * v.y` di atas dapat digunakan juga untuk menghitung *dot product* secara cepat dari 2 buat vector:

    function dot( v1, v2 ) {
        return v1.x * v2.x + v1.y * v2.y;
    }

Bagaimana bila kita manfaatkan metode `dot` di atas ketika kita hendak menghitung magnitude dari sebuah vector?

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

Mari kita buat test awal:

    describe("Norm method", function() {

        var v1, v2;

        it("Should calculate the magnitude properly", function() {
            var result = vector2d.mag({x: 3, y: -4});
            expect(result).toEqual(5);
        });
    });

Ok, sesuai dengan yang kita inginkan. Tetapi bagaimana bila kita ingin memeriksa bahwa fungsi `mag` memanggil fungsi `dot` dengan parameter yang benar? Disinilah saatnya kita menggunakan **Spies** atau mata-mata.

Dengan **Spies** Kita dapat memantau bagaiman suatu fungsi dipanggil. Pada contoh berikut, kita memantau interaksi antara metode `mag` dengan metode `dot`.

        it("Should call dot method", function() {
            // memasang mata-mata pada metode dot
            spyOn(vector2d, "dot");

            // jalankan metode mag
            vector2d.mag(v);

            // memastikan bahwa metode dot benar dijalankan
            expect(vector2d.dot).toHaveBeenCalled();
        });

        it("Should call dot method with the correct params", function() {
            // memasang mata-mata pada metode dot
            spyOn(vector2d, "dot");

            // jalankan metode mag
            vector2d.mag(v);

            // memastikan bahwa metode dot dipanggil dengan parameter
            // vector yang benar
            expect(vector2d.dot).toHaveBeenCalledWith({x: 3,y: -4}, {x: 3,y: -4});
        });

        it("Should track the number of calls to dot", function() {
            // memasang mata-mata pada metode dot
            spyOn(vector2d, "dot");

            // jalankan metode mag 3 kali
            vector2d.mag(v);
            vector2d.mag(v);
            vector2d.mag(v);

            // memastikan bahwa metode dot dipanggil 3 kali juga
            expect(vector2d.dot.calls.length).toEqual(3);
        });
