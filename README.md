# Website Masjid Al-Birru (VitePress)

Website dokumentasi/portal masjid menggunakan **VitePress** dengan konten berbasis Markdown.

## Fitur
- Blog/Berita (`docs/blog`)
- Informasi Acara (`docs/acara`)
- Laporan Keuangan Bulanan (`docs/keuangan`)
- Deploy otomatis ke GitHub Pages via GitHub Actions

## Menjalankan Lokal
```bash
npm install
npm run docs:dev
```

## Build
```bash
npm run docs:build
```

## Deploy ke GitHub Pages
1. Push repository ke GitHub (`main` atau `work`).
2. Buka `Settings > Pages` lalu pilih **Source: GitHub Actions**.
3. Buka `Settings > Actions > General` dan pastikan workflow permissions adalah **Read and write permissions**.
4. Jalankan workflow `Build & Deploy VitePress` dari tab Actions (atau push commit baru agar auto-trigger).

> Konfigurasi default `base` saat ini adalah `/website-masjid-al-birru/`.
> Jika nama repository berbeda, ubah `base` di `docs/.vitepress/config.mjs`.
>
> Untuk override sementara tanpa ubah file, gunakan environment variable:
> `VITEPRESS_BASE='/nama-repo/' npm run docs:build`

## Menambah Konten Baru
Contoh menambah berita:
```bash
npm run new:blog -- "Judul Berita Baru"
```

Contoh menambah acara:
```bash
npm run new:acara -- "Kajian Spesial"
```

Contoh menambah laporan keuangan:
```bash
npm run new:keuangan -- "laporan-april"
```

Setelah file terbuat, tambahkan link ke `index.md` pada folder terkait.

## Menambahkan Gambar/Poster Acara
- Simpan poster di `docs/public/images/acara/`
- Tampilkan di markdown acara pakai path absolut dari root:

```md
![Poster Acara](/images/acara/nama-file-poster.svg (atau .jpg/.png))
![Poster Acara](/images/acara/nama-file-poster.jpg)
```

Lihat contoh di `docs/acara/2026-05-11-kajian-ahad-pagi.md`.
