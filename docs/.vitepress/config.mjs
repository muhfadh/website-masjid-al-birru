import { defineConfig } from 'vitepress'

// Untuk GitHub Pages project site:
// https://<username>.github.io/website-masjid-al-birru/
const base = process.env.VITEPRESS_BASE ?? '/website-masjid-al-birru/'

export default defineConfig({
  lang: 'id-ID',
  title: 'Masjid Al-Birru',
  description: 'Portal resmi masjid: berita, acara, laporan keuangan, dan informasi jamaah.',
  base,
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: 'Beranda', link: '/' },
      { text: 'Blog/Berita', link: '/blog/' },
      { text: 'Acara', link: '/acara/' },
      { text: 'Keuangan', link: '/keuangan/' }
    ],
    sidebar: {
      '/blog/': [
        { text: 'Blog/Berita', items: [{ text: 'Daftar Berita', link: '/blog/' }] }
      ],
      '/acara/': [
        { text: 'Acara Masjid', items: [{ text: 'Daftar Acara', link: '/acara/' }] }
      ],
      '/keuangan/': [
        { text: 'Laporan Keuangan', items: [{ text: 'Daftar Laporan', link: '/keuangan/' }] }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-org/website-masjid-al-birru' }
    ]
  }
})
