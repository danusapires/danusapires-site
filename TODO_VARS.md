# Variáveis de Configuração Pendentes

## ⚠️ CRÍTICO - Deve ser preenchido antes do deploy para produção

### 1. Google Analytics & Tracking
```typescript
// src/data/site.ts → SITE object
gtmId: 'G-XXXXXXXXXX'  // Google Tag Manager ID
metaPixelId: '123456789'  // Meta Pixel ID (Facebook)
```

**Ação:** 
- Criar conta Google Analytics 4 em [google.com/analytics](https://analytics.google.com)
- Criar container GTM em [tagmanager.google.com](https://tagmanager.google.com)
- Criar Pixel Meta em [business.facebook.com/pixels](https://business.facebook.com/pixels)

### 2. Google Apps Script para Formulários
```typescript
// src/data/site.ts → SITE object
gasUrl: 'https://script.google.com/macros/d/{SCRIPT_ID}/usercontent'
```

**Ação:**
- Criar Google Sheet para leads
- Criar Google Apps Script que recebe POST de forms
- Publicar como API Web
- Copiar URL aqui
- Referência: `.google/forms-backend.md` (criar guia)

### 3. CNPJ da Clínica
```typescript
// src/data/site.ts → SITE object
cnpj: '12.345.678/0001-90'  // CNPJ real da Danusa Pires
```

**Ação:** Resgatar com Danusa Pires

### 4. Email da Clínica
```typescript
// src/data/site.ts → SITE object
email: 'contato@danusapires.com.br'  // ✅ Já preenchido
```

Status: ✅ FEITO (27.04.2026)

---

## 🟡 IMPORTANTE - Melhorias pós-launch

### 5. Supabase (Banco de Dados para Leads)
```typescript
// Criar .env.local
PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
PUBLIC_SUPABASE_ANON_KEY=eyJxxxx...
```

**Ação:**
- Criar conta em [supabase.com](https://supabase.com)
- Criar table `leads` com schema:
  ```sql
  CREATE TABLE leads (
    id BIGSERIAL PRIMARY KEY,
    form_type TEXT,
    name TEXT,
    email TEXT,
    phone TEXT,
    message TEXT,
    professional TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    status TEXT DEFAULT 'novo'
  );
  ```
- Gerar anon key e URL

### 6. Mailgun (Transactional Emails)
```typescript
// .env.local
MAILGUN_API_KEY=key-xxxx
MAILGUN_DOMAIN=mg.danusapires.com.br
```

**Ação:**
- Criar conta em [mailgun.com](https://mailgun.com)
- Configurar domain customizado
- Testar envio de emails de confirmação

### 7. Sentry (Error Tracking)
```typescript
// .env.local
PUBLIC_SENTRY_DSN=https://xxxx@sentry.io/yyyy
```

**Ação:**
- Criar conta em [sentry.io](https://sentry.io)
- Criar project para Astro
- Copiar DSN

---

## 🔵 OPCIONAL - Futuras integrações

- **Calendly**: Para agendamento automático
- **Stripe/PagSeguro**: Para pagamentos online
- **Jitsi**: Para telemedicina integrada
- **LogRocket**: Session replay

---

## Checklist de Deploy

- [ ] gtmId preenchido
- [ ] metaPixelId preenchido
- [ ] gasUrl preenchido e testado
- [ ] cnpj preenchido
- [ ] Email funcional (contato@danusapires.com.br ativa)
- [ ] npm run build com sucesso
- [ ] lhci autorun ≥ 0.90 em todas as métricas
- [ ] Testar todos os formulários
- [ ] Cloudflare Pages build sucesso
- [ ] danusapires.com.br acessível
- [ ] SSL/TLS ativo (Cloudflare)

---

**Última atualização:** 2026-05-15
**Responsável:** Claude Code
