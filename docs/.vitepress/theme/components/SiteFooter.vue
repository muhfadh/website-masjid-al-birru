<script setup>
import { withBase } from 'vitepress'

const currentYear = new Date().getFullYear()
const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com/masjid.albirru' },
  { label: 'Facebook', href: 'https://facebook.com/masjid.albirru' },
  { label: 'YouTube', href: 'https://youtube.com/@masjidalbirru' },
  { label: 'Telegram', href: 'https://t.me/masjidalbirru' }
]

const quickLinks = [
  { label: 'Blog/Berita', href: withBase('/blog/') },
  { label: 'Acara', href: withBase('/acara/') },
  { label: 'Keuangan', href: withBase('/keuangan/') }
]
</script>

<template>
  <footer class="site-footer" aria-labelledby="site-footer-title">
    <div class="site-footer__inner">
      <section class="site-footer__brand">
        <img
          class="site-footer__logo"
          :src="withBase('/images/logo-masjid-al-birru.svg')"
          alt="Logo Masjid Al-Birru"
          width="48"
          height="48"
        >
        <div>
          <h2 id="site-footer-title">Masjid Al-Birru</h2>
          <p>Pusat informasi jamaah, kegiatan masjid, dan laporan keuangan.</p>
        </div>
      </section>

      <nav class="site-footer__nav" aria-label="Navigasi footer">
        <h3>Menu</h3>
        <a v-for="link in quickLinks" :key="link.href" :href="link.href">
          {{ link.label }}
        </a>
      </nav>

      <nav class="site-footer__nav" aria-label="Media sosial">
        <h3>Media Sosial</h3>
        <a
          v-for="link in socialLinks"
          :key="link.href"
          :href="link.href"
          target="_blank"
          rel="noreferrer"
        >
          {{ link.label }}
        </a>
      </nav>
    </div>

    <div class="site-footer__bottom">
      © {{ currentYear }} Masjid Al-Birru. Semua hak dilindungi.
    </div>
  </footer>
</template>
