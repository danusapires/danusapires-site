# Manifest de imagens · danusapires.com.br

Este documento lista **todas** as imagens referenciadas no código do site, com:
- caminho exato esperado
- onde aparece
- dimensões recomendadas
- estado (✅ existe / ❌ faltando / 🔄 substituir)

> **Como usar:** suba os arquivos via interface do GitHub (botão "Add file → Upload files" dentro da pasta correspondente) ou via `git`. Os nomes precisam ser exatamente como listado. Formatos: `.webp` é obrigatório, `.avif` é opcional (fallback otimizado — se não tiver, o navegador cai no `.webp`).

---

## 🟢 PRIORIDADE 1 — faltando, quebra o visual

| Pasta | Arquivo | Onde aparece | Dimensão recomendada | Estado |
|---|---|---|---|---|
| `hero/` | `tricologista-danusa-pires-home.webp` | Hero da home (painel direito) | 1600×1800px (vertical) | ❌ |
| `hero/` | `tricologista-danusa-pires-home.avif` | mesmo, fallback otimizado | mesmo | ❌ opcional |
| `clinical/` | `exame-clinico.webp` | Seção "Como funciona" da home | 1200×1500px | ❌ |
| `clinical/` | `exame-clinico.avif` | mesmo, fallback | mesmo | ❌ opcional |
| `space/` | `tricologista-danusa-pires-consultorio.webp` | Seção "Ambiente" da home (fullbleed) | 2400×1400px (horizontal) | ❌ |
| `space/` | `tricologista-danusa-pires-consultorio.avif` | mesmo, fallback | mesmo | ❌ opcional |
| `../team/` | `adriana-melo.webp` | Card da Adriana na home + página `/profissionais` | 800×1000px (vertical, retrato) | ❌ |
| `../team/` | `adriana-melo.avif` | mesmo, fallback | mesmo | ❌ opcional |

---

## 🟡 PRIORIDADE 2 — já existem, podem ser revistas

| Pasta | Arquivo | Onde aparece | Estado |
|---|---|---|---|
| `../team/` | `danusa-pires.webp` | Card da Danusa na home + `/profissionais` | ✅ existe |
| `../team/` | `danusa-pires-hero.webp` | Hero da página `/sobre` | ✅ existe |
| `hero/` | `diagnostico-tricoscopia.webp` | (legado — não mais usado) | ✅ pode deletar |
| `space/` | `clinic-interior.webp` | (legado — substituído por consultorio) | ✅ pode deletar |
| `space/` | `clinic-ambiance.webp` | Página `/sobre` | ✅ existe |
| `clinical/` | `procedure-mesotherapy.webp` | Página `/servicos/queda-feminina` etc | ✅ existe |
| `clinical/` | `serum-application.webp` | Página `/soroterapia` | ✅ existe |
| `clinical/` | `scalp-female-closeup.webp` | Hero dinâmico de serviços (slug) | ✅ existe |
| `clinical/` | `scalp-male-closeup.webp` | Hero dinâmico de serviços | ✅ existe |
| `clinical/` | `trichoscopy-exam.webp` | (legado — substituído por exame-clinico) | ✅ pode deletar |
| `galeria/` | `galeria-2.webp` … `galeria-7.webp` | Componente `<Galeria>` | ✅ todas existem |
| `textures/` | `black-hair-bg.webp` | Fundos editoriais | ✅ existe |
| `textures/` | `hair-macro.webp` | idem | ✅ existe |
| `textures/` | `luxury-banner.webp` | idem | ✅ existe |
| (raiz) | `hero-backdrop.webp` | Fundo editorial usado em layouts | ✅ existe |
| (raiz) | `logo-danusa-pires.webp` | Logo header | ✅ existe |
| (raiz) | `logo-danusa-pires-sm.webp` | Logo footer / favicon | ✅ existe |
| (raiz) | `sobre-clinica.webp` | Página `/sobre` | ✅ existe |

---

## 📏 Recomendações técnicas

- **Formato:** sempre `.webp` (obrigatório). `.avif` opcional como fallback otimizado (~30% menor que webp).
- **Compressão:** alvo de qualidade 78-82 (webp). Limite de **300KB por imagem** para evitar regressão Lighthouse.
- **Aspect ratio crítico:**
  - Hero retrato vertical: **4:5** ou **3:4** (1600×2000 ou 1200×1600)
  - Equipe (cards): **3:4 vertical** com rosto no terço superior (centralizado horizontalmente)
  - Ambiente (fullbleed): **16:9 horizontal** ou panorâmica
  - Clínico: **4:5 vertical** ou quadrado
- **Cor:** preservar tons naturais. O CSS aplica leve duotone obsidian/copper no hero — não forçar grading na imagem-fonte.
- **Sem watermark.** Sem texto sobreposto. Sem moldura.

## 🛠 Como gerar `.avif` a partir de `.webp` (opcional)

Mac/Linux com `ffmpeg`:
```
ffmpeg -i input.webp -c:v libaom-av1 -still-picture 1 -cpu-used 4 -crf 30 output.avif
```

Ou usar Squoosh (https://squoosh.app) no navegador.

---

## Checklist de subida

1. Renomear arquivo localmente para o nome **exato** da tabela acima.
2. Confirmar dimensões e peso (<300KB).
3. Subir na pasta correspondente.
4. Commitar com mensagem `assets: add [nome do arquivo]`.
5. Aguardar build CI (Cloudflare/Vercel/GitHub Pages — onde estiver hospedado).

Última atualização: 2026-05-18
