# CLAUDE.md — Projeto Site Danusa Pires

Este arquivo é a entrada principal para qualquer instância do Claude Code que trabalhe neste projeto. Lê BRAND.md para sistema de marca e PENDENCIAS.md para itens críticos não respondidos. O código vive em `site/` — ver `site/CLAUDE.md` para protocolo técnico operacional.

## Operadora do projeto

- Cliente: Danusa Pires (não usar prefixo "Dra." na marca principal — ver BRAND.md)
- Domínio: www.danusapires.com.br (deploy via Cloudflare Pages)
- Email operacional do projeto: danusa.gic@gmail.com
- Direção criativa: GJORA Intelligence
- Mirror do site antigo: `/Users/gustavogehrke/Desktop/site-cliente-mirror`

## Stack

- Astro 6 + TypeScript strict
- Zero JS dependencies além de `@astrojs/sitemap`
- Self-hosted fonts em `site/public/fonts/`
- Deploy: Cloudflare Pages (planejado)
- Performance target: Lighthouse perf ≥ 0.90, LCP ≤ 2500ms, CLS ≤ 0.1

## Forma de trabalho

Antes de qualquer alteração:
1. Ler BRAND.md para garantir consistência de marca
2. Ler PENDENCIAS.md para saber o que está bloqueado por falta de input da cliente
3. Confirmar com o operador (Gustavo) qualquer decisão estratégica antes de executar
4. Nunca inventar dados — sinalizar exatamente qual informação falta
5. Trabalhar em alterações incrementais e reversíveis
6. Em terminal, dar comandos sem comentários inline para evitar erro de copy-paste

## Princípios não-negociáveis

- Marca = **Danusa Pires** (sem "Dra." na marca principal)
- Descritor = **Tricologia & Saúde Integrativa**
- Método clínico proprietário = **Método ESPELHO** (não DPC)
- Serviço soroterapia = **Soroterapia** no institucional, **smart.soro** como gancho de identidade
- Sem caracteres que entreguem texto de IA (em-dashes, emojis decorativos, "delve into", etc.)
- Toda copy segue estrutura: Problema → Mecanismo → Intervenção → Resultado possível
- Linhas vermelhas em BRAND.md são absolutas

## Estrutura de arquivos relevantes

```
/SITE DANUSA PIRES/
├── CLAUDE.md                                          ← este arquivo (visão alto nível)
├── BRAND.md                                           ← sistema de marca completo
├── PENDENCIAS.md                                      ← itens não respondidos pela cliente
├── brandbook-danusa-pires-v4-obsidian-clinical.html   ← referência visual canônica
├── _briefing-resposta-danusa.md                       ← respostas brutas da cliente (84 perguntas)
├── _analise-respostas-danusa.md                       ← análise estruturada das respostas
└── site/                                              ← código Astro
    ├── CLAUDE.md                                      ← protocolo técnico operacional
    ├── src/data/site.ts                               ← single source of truth da marca
    ├── src/data/professionals.ts                      ← perfis da equipe
    └── src/pages/                                     ← rotas
```

## Comandos de partida típicos para o Claude Code

Diagnóstico inicial:
```
cd "/Users/gustavogehrke/Desktop/site danusa/SITE DANUSA PIRES/site"
git status
node -v
cat package.json | grep engines
```

Build local:
```
npm install
npm run build
npm run preview
```

## Próximas decisões já travadas com a cliente (Maio/2026)

- Brandbook v4 aprovado (Obsidian Clinical + Sálvia)
- Frase manifesto: "O cabelo é reflexo do nosso organismo"
- Método ESPELHO como assinatura clínica
- smart.soro como gancho de identidade da soroterapia
- 7 serviços ativos (TrichoTest adicionado, Inflamações apenas em casos leves)
- Persona alvo: mulher 48 anos, menopausa, profissional liberal, renda 8k+
- Filtros clínicos: 18+, sem inflamações graves (encaminhar para avaliação médica)
- 33 ativos de soroterapia catalogados (ver BRAND.md ou brandbook v4)

## Pendências bloqueantes (ver PENDENCIAS.md)

Email comercial · GTM ID · GA4 ID · 3 frases pessoais · 3 posts de blog · hex Sálvia · logo SVG · fotos clínica · vídeos curtos · autorização depoimento.
