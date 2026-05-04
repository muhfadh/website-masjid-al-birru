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
