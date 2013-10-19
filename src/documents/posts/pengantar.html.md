---
title: Pengantar
layout: base
---

## Pengantar

Misal, kita memiliki fungsi menambahkan dua buah vektor sebagai berikut:

``` javascript
    function add(v1, v2){
        return {x: v1.x + v2.x, y: v1.y + v2.y};
    }
```

Nah, bagaimana kita memeriksa bahwa fungsi di atas itu benar? Salah satu cara adalah dengan menampilkan hasilnya menggunakan `console.log`:

``` javascript
    var v1 = {
            x: 10,
            y: 5
        },
        v2 = {
            x: 5,
            y: 10
        },
        result;

    result = add(v1, v2);
    console.log(result);
```

Metode `console.log()` akan menampilkan hasil dari penjumlahan vektor `v1` dengan `v2`. Kita dapat melihat nilainya pada **developer tool** dari browser yang kita pakai.

Namun, pendekatan di atas sangatlah tidak efisien. Bayangkan kita memiliki banyak fungsi, banyak module, dst, apakah kita akan memeriksa satu-per-satu fungsi, module tersebut pada **developer tool**? Ketika aplikasi yang sedang kita kembangkan bertambah besar, pendekatan di atas akan semakin sulit untuk digunakan.

Inilah mengapa kita perlu suatu pendekatan yang lebih otomatis dan lebih efektif untuk menguji fungsi, module, objek , dsb.

## Jasmine

[Jasmine](http://pivotal.github.io/jasmine/) adalah sebuah alat yang memberikan kemudahan kepada kita untuk melakukan testing secara otomatis. Kita dapat memeriksa fungsi, module, alur, dsb dari code yang telah kita ketikkan.

Mengambil contoh di atas, kita dapat menguji kebenaran dari metode `add` dengan cara sebagai berikut:

``` javascript
    expect(add(v1, v2)).toEqual({x: 15, y: 15});
```    

Jangan khawatir mengenai sintaks `expect` dan `toEqual` dari contoh di atas. Kita akan mempelajari sintaks-sintaks yang dimiliki oleh Jasmine sesegera mungkin. Tetapi inti dari contoh di atas adalah, daripada kita menguji fungsi `add` secara manual, kita dapat mengotomatiskannya.

Fungsi `add` akan bernilai benar bila hasil penambahan dari vektor `v1` dan `v2` menghasilkan sebuah objek dengan properti `x` bernilai 15, dan properti `y` bernilai 15. Maka kita dapat menguji hal ini dengan memastikan bahwa ketika `v1` dan `v2` dijumlahkan (berdasarkan contoh di atas), hasil yang dikembalikan memang sesuai dengan hasil yang kita harapkan.