---
title: Eksplorasi Jasmine
layout: base
date: 2013-10-03
---

## Eksplorasi fungsi-fungsi Jasmine

Mari kita jalankan **testem** dengan mengetikkan perintah di bawah ini pada console:

    testem

Karena kami telah menetapkan bahwa kami ingin menguji kode kami pada browser Firefox, maka **testem** secara otomatis akan menjalankan Firefox. Hasilnya adalah sebagai berikut:

![](/pics/testem-firefox.jpeg)

Kita belum menuliskan kode apapun. Sehingga belum ada kode yang dapat dites. Mari kita tuliskan test pertama kita. Buatlah sebuah berkas pada alamat `code/specs/vector2dSpec.js`. Pada berkas tersebut, mari kita tuliskan kode test pertama kita.

``` javascript
    describe("Vector2d", function(){
        it("Should have an add property", function(){
            expect(vector2d.add).toBeDefined();
        });
    });
```

Jadi, `describe` menunjukkan sebuah **test suite**. **Test Suite** ini semacam kelompok besar dari sebuah test. Jadi, pada contoh di atas, kita memiliki sebuah **test suite** mengenai module `Vector2d`. Kita bisa menentukan nama lain dari **test suite** tersebut. Misalnya:

``` javascript
    describe("Uji coba Vector2d", function(){

    });
```

Di dalam sebuah **test suite**, kita memiliki **specs**. Disinilah kode testing kita tuliskan. Pada contoh di atas, kita memiliki sebuah **specs**, dimana kita mengharapkan bahwa sebuah objek `vector2d` memiliki sebuah properti `add`. Bila kita menyimpan kode di atas, maka tampilan dari browser kita sudah berubah:

![](/pics/testem-ontest.jpeg)

Mari kita lihat peringatannya:

    ReferenceError: vector2d is not defined in http://localhost:7357/specs/vector2dSpec.js (line 3)

Jasmine memberitahukan kepada kita bahwa objek vector2d belum terdefinisikan. Ini sudah jelas, kita belum menuliskan kode vector2d yang hendak kita test. Ayo kita tulis module tersebut. Kita simpan module vector2d pada alamat `code/src/vector2d.js`:

```
    (function(global){
        var vector2d = {

        };

        global.vector2d = vector2d;
    }(window));
```

Pada code di atas, kita memperkenalkan objek vector2d pada **global objek**. Pendekatan ini hanyalah contoh. Pada project sebenarnya, bisa jadi kita menggunakan suatu **namespace** tertentu, ataupun menggunakan mekanisme module lainnya. Tetapi pada contoh ini, tujuan utamanya adalah bagaimana agar objek `vector2d` dapat dikenali oleh kode test kita.

Ketika kita menyimpan kode di atas, maka tampilan browser akan berubah. Kita memperoleh pesan error baru:

    Expected undefined to be defined.

Mari kita bandingkan pesan error di atas dengan kode test kita:

    expect(vector2d.add).toBeDefined();

Hampir mirip bukan? Namun kode test di atas membangkitkan error karena `vector2d.add` belum terdefinisikan. Oleh jamine, `vector2d.add` bernilai `undefined`. Padahal kita menginginkan `vector2d.add` sudah terdefinisikan.

Ayo kita tambahkan properti add pada objek `vector2d`:

``` javascript
    (function(global){
        var vector2d = {
            add: ""
        };

        global.vector2d = vector2d;
    }(window));
```

Ketika kode di atas kita simpan, kita memperoleh tanda bahwa kode module `vector2d` sudah lolos uji coba:

![](/pics/testem-passed.jpeg)

Sekarang mari kita buat kode test baru. Seiring kita membuat test, kita juga akan menambahkan kode pada module `vector2d` kita.

Misalnya kita ingin memeriksa bahwa `add` pada `vector2d` adalah sebuah `function`. Maka, kode testnya adalah sebagai berikut:

``` javascript
    describe("Vector2d", function(){
        it("Should have an add property", function(){
            expect(vector2d.add).toBeDefined();
        });

        it("Should have an add property which has the typeof function", function(){
            expect(typeof vector2d.add).toEqual("function");
        });
    });
```

Dan ketika kita simpan kode di atas, kita akan memperoleh tanda merah:

![](/pics/testem-expected-function.jpeg)

Ok, masalahnya adalah, properti `add` pada objek `vector2d` adalah sebuah string, bukan fungsi. Jadi jelaslah jasmine membangkitkan kode di atas. Mari kita perbaiki module `vector2d` kita:

``` javascript
    (function(global){
        var vector2d = {
            add: function(){

            }
        };

        global.vector2d = vector2d;
    }(window));
```

Dan ketika kita simpan, warna hijau muncul kembali. :D

![](/pics/testem-typeof-function.jpeg)

Ok, pada titik ini, kita sudah berkenalan dengan lima kata kunci pada Jasmine, yaitu `describe`, `it`, `expect`, `toBeDefined`, dan `toBe`. Jasmine masih menyediakan banyak fungsi lainnya yang bertujuan untuk memudahkan penulisan kode test kita.

Sekarang saatnya kita menguji apakah `vector2d.add()` akan mengembalikan jawaban sesaui dengan harapan kita. Bila kita menambahkan dua buah vektor, `v1` dan `v2`, dimana pada tiap vektor, terdapat properti `x` dan `y`, maka kita juga mengharapkan metode `vector2d.add()` mengembalikan jawaban berupa sebuah objek dengan properti `x` dan `y` pula.

Jadi, misal:

