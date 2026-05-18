# PENDENCIAS.md — Itens não respondidos pela cliente

Status em Maio/2026. Tudo aqui bloqueia ou condiciona partes específicas do site. Sempre conferir antes de executar páginas que dependam destes inputs.

---

## Bloqueadores reais de go-live

### 1. Email comercial oficial
- **Bloqueia:** política de privacidade, termos de uso, schema MedicalBusiness, footer, contato form, assinatura de email
- **Status:** não respondido (pergunta 69 do briefing veio apenas com a palavra "email" sem domínio)
- **Provisório aceitável:** `contato@danusapires.com.br` (não usar sem confirmação)

### 2. Google Tag Manager ID
- **Bloqueia:** rastreamento de eventos, conversões via WhatsApp, integração com Meta Pixel
- **Status:** não respondido
- **Ação se ela não tem conta:** criar via danusa.gic@gmail.com

### 3. Google Analytics 4 ID
- **Bloqueia:** métricas de tráfego, funil, atribuição
- **Status:** não respondido
- **Ação se ela não tem conta:** criar via danusa.gic@gmail.com

### 4. Frase manifesto pessoal
- **Bloqueia:** bloco "manifesto pessoal" da home (separado da frase de marca oficial)
- **Status:** pergunta 14 não respondida
- **Pedido específico:** três frases sobre o que ela quer que a paciente sinta ao sair da consulta
- **Workaround temporário:** usar exclusivamente a frase manifesto institucional ("O cabelo é reflexo do nosso organismo")

### 5. Posts de blog adicionais
- **Bloqueia:** placeholder de blog editorial, schema BlogPosting
- **Status:** ela listou só 2 dos 5 pedidos
- **Confirmados:** Peptídeos capilares · Queda capilar no emagrecimento
- **Faltam:** 3 temas adicionais

### 6. Hex code exato da Sálvia
- **Bloqueia:** integração visual fiel com Instagram e papelaria existentes
- **Status:** cor aprovada para entrar na paleta, hex oficial não enviado
- **Provisório aplicado:** `#8A9B8E` já está vivo em `src/styles/tokens.css` como `--c-salvia` (referência aproximada da GJORA, será trocada quando a cliente enviar o hex exato)

---

## Arquivos que a cliente tem mas não enviou

| Item | Pergunta | Resposta |
|------|----------|----------|
| Logo oficial em SVG | 76 | "Temos." (não anexou) |
| Fotos da clínica em alta qualidade | 75 | "Temos. Sala de soroterapia não." |
| Vídeos curtos | 78 | "Temos." |
| Termo de consentimento de imagem assinado (paciente Roseli) | 50 | Caso real estruturado, falta autorização escrita |
| 2-4 outras pacientes para abordar para depoimento | 49 | Tem candidatas, falta nome |

---

## Decisões estratégicas tratadas e travadas

Estes itens foram resolvidos diretamente com o operador (Gustavo), não dependem mais de resposta da cliente:

- Marca = **Danusa Pires** (sem "Dra.")
- Descritor = **Tricologia & Saúde Integrativa**
- Nome fantasia jurídico mantido = **Danusa Pires Saúde e Estética** (registrado em cartório)
- Metodologia = **Método ESPELHO** (não DPC)
- Soroterapia = nome próprio **smart.soro** como gancho, "Soroterapia" no institucional
- TrichoTest adicionado como 7º serviço com flag "novo · maio 2026"
- Inflamações graves = encaminhar para avaliação médica especializada
- Direção criativa = **GJORA Intelligence** (não mais Gehrke)

---

## Próxima rodada de perguntas para a cliente

Quando for enviar nova rodada, manter formato curto e direto:

1. Confirme o email comercial que vai no site
2. Tem conta Google ativa para o site (GTM/GA4)? Se não, autoriza criarmos com danusa.gic@gmail.com?
3. Envie 3 frases curtas sobre o que quer que a paciente sinta saindo da consulta
4. Confirme 3 temas adicionais para o blog (sugestões prontas se quiser)
5. Hex exato da Sálvia usada hoje
6. Anexe logo SVG, fotos da clínica em alta resolução e vídeos curtos
7. Autorização escrita para o depoimento da paciente Roseli (modelo de termo pronto se precisar)
8. 2 a 4 nomes adicionais de pacientes para abordar para depoimento

---

## Ações que podem ser executadas sem mais resposta dela

Tudo que já foi confirmado no brandbook v4 está implementável imediatamente. Ver BRAND.md para a fonte de verdade.

Lista resumida do que destrava sem ela:

### Já feito (v1.0 → v1.1)
- [x] Marca v4 aplicada em `src/data/site.ts`, `Footer`, `Nav`, `BaseLayout`
- [x] Método ESPELHO substituiu DPC em toda a copy
- [x] smart.soro como gancho de identidade na soroterapia
- [x] `/sobre` reescrito com história real (emergências → tricologia)
- [x] Página `/profissionais` removida (site é marca pessoal da Danusa)
- [x] Terapias holísticas → terapias integrativas (página renomeada, Adriana abordada)
- [x] Cor Sálvia adicionada ao sistema de tokens em `tokens.css` (provisório `#8A9B8E`)
- [x] Em-dashes eliminados de todo o código (linguagem-IA)
- [x] COREN removido do footer (mantido em `/sobre` e jurídicas)

### Ainda destravável sem nova resposta da cliente
- Atualizar `site.ts` com CNPJ, razão social, Meta Pixel ID quando vier
- Atualizar formação na página da Danusa (datas e instituições reais do briefing)
- Atualizar `/contato` com horários reais por dia da semana
- Atualizar `/soroterapia` com 33 ativos reais por categoria
- Reformular conteúdo de inflamações com tom "leves + encaminhar"
- Adicionar página `/servicos/trichotest` como 7º serviço
- Implementar Meta Pixel 1326953349366151 (consent-gated)
- Adicionar Google Meu Negócio link no rodapé/contato
