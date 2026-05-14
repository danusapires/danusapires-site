# Deploy — Cloudflare Pages

Guia operacional para colocar `www.danusapires.com.br` no ar via Cloudflare Pages, com DNS já gerenciado no Cloudflare.

**Stack:** Astro 6 estático · Cloudflare Pages (build na borda) · DNS Cloudflare · SSL automático.

**Por que Cloudflare Pages:** POP em São Paulo (latência mínima para a paciente brasileira), SSL automático, integração nativa com DNS já delegado no Cloudflare, sem limite de banda no plano free, build automático em cada push para `main`. Mais moderno que GitHub Pages, sem os limites de banda do Vercel free tier.

---

## Fase A — Setup inicial no Cloudflare (uma vez)

### A.1 Criar o projeto no Cloudflare Pages

1. Logar em [dash.cloudflare.com](https://dash.cloudflare.com) com a conta que já gerencia o DNS de `danusapires.com.br`.
2. Menu lateral: **Workers & Pages** → **Create application** → aba **Pages** → **Connect to Git**.
3. Autorizar Cloudflare a ler o GitHub (escopo: `danusapires/danusapires-site`).
4. Selecionar o repositório `danusapires/danusapires-site`.
5. **Branch de produção:** `main`.

### A.2 Configurar build

Na tela "Set up builds and deployments":

| Campo | Valor |
|---|---|
| **Framework preset** | `Astro` |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Root directory (advanced)** | `SITE DANUSA PIRES/site` |
| **Node version** | `22` (via env var `NODE_VERSION=22`) |

> ⚠️ O nome da pasta raiz contém **espaços e maiúsculas** (`SITE DANUSA PIRES/site`). O Cloudflare aceita, mas se aparecer erro de path, escapar com aspas ou considerar renomear a pasta no repo num PR separado. Validado no build local antes do deploy.

### A.3 Variáveis de ambiente (build)

Na seção **Environment variables (build)** adicionar:

```
NODE_VERSION = 22
```

(Não há outras env vars críticas no build atualmente. Quando `gtmId`, `gasUrl` e `metaPixelId` migrarem para env vars, adicionar aqui.)

### A.4 Primeiro deploy

1. Clicar **Save and Deploy**.
2. Aguardar build (~1-2 min). Cloudflare gera URL temporária: `danusapires-site.pages.dev`.
3. Acessar essa URL e validar visualmente: hero, método ESPELHO em 4 cards, footer com wordmark, navegação, fontes carregando.

Se o build falhar por causa do espaço no caminho:
- Plano B: criar um `package.json` na raiz com script `"build": "cd 'SITE DANUSA PIRES/site' && npm ci && npm run build"` e setar root directory como `/`.
- Plano C: renomear a pasta para `site/` na raiz (PR separado, alterações em paths de docs).

---

## Fase B — Conectar o domínio `www.danusapires.com.br`

### B.1 Adicionar custom domain no Cloudflare Pages

1. No projeto Pages criado, ir em **Custom domains** → **Set up a custom domain**.
2. Inserir `www.danusapires.com.br` → **Continue**.
3. Cloudflare detecta que o DNS já está na mesma conta e oferece configuração automática — aceitar.
4. Repetir para o apex `danusapires.com.br` (recomendado: cria redirect 301 para o www).

### B.2 DNS Cloudflare (gerado automaticamente)

Se o Cloudflare não criar sozinho, criar manualmente em **DNS → Records**:

| Type | Name | Content | Proxy |
|---|---|---|---|
| CNAME | `www` | `danusapires-site.pages.dev` | 🟠 Proxied |
| CNAME | `@` (apex) | `danusapires-site.pages.dev` | 🟠 Proxied |

> Cloudflare faz "CNAME flattening" no apex — funciona mesmo sendo CNAME na raiz.

### B.3 Redirect apex → www (canonical)

Em **Rules → Page Rules** (ou **Redirect Rules** no novo painel):

- **URL:** `danusapires.com.br/*`
- **Action:** Forwarding URL, 301 Permanent Redirect → `https://www.danusapires.com.br/$1`

Isso garante que toda visita ao apex vai para o www canônico (configurado no `astro.config.mjs`).

### B.4 SSL/TLS

Em **SSL/TLS → Overview**:
- **Encryption mode:** `Full (strict)` — Cloudflare Pages emite cert válido automaticamente.

Em **SSL/TLS → Edge Certificates**:
- ✅ **Always Use HTTPS**
- ✅ **Automatic HTTPS Rewrites**
- ✅ **HSTS** (apenas após confirmar que tudo funciona em HTTPS — HSTS é difícil de reverter)

---

## Fase C — Pós-deploy (validação)

### C.1 Smoke test
- [ ] `https://www.danusapires.com.br` carrega
- [ ] `https://danusapires.com.br` redireciona 301 para o www
- [ ] Cadeado SSL válido em ambas
- [ ] `sitemap-index.xml` acessível em `/sitemap-index.xml`
- [ ] `robots.txt` em `/robots.txt`
- [ ] Cada rota lista construída: `/`, `/sobre`, `/profissionais`, `/profissionais/danusa-pires`, `/soroterapia`, `/terapias-holisticas`, `/contato`, `/agendamento`

### C.2 Lighthouse
- Rodar Lighthouse em produção. Esperado: perf ≥ 0.90, a11y ≥ 0.90, SEO ≥ 0.95, LCP ≤ 2500ms, CLS ≤ 0.1.

### C.3 Search Console + Analytics
- Submeter `https://www.danusapires.com.br/sitemap-index.xml` no Google Search Console.
- Configurar GA4 quando `gtmId` estiver disponível (pendência atual — ver `PENDENCIAS.md`).

---

## Operação contínua

- **Deploy automático:** push em `main` dispara build no Cloudflare Pages.
- **Preview deploys:** cada PR ganha URL temporária `pr-123.danusapires-site.pages.dev` (útil para revisar visualmente antes de merge).
- **Rollback:** dashboard do Pages → **Deployments** → escolher deployment anterior → **Rollback**.
- **Logs:** dashboard do Pages → **Deployments** → clicar no build → ver logs.

## Migração do site antigo (`dradanusa.com.br`)

Se o WordPress antigo em `dradanusa.com.br` ainda está no ar:
- **Opção 1 (recomendado):** redirecionar `dradanusa.com.br/*` → `www.danusapires.com.br/$1` via 301 (preserva SEO acumulado). Configurar no provedor que hospeda o WP atual ou via Cloudflare se o DNS for migrado.
- **Opção 2:** deixar morrer naturalmente. Custo: perda de domain authority histórico nas URLs antigas.

Decidir antes do go-live. A decisão impacta SEO no primeiro trimestre.

---

## O que ainda depende da Danusa / fornecedores

Conforme `PENDENCIAS.md`, antes do go-live público:
- `email` comercial oficial
- `gtmId` (Google Tag Manager)
- `gasUrl` (Google Apps Script para formulários)
- Logo SVG oficial
- Fotos de clínica e equipe
- Autorização escrita para depoimentos atuais (substituir `[PENDENTE]`)
- Hex oficial da cor Sálvia

Tecnicamente o site funciona sem esses itens, mas vai para o ar com placeholders. Decisão: lançar parcial em `www.danusapires.com.br` e iterar, ou aguardar pendências completas?
