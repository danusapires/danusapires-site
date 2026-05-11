/**
 * Importa imagens premium do danusa-brand/images para o site/public.
 * Mapeamento semântico (não trazer nomes de stock para o build).
 */
import sharp from 'sharp';
import { mkdir, copyFile, readFile, access } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const BRAND = '/sessions/exciting-peaceful-heisenberg/mnt/site-cliente-mirror/danusa-brand/images';
const OUT = '/sessions/exciting-peaceful-heisenberg/mnt/SITE DANUSA PIRES/site/public';

// Cada item: source name → destino semântico
const PIPELINE = [
  // ── Hero principal (procedimento clínico em fundo escuro)
  {
    src: 'Trichoscopy of a woman\'s head with a trichoscope close up.jpeg',
    targets: [
      { dst: 'images/hero/diagnostico-tricoscopia.webp', width: 1600, format: 'webp', quality: 78 },
      { dst: 'images/hero/diagnostico-tricoscopia.avif', width: 1600, format: 'avif', quality: 55 },
    ],
  },
  // ── Closeup masculino (queda capilar masculina)
  {
    src: 'Close-up of a man\'s scalp with visible hair follicles and skin texture.jpeg',
    targets: [
      { dst: 'images/clinical/scalp-male-closeup.webp', width: 1400, format: 'webp', quality: 78 },
      { dst: 'images/clinical/scalp-male-closeup.avif', width: 1400, format: 'avif', quality: 55 },
    ],
  },
  // ── Couro cabeludo feminino (queda feminina)
  {
    src: 'Close-up of a woman scalp with black hair. Hairline and scalp View from above..jpeg',
    targets: [
      { dst: 'images/clinical/scalp-female-closeup.webp', width: 1400, format: 'webp', quality: 78 },
      { dst: 'images/clinical/scalp-female-closeup.avif', width: 1400, format: 'avif', quality: 55 },
    ],
  },
  // ── Procedimento mesoterapia
  {
    src: 'Specialist does injection in patient head skin during meso therapy procedure in cosmetology clinic.jpeg',
    targets: [
      { dst: 'images/clinical/procedure-mesotherapy.webp', width: 1400, format: 'webp', quality: 78 },
      { dst: 'images/clinical/procedure-mesotherapy.avif', width: 1400, format: 'avif', quality: 55 },
    ],
  },
  // ── Aplicação de serum (fortalecimento)
  {
    src: 'Trichologist applies a therapeutic serum to the scalp after hair mesotherapy to enhance follicle recovery and stimulate natural hair growth..jpeg',
    targets: [
      { dst: 'images/clinical/serum-application.webp', width: 1400, format: 'webp', quality: 78 },
      { dst: 'images/clinical/serum-application.avif', width: 1400, format: 'avif', quality: 55 },
    ],
  },
  // ── Exame trycoscopia (detalhe)
  {
    src: 'Closeup of man undergoing a trichoscopy examination to diagnose hair loss and scalp conditions in a dermatology clinic.jpeg',
    targets: [
      { dst: 'images/clinical/trichoscopy-exam.webp', width: 1400, format: 'webp', quality: 78 },
      { dst: 'images/clinical/trichoscopy-exam.avif', width: 1400, format: 'avif', quality: 55 },
    ],
  },
  // ── Ambiente luxo clínico
  {
    src: 'Luxurious Aesthetic Clinic with Black Marble Interior | AI Art Generator | Easy-Peasy.AI.jpeg',
    targets: [
      { dst: 'images/space/clinic-interior.webp', width: 1800, format: 'webp', quality: 76 },
      { dst: 'images/space/clinic-interior.avif', width: 1800, format: 'avif', quality: 55 },
    ],
  },
  // ── Ambiente alternativo
  {
    src: 'Дерматологична Клиника MG Derm - Ambiance Design.jpeg',
    targets: [
      { dst: 'images/space/clinic-ambiance.webp', width: 1800, format: 'webp', quality: 76 },
      { dst: 'images/space/clinic-ambiance.avif', width: 1800, format: 'avif', quality: 55 },
    ],
  },
  // ── Texturas (back drops)
  {
    src: 'dark brown hair texture, macro.jpeg',
    targets: [
      { dst: 'images/textures/hair-macro.webp', width: 1800, format: 'webp', quality: 75 },
    ],
  },
  {
    src: 'Black hair background, texture.jpeg',
    targets: [
      { dst: 'images/textures/black-hair-bg.webp', width: 1800, format: 'webp', quality: 72 },
    ],
  },
  // ── Premium banner gold
  {
    src: 'premium luxury medicine and healthcare concept - golden medical items on black background. banner.jpeg',
    targets: [
      { dst: 'images/textures/luxury-banner.webp', width: 1800, format: 'webp', quality: 75 },
    ],
  },
];

await mkdir(OUT, { recursive: true });

let processed = 0, skipped = 0, failed = 0;

for (const job of PIPELINE) {
  const srcPath = join(BRAND, job.src);
  let buf;
  try {
    buf = await readFile(srcPath);
    if (buf.length < 1024) {
      console.log(`⏭  ${job.src.slice(0, 50)}... (${buf.length}b — placeholder iCloud)`);
      skipped++;
      continue;
    }
    console.log(`↓ ${job.src.slice(0, 60)}...  ${(buf.length/1024).toFixed(0)}kb`);
  } catch (e) {
    console.warn(`⏭  ${job.src.slice(0, 50)}... — ${e.message}`);
    skipped++;
    continue;
  }

  for (const t of job.targets) {
    const outPath = join(OUT, t.dst);
    try {
      await mkdir(dirname(outPath), { recursive: true });
      let pipeline = sharp(buf).resize({ width: t.width, withoutEnlargement: true });
      if (t.format === 'webp') pipeline = pipeline.webp({ quality: t.quality, effort: 5 });
      else if (t.format === 'avif') pipeline = pipeline.avif({ quality: t.quality, effort: 4 });
      else if (t.format === 'png') pipeline = pipeline.png({ compressionLevel: 9 });
      const info = await pipeline.toFile(outPath);
      console.log(`  ✓ ${t.dst.padEnd(56)} ${(info.size/1024).toFixed(1)}kb  ${info.width}x${info.height}`);
      processed++;
    } catch (e) {
      console.error(`  ✗ ${t.dst}: ${e.message}`);
      failed++;
    }
  }
}

console.log(`\n— Processados: ${processed}  Pulados: ${skipped}  Falhas: ${failed} —`);
