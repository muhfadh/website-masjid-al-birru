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
    logo: '/images/logo-masjid-al-birru.svg',
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
    ],
    footer: {
      message: 'Ikuti kami: <a href="https://instagram.com/masjid.albirru" target="_blank" rel="noreferrer">Instagram</a> • <a href="https://facebook.com/masjid.albirru" target="_blank" rel="noreferrer">Facebook</a> • <a href="https://youtube.com/@masjidalbirru" target="_blank" rel="noreferrer">YouTube</a> • <a href="https://t.me/masjidalbirru" target="_blank" rel="noreferrer">Telegram</a>',
      copyright: '© 2026 Masjid Al-Birru. Semua hak dilindungi.'
    }
    ]
  }
})
