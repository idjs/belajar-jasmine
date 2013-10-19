---
title: Persiapan
layout: base
isPage: true
---

## Menggunakan Jasmine dengan bantuan Testem

Untuk menggunakan jasmine, kita dapat menggunakan sebuah alat bernama **testem**. Alat ini bertugas untuk menjalankan code test yang telah kita buat.

Kemudahan yang ditawarkan oleh **testem** adalah dia dapat memantau code yang kita tulis (baik kode aplikasi maupun kode test). Bila terjadi perubahan pada kode-kode tersebut, maka **testem** akan secara otomatis menjalankan seluruh test yang sudah kita tulis.

Untuk menggunakan **testem**, kita dapat memasangnya menggunakan package manager milik NodeJS, yang bernama **npm**. Kami mengasumsikan bahwa pembaca sudah memiliki NodeJS pada sistemnya. Bila belum, pembaca dapat mengunjungi halaman [NodeJS](http://nodejs.org/) untuk memperoleh penjelasan bagaimana memasang NodeJS.

## Setup Kode

Contoh dari kode yang akan kita buat pada artikel ini dapat pembaca lihat di dalam folder `code` pada repository ini. Kami dengan sengaja menstrukturkan kode berdasarkan direktori `src` dan `specs`. Seluruh kode aplikasi kami letakkan di dalam direktori `src`, dan seluruh kode test kami letakkan di dalam direktori `specs`.

Agar **testem** dapat mengenali kode yang sudah kita tulis, kita perlu memberitahu **testem** mengenai struktur direktori kita. Kami mengasumsikan bahwa direktori utama dari project ini adalah direktori `code`.

Jadi pertama, kita membuat sebuah berkas untuk menuliskan konfigurasi. Berkas tersebut bernama `testem.json` dan kita letakkan pada path `code/testem.json`. Isi dari berkas tersebut adalah:

``` json
    {
        "framework": "jasmine",
        "src_files": [
            "src/**/*.js",
            "specs/**/*Spec.js"
        ],
        "launch_in_dev": ["Firefox"]
    }
```    

Pada konfigurasi di atas, kita menentukan bahwa kita hendak menggunakan **jasmine** untuk testnya. Kita juga sudah menentukan dimana kode kita berada pada **properti** `src_files`. Konfigurasi `src_files` di atas menjelaskan bahwa kode yang perlu dipantau berada di dalam direktori `src` (beserta sub-direktorinya), dan memiliki ekstensi `js`. Kita juga meminta **testmen** untuk memantau kode yang berada di dalam direktori `specs` (beserta sub-direktorinya), dan berkasnya memiliki akhiran `Spec.js`.

Kemudian kita menentukan bahwa kita hendak menjalankan test ini pada browser Firefox. Pembaca dapat menggunakan browser yang berbeda. **Testem** sudah mendukung banyak jenis browser. **Testem** juga dapat mengenali browser apa saja yang sudah terpasang pada sistem pembaca. Untuk mengetahuinya, silahkan jalankan perintah berikut pada console:

    testem launchers

Pada sistem kami, perintah di atas menghasilkan jawaban berikut:

![](pics/testem-launchers.jpeg)

Dan pembaca dapat memilih daftar browser yang sudah dideteksi oleh **testem**, kemudian menuliskannya pada properti `launch_in_dev`.