``` javascript
    var v1 = {
            x: 20,
            y: 30
        },
        v2 = {
            x: 5,
            y: 1
        };
```

Maka, bila kedua objek di atas dijumlahkan, seharusnya hasilnya adalah sebuah objek dengan properti `x` bernilai `25`, dan `y` bernilai `31`.

Untuk memastikan hal tersebut, mari kita buat testnya terlebih dahulu. Kita akan melakukannya secara bertahap. Pertama, kita periksa bahwa nilai yang dikembalikan oleh metode `add` memiliki properti `x` dan `y`:

``` javascript
    it("Add method should return an object with property x and y", function(){
        var v1 = { x: 20, y: 30},
            v2 = { x: 5, y: 1};

        expect(vector2d.add(v1, v2).hasOwnProperty("x")).toBeTruthy();
    });
```

Apa yang terjadi ketika kita menyimpan kode test di atas?

![](/pics/testme-add-return.jpeg)

Ok, kita memang belum mengembalikan apapun ketika metode `add` dijalankan (perhatikan **TypeError: vector2d.add(...) is undefined**). Mari kita buat kode secukupnya agar kode test kita berwarna hijau:

``` javascript
    var vector2d = {
        add: function(){
            return {x: 0, y: 0};
        }
    };
```

Hasilnya? Hijau.

![](/pics/testme-add-return-passed.jpeg)

Sekarang saatnya memeriksa apakah kembalian dari metode `add` bernilai benar.

``` javascript
    it("Add method should return the correct answer", function(){
        var v1 = { x: 20, y: 30},
            v2 = { x: 5, y: 1};

        expect(vector2d.add(v1, v2)).toEqual({x: 25, y: 31});
    });
```

Namun, kode test di atas akan menghasilkan:

![](/pics/testme-add-return-value-failed.jpeg)

Perhatikan bagaimana jasmine memberitahukan kepada kita, kesalahan yang berhasil ditangkap oleh kode test terhadap module `vector2d`. Ketika kita mengharapkan kembalian berupa `{x: 25, y: 31}`, metode `add` malah mengembalikan `{x: 0, y: 0}`. Jelas bukan pesan errornya?

Saatnya memperbaiki metode `add`:

``` javascript
    var vector2d = {
        add: function(v1, v2){
            return {x: v1.x + v2.x , y: v1.y + v2.y};
        }
    };
```

Dan, yap, hasilnya hijau:

![](/pics/testme-add-return-value-passed.jpeg)

Ok, sampai disini semoga kita dapat melihat bagaiman **testem** telah memudahkan kita dalam menggunakan jasmine. Kita dapat memperoleh hasil dari testing secara langsung dan otomatis tiap kali kode kita mengalami perubahan.

Jangan lupa juga, bahwa **testem** juga melaporkan progress test kita pada console dimana command **testem** dijalankan:

![](/pics/testem-test-progress-4tests.jpeg)

### Menstrukturkan Test Suite

Kita dapat terus melanjutkan untuk menambahkan **specs** pada test kita sebelumnya. Namun ada suatu pendekatan yang dapat memudahkan kita dalam hal penstrukturan test.

Misal, pada kode test yang sudah ada saat ini, kita mengetahui bahwa kita sedang melakukan pengujian terhadap metode `add` yang dimiliki oleh `vector2d`. Bagaimana kalau kita mengelompokkan seluruh pengujian terhadap `add` di dalam sebuah kelompok sendiri?

Caranya adalah dengan menggunakan `describe`:

``` javascript
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
    });
```

Tampilan jasmine kita juga mengalami perubahan:

![](/pics/testem-group.jpeg)

### Matchers Lainnya

Metode seperti `toEqual`, `toBeDefined`, `toBeTruthy` yang sudah kami perlihatkan di atas adalah contoh dari **matchers**. Jasmine memiliki **matchers** lainnya yang dapat digunakan untuk menguji kode yang kita tulis.


Beberepa **matcher** lain yang disediakan oleh Jasmine adalah sebagai berikut:

**toBe**

``` javascript    
    expect(true).toBe(true);
    expect(false).not.toBe(true);
```

**toMatch** : pemeriksaan berdasarkan Regular Expression

``` javascript
    expect(someString).toMatch(/foo/);
    expect(someString).not.toMatch(/baar/);
```

**toBeNull**

``` javascript
    expect(null).toBeNull();
```

**toContain**

``` javascript
    var kota = ["Surabaya", "Malang", "Jakarta"];

    expect(kota).toContain("Malang");
    expect(kota).not.toContain("Bandung");
```    

### beforeEach dan afterEach

Bila kita ingin menjalankan suatu metode atau langkah-langkah tertentu sebelum setiap **spec** dijalankan, kita dapat memanfaatkan `beforeEach`. Sementara itu, bila kita ingin menjalankan suatu langkah tertentu setelah tiap **specs** selesai dijalankan, kita dapat menggunakan `afterEach`. Contoh:

``` javascript
    describe("Substract method", function(){
        var v1, v2;

        beforeEach(function(){
            v1 = {x: 20, y: 30};
            v2 = {x: 5, y: 50};
        });

        afterEach(function(){
            v1 = v2 = null;
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
```

Pada contoh di atas, sebelum tiap **spec** dijalankan, kita memberikan nilai kepada variabel `v1` dan `v2`. Tiap kali **specs** dijalankan, `v1` dan `v2` bernilai sesuai dengan nilai yang diberikan ketika `beforeEach` dijalankan.

Ketika tiap **specs** sudah dijalankan, kita me-null-kan kembali `v1` dan `v2`.