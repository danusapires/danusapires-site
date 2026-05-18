# Cloudflare Pages Deployment Setup

## Configuração do Domínio: `danusapires.com.br`

Este documento guia o setup inicial para deploy em Cloudflare Pages com domínio customizado.

### Objetivo

Conectar o domínio `danusapires.com.br` (já registrado no Registro.br) ao Cloudflare Pages, sem transferir a propriedade do domínio.

### Pré-requisitos

- Domínio registrado no Registro.br: `danusapires.com.br` ✓
- Conta Cloudflare (plano Free é suficiente) ✓
- Repositório GitHub: `danusapires/danusapires-site`
- Build command: `npm run build`
- Output directory: `dist/`
- Root directory: `/` (raiz do repositório — Astro está na raiz)

### Fluxo de Setup

#### 1. Criar projeto no Cloudflare Pages

1. Acesse [dash.cloudflare.com](https://dash.cloudflare.com)
2. Menu lateral → **Pages**
3. Clique em **Connect to Git**
4. Autorize o GitHub (`danusapires/danusapires-site`)
5. Selecione o repositório e a branch `main` (ou a branch que quiser fazer deploy)
6. **Build configuration:**
   - Build command: `npm run build`
   - Build output directory: `dist/`
   - Root directory: `/` (raiz do repositório — Astro está na raiz)
7. Clique em **Save and Deploy**

Cloudflare criará uma build inicial. Após completar (pode levar 2-5 minutos), você verá um domínio temporário como `https://<hash>.pages.dev`.

#### 2. Conectar domínio ao Cloudflare Pages

Após o projeto estar criado:

1. Acesse **Pages** → selecione o projeto
2. Abra a aba **Custom domains**
3. Clique em **Set up a custom domain**
4. Escolha a opção **"Connect a domain"** (NÃO "Transfer a domain")
5. Digite: `danusapires.com.br`
6. Cloudflare mostrará **2 nameservers** (exemplo):
   ```
   iris.ns.cloudflare.com
   josh.ns.cloudflare.com
   ```

#### 3. Atualizar nameservers no Registro.br

Você agora precisa apontar o domínio para esses nameservers:

1. Acesse [registro.br](https://registro.br) e faça login
2. Navegue até **Meus domínios** → selecione `danusapires.com.br`
3. Abra a aba **Servidores de nomes**
4. Remova os nameservers antigos (se houver)
5. Adicione os **2 nameservers do Cloudflare**:
   - `iris.ns.cloudflare.com`
   - `josh.ns.cloudflare.com`
6. Salve as alterações

**Nota:** A propagação dos nameservers pode levar de 5 minutos a 48 horas (tipicamente 15-30 minutos).

#### 4. Validar a conexão

No painel do Cloudflare Pages:

1. Volte para **Custom domains**
2. Aguarde o status mudar para **Active** (quando a propagação terminar)
3. Se após 2 horas ainda estiver pendente, clique em **Check nameservers** para forçar uma verificação

#### 5. Configurar www.danusapires.com.br

Se desejar servir também em `www.danusapires.com.br`:

1. No Cloudflare Pages → **Custom domains**
2. Clique em **Add domain** novamente
3. Digite: `www.danusapires.com.br`
4. Cloudflare detectará que os nameservers já apontam para Cloudflare e confirmará automaticamente

### Configurações recomendadas pós-deploy

No dashboard Cloudflare (não em Pages, mas no painel principal):

1. **SSL/TLS** → Mode: **Full (strict)**
2. **Caching** → Cache rules: verificar que `dist/` é servido com cache apropriado
3. **Performance** → Auto minify: **ON** (CSS, JS, HTML)
4. **Security** → WAF: considerar regras básicas de DDoS

### Monitoramento

- **Logs**: Cloudflare Pages mostra logs de build em **Deployments** → clique em cada deploy
- **Performance**: [Web Vitals](https://dash.cloudflare.com) → Performance
- **DNS**: [DNS checker](https://www.nslookup.io/) → verificar se aponta corretamente

### Rollback / Remover domínio

Se precisar remover o domínio do Cloudflare:

1. Cloudflare Pages → **Custom domains** → remover o domínio
2. Voltar ao Registro.br e restaurar os nameservers antigos (se mantiver o domínio registrado lá)
3. A propagação acontecerá novamente (até 48h)

---

**Última atualização:** 14 de Maio de 2026  
**Responsável:** Gustavo Gehrke (GJORA Intelligence)  
**Cliente:** Danusa Pires
