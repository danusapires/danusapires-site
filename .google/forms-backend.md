# Google Apps Script Backend para Formulários

## Visão geral

O Google Apps Script (GAS) é um backend serverless hospedado no Google Cloud. Funciona como endpoint que:
1. Recebe POST dos formulários do site
2. Escreve leads em Google Sheet
3. Retorna resposta JSON com status
4. Suporta envio de email de confirmação (via Mailgun depois)

**Custo:** Gratuito até ~2.000 invocações/dia.

---

## Fase 1: Preparar Google Sheet para leads

### Passo 1: Criar Sheet

1. Ir a [sheets.google.com](https://sheets.google.com)
2. Criar planilha nova: **"Danusa Pires — Leads"**
3. Na aba `Sheet1`, criar headers (linha 1):

```
form_type | name | email | phone | message | professional | created_at | status | ip_address | user_agent | referrer
```

**Valores válidos para `form_type`:**
- `agendamento` (scheduling)
- `segunda-opiniao` (second opinion)
- `consulta-online` (online consultation)
- `profissional` (professional inquiry)
- `contato` (general contact)
- `newsletter` (newsletter signup)

**Status padrão:** `novo` (novo lead não lido)

### Passo 2: Copiar Sheet ID

- Abrir a planilha
- URL: `https://docs.google.com/spreadsheets/d/{SHEET_ID}/edit`
- Copiar `{SHEET_ID}` — você vai precisar na Fase 2

---

## Fase 2: Criar Google Apps Script

### Passo 1: Criar projeto GAS

1. Ir a [script.google.com](https://script.google.com)
2. Novo projeto
3. Nome: `Danusa Pires Forms Backend`
4. Deletar o `Code.gs` padrão

### Passo 2: Colar código template

Colar o código abaixo em `Code.gs`:

```javascript
// ============================================================================
// DANUSA PIRES FORMS BACKEND
// Google Apps Script para receber formulários do site
// ============================================================================

// CONFIGURAÇÃO (editar antes de publicar)
const SHEET_ID = 'SEU_SHEET_ID_AQUI'; // Copiar de sheets.google.com
const SHEET_NAME = 'Sheet1'; // Nome da aba dentro da planilha
const ACCEPTED_ORIGINS = ['https://danusapires.com.br', 'https://www.danusapires.com.br'];

// ============================================================================
// HANDLER PRINCIPAL
// ============================================================================

function doPost(e) {
  try {
    // 1. Validar origem (CORS básico)
    const origin = e.parameter.origin || e.postData.headers.Referer;
    if (!ACCEPTED_ORIGINS.some(o => origin && origin.includes(o))) {
      return respondError('Origem não autorizada', 403);
    }

    // 2. Parse dos dados do formulário
    const data = JSON.parse(e.postData.contents);
    
    // 3. Validar campos obrigatórios
    const errors = validateForm(data);
    if (errors.length > 0) {
      return respondError(`Validação falhou: ${errors.join('; ')}`, 400);
    }

    // 4. Montar linha para spreadsheet
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    const row = [
      data.formType,
      data.name,
      data.email,
      data.phone || '',
      data.message || '',
      data.professional || '',
      new Date(),
      'novo',
      e.parameter.ip || 'unknown',
      e.parameter.ua || 'unknown',
      origin || ''
    ];

    // 5. Escrever na próxima linha vazia
    const lastRow = sheet.getLastRow();
    sheet.getRange(lastRow + 1, 1, 1, row.length).setValues([row]);

    // 6. Log (aparece em Execution log do GAS)
    Logger.log(`Form ${data.formType} recebido: ${data.name} (${data.email})`);

    // 7. Responder sucesso
    return respondSuccess('Formulário recebido com sucesso', {
      timestamp: new Date().toISOString(),
      leadId: `${lastRow + 1}`
    });

  } catch (err) {
    Logger.log(`ERRO: ${err.toString()}`);
    return respondError(`Erro no servidor: ${err.toString()}`, 500);
  }
}

// ============================================================================
// VALIDAÇÃO
// ============================================================================

function validateForm(data) {
  const errors = [];

  if (!data.formType) errors.push('formType obrigatório');
  if (!data.name || data.name.trim().length < 3) errors.push('name deve ter ≥3 caracteres');
  if (!data.email || !isValidEmail(data.email)) errors.push('email inválido');
  if (data.formType === 'agendamento' && !data.phone) errors.push('phone obrigatório para agendamento');

  return errors;
}

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// ============================================================================
// RESPOSTAS
// ============================================================================

function respondSuccess(message, data = {}) {
  const response = {
    success: true,
    message,
    data
  };
  return ContentService.createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
}

function respondError(message, httpCode = 400) {
  const response = {
    success: false,
    message,
    code: httpCode
  };
  return ContentService.createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON)
    .setHttpResponseCode(httpCode);
}

// ============================================================================
// HELPERS (testes)
// ============================================================================

function testFormSubmission() {
  const testData = {
    formType: 'agendamento',
    name: 'Maria Silva',
    email: 'maria@example.com',
    phone: '5551991234567',
    message: 'Tenho queda de cabelo há 6 meses',
    professional: ''
  };

  // Simular POST
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData),
      headers: { Referer: 'https://danusapires.com.br' }
    }
  };

  const result = doPost(mockEvent);
  Logger.log('Test result:', result.getContent());
}
```

### Passo 3: Editar `SHEET_ID`

- Abrir o script em `Code.gs`
- Linha 8: `const SHEET_ID = 'SEU_SHEET_ID_AQUI';`
- Colar o ID da planilha (obtido na Fase 1, Passo 2)

### Passo 4: Testar localmente

1. Clicar em "Run" (▶) → função `testFormSubmission`
2. Autorizar acesso (Google vai pedir permissão para ler/escrever Sheets)
3. Abrir "Execution log" (View → Execution log)
4. Verificar se houve erro ou sucesso
5. Ir à planilha e confirmar se uma linha foi adicionada

Se tudo OK, passar para Fase 3.

---

## Fase 3: Publicar como Web App

### Passo 1: Deploy

1. No editor GAS, clicar em **"Deploy"** (botão azul no topo)
2. Selecionar tipo: **"New deployment"**
3. Tipo: **"Web app"**
4. Executar como: sua conta Google (ex: danusa@example.com)
5. Quem tem acesso: **"Anyone"** (importante para forms públicos)
6. Clicar "Deploy"
7. Copiar URL da forma: `https://script.google.com/macros/d/{DEPLOYMENT_ID}/usercontent`

### Passo 2: Confirmar no browser

Acessar a URL do Web App diretamente:
- Deve retornar erro 405 (método GET não permitido) — esperado
- Confirma que está publicado

### Passo 3: Adicionar à config do site

1. Abrir `src/data/site.ts`
2. Linha ~107:
   ```typescript
   gasUrl: 'https://script.google.com/macros/d/{DEPLOYMENT_ID}/usercontent',
   ```
3. Substituir `{DEPLOYMENT_ID}` pela URL copiada
4. Fazer commit: `git add -A && git commit -m "chore: set Google Apps Script URL"`

---

## Fase 4: Testar formulário no site

### Teste 1: Formulário de agendamento

1. Abrir site em preview: `npm run dev` → http://localhost:3000
2. Ir a `/agendamento`
3. Preencher form:
   - Nome: "Test User"
   - Email: seu@email.com
   - Telefone: 5551988888888
   - Descrição: "teste"
4. Enviar
5. Verificar:
   - [ ] Página redireciona para `/obrigado?type=agendamento`
   - [ ] Aparece mensagem de sucesso
   - [ ] Na planilha, nova linha com os dados foi criada
   - [ ] No console do browser (F12), verificar se `fbq('Lead')` foi acionado

### Teste 2: Verificar erros

1. Tentar enviar form incompleto
2. Verificar se aparece mensagem de erro no site
3. Verificar console (F12 → Network) se a request retornou erro HTTP

---

## Troubleshooting

### "Error: Malformed JSON string"

**Causa:** `form-submit.ts` está enviando format incorreto

**Solução:** Verificar em `src/scripts/form-submit.ts` se está enviando `JSON.stringify()` correto

### "Origem não autorizada"

**Causa:** Site está rodando em origin diferente de `ACCEPTED_ORIGINS`

**Solução:** Adicionar origin à lista em `Code.gs` linha 8

### Sheet não está sendo atualizado

**Causa:** `SHEET_ID` errado ou GAS não tem permissão

**Solução:**
1. Verificar `SHEET_ID` em `Code.gs`
2. No GAS, clicar "Run" e autorizar novamente
3. Verificar Execution log (View → Execution log) para erros

---

## Próximas melhorias

- [ ] Enviar email de confirmação (via Mailgun, não GAS)
- [ ] Webhook para Supabase (backup dos leads)
- [ ] Sanitização mais robusta (XSS)
- [ ] Rate limiting (impedir spam)
- [ ] Notificação Slack da clínica quando lead chegar

---

**Documentação criada:** 2026-05-15  
**Responsável:** Claude Code
