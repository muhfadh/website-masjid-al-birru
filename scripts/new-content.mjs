import fs from 'node:fs'
import path from 'node:path'

const type = process.argv[2]
const title = process.argv.slice(3).join(' ').trim() || 'judul-baru'
const now = new Date()
const yyyy = now.getUTCFullYear()
const mm = String(now.getUTCMonth() + 1).padStart(2, '0')
const dd = String(now.getUTCDate()).padStart(2, '0')
const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9\s-]/g, '')
  .trim()
  .replace(/\s+/g, '-')

const map = {
  blog: `docs/blog/${yyyy}-${mm}-${dd}-${slug}.md`,
  acara: `docs/acara/${yyyy}-${mm}-${dd}-${slug}.md`,
  keuangan: `docs/keuangan/${yyyy}-${mm}-${slug}.md`
}

if (!map[type]) {
  console.error('Gunakan: blog | acara | keuangan')
  process.exit(1)
}

const out = map[type]
const template = `---\ntitle: "${title}"\ndate: "${yyyy}-${mm}-${dd}"\n---\n\nTulis konten di sini.\n`
fs.mkdirSync(path.dirname(out), { recursive: true })
fs.writeFileSync(out, template)
console.log(`Berhasil membuat: ${out}`)
