import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'id-ID',
  title: 'Masjid Al-Birru',
  description: 'Portal resmi masjid: berita, acara, laporan keuangan, dan informasi jamaah.',
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
