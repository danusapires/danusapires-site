/**
 * Importa imagens reais direto da URL pública do site WP (dradanusa.com.br),
 * já que o mirror local está em iCloud não baixado.
 *
 * Converte PNG/JPG → WebP + AVIF, redimensiona, organiza por tipo.
 *
 * Uso: node scripts/import-mirror-images.mjs
 */
import sharp from 'sharp';
import { mkdir, writeFile, access } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const BASE = 'https://dradanusa.com.br';
const OUT = '/sessions/exciting-peaceful-heisenberg/mnt/SITE DANUSA PIRES/site/public';
const TMP = '/tmp/danusa-images';

const PIPELINE = [
  // ── Foto Dra. Danusa ──
  {
    url: `${BASE}/storage/2025/04/danusa.png`,
    targets: [
      { dst: 'team/danusa-pires.webp', width: 700, format: 'webp', quality: 82 },
      { dst: 'team/danusa-pires.avif', width: 700, format: 'avif', quality: 60 },
      { dst: 'team/danusa-pires-hero.webp', width: 1400, format: 'webp', quality: 80 },
      { dst: 'team/danusa-pires-hero.avif', width: 1400, format: 'avif', quality: 55 },
    ],
  },

  // ── Logo ──
  {
    url: `${BASE}/storage/2025/04/LOGO_DanusaPiresJPG-sacala-1024x724.jpg`,
    targets: [
      { dst: 'images/logo-danusa-pires.webp', width: 800, format: 'webp', quality: 88 },
      { dst: 'images/logo-danusa-pires-sm.webp', width: 400, format: 'webp', quality: 88 },
    ],
  },

  // ── Sobre a clínica (interior) ──
  {
    url: `${BASE}/storage/2024/07/sobre-a-clinica.png`,
    targets: [
      { dst: 'images/sobre-clinica.webp', width: 1200, format: 'webp', quality: 80 },
      { dst: 'images/sobre-clinica.avif', width: 1200, format: 'avif', quality: 55 },
    ],
  },

  // ── Galeria do espaço ──
  ...[2, 3, 4, 5, 6, 7].flatMap(n => ([
    {
      url: `${BASE}/storage/2024/07/galeria-${n}.png`,
      targets: [
        { dst: `images/galeria/galeria-${n}.webp`, width: 1000, format: 'webp', quality: 78 },
        { dst: `images/galeria/galeria-${n}.avif`, width: 1000, format: 'avif', quality: 55 },
      ],
    },
  ])),

  // ── Background editorial ──
  {
    url: `${BASE}/storage/2024/07/bg-danuza.png`,
    targets: [
      { dst: 'images/hero-backdrop.webp', width: 1800, format: 'webp', quality: 75 },
    ],
  },

  // ── Favicons ──
  {
    url: `${BASE}/storage/2024/07/cropped-favicon-32x32.png`,
    targets: [{ dst: 'favicon/favicon-32.png', width: 32, format: 'png' }],
  },
  {
    url: `${BASE}/storage/2024/07/cropped-favicon-192x192.png`,
    targets: [{ dst: 'favicon/icon-192.png', width: 192, format: 'png' }],
  },
  {
    url: `${BASE}/storage/2024/07/cropped-favicon-180x180.png`,
    targets: [{ dst: 'favicon/apple-touch-icon.png', width: 180, format: 'png' }],
  },
];

await mkdir(TMP, { recursive: true });

async function ensureDir(file) {
  await mkdir(dirname(file), { recursive: true });
}

async function fetchBuffer(url) {
  const r = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  return Buffer.from(await r.arrayBuffer());
}

let processed = 0, skipped = 0, failed = 0;

for (const job of PIPELINE) {
  let buf;
  try {
    process.stdout.write(`↓ ${job.url.replace(BASE, '')}  ... `);
    buf = await fetchBuffer(job.url);
    console.log(`${(buf.length / 1024).toFixed(0)}kb`);
  } catch (e) {
    console.log(`FAIL (${e.message})`);
    skipped++;
    continue;
  }

  for (const t of job.targets) {
    const outPath = join(OUT, t.dst);
    try {
      await ensureDir(outPath);
      let pipeline = sharp(buf).resize({ width: t.width, withoutEnlargement: true });

      if (t.format === 'webp') pipeline = pipeline.webp({ quality: t.quality, effort: 5 });
      else if (t.format === 'avif') pipeline = pipeline.avif({ quality: t.quality, effort: 4 });
      else if (t.format === 'png') pipeline = pipeline.png({ compressionLevel: 9 });

      const info = await pipeline.toFile(outPath);
      console.log(`  ✓ ${t.dst.padEnd(48)} ${(info.size/1024).toFixed(1)}kb  ${info.width}x${info.height}`);
      processed++;
    } catch (e) {
      console.error(`  ✗ ${t.dst}: ${e.message}`);
      failed++;
    }
  }
}

console.log(`\n— Processados: ${processed}  Pulados: ${skipped}  Falhas: ${failed} —`);
