# BRAND.md — Sistema de Marca Danusa Pires

Versão consumível por LLM do brandbook v4. Referência visual canônica: `brandbook-danusa-pires-v4-obsidian-clinical.html` (abrir no navegador para ver layout, paleta aplicada e tipografia em uso).

Sistema: Obsidian Clinical · Versão: 4.0 · Atualização: Maio 2026 · Direção: GJORA Intelligence

---

## 1. Marca

- Nome: **Danusa Pires** (sem prefixo "Dra." na marca principal)
- Descritor: **Tricologia & Saúde Integrativa**
- Razão social: Mincorp Saúde e Estética Ltda.
- Nome fantasia jurídico (registrado em cartório): Danusa Pires Saúde e Estética
- CNPJ: 47.698.087/0001-86
- Site: www.danusapires.com.br
- Meta Pixel ID: 1326953349366151

**Regra de nomenclatura:** sempre "Danusa Pires". Nunca apenas "Danusa". O título "Dra." pode aparecer em contextos pontuais de credibilidade externa (reportagens, palestras, depoimentos de terceiros), mas **não** na marca principal do site, header, CTAs, impressos ou material institucional.

---

## 2. Manifesto

Frase oficial:

> "O cabelo é reflexo do nosso organismo."

Premissa fundadora: a tricologia praticada aqui não isola o fio do sistema. Investiga hormônios, ferritina, vitamina D, microbioma intestinal, sono, estresse, deficiências nutricionais e história clínica antes de propor qualquer protocolo.

---

## 3. Três pilares

1. **Olhar sistêmico** — nunca tratamos só o fio
2. **Rigor técnico** — diagnóstico instrumentado, protocolo por evidência
3. **Tempo humano** — consulta de 60 minutos, escuta antes da intervenção

---

## 4. Paleta cromática (Obsidian Clinical + Sálvia)

| Cor | Hex | Função | Proporção |
|-----|-----|--------|-----------|
| Preto Obsidiana | `#0B0B0B` | Primária, fundo | 60-70% |
| Bege Cardume | `#E8E3DC` | Tipografia, respiro | 20-30% |
| Grafite | `#2A2A2A` | Apoio, blocos | 5-10% |
| Dourado Fosco | `#C6A85A` | Acento, autoridade | máx 5% |
| Sálvia | `#8A9B8E*` | Continuidade, contexto | 3-5% |
| Branco | `#FFFFFF` | Documentos técnicos | conforme uso |

Tokens auxiliares:
- Grafite soft: `#1A1A1A`
- Dourado soft: `#D4BB7A`
- Dourado deep: `#A88B45` (para fundos claros)
- Sálvia soft: `#A8B5A8`

\* Hex da Sálvia é provisório. Hex oficial pendente de envio pela cliente.

**Regras:**
- Não usar dourado como fundo de blocos grandes
- Não combinar dourado com Sálvia no mesmo elemento
- Dourado nunca como corpo de texto longo
- Sálvia jamais como cor de informação crítica
- Contraste mínimo 14:1 para texto bege sobre preto · WCAG AA em todas combinações

---

## 5. Tipografia

| Função | Fonte | Pesos | Uso |
|--------|-------|-------|-----|
| Primária | DM Sans | 300, 400, 500, 600 | Corpo, navegação, formulários, dados |
| Secundária | Playfair Display | 400, 500, 400 italic | Títulos, manchetes, citações, wordmark |

- Self-hosted em `site/public/fonts/`
- DM Sans nunca em itálico para corpo longo
- Playfair italic usado seletivamente para enfatizar termos-chave em títulos
- Sem fontes secundárias adicionais

---

## 6. Wordmark

Construção:
- "Danusa" em Playfair Display Regular, cor bege
- "Pires" em Playfair Display Italic, cor dourado fosco (em fundo preto/grafite)
- Descritor abaixo: "Tricologia & Saúde Integrativa" em DM Sans 11px letter-spacing 0.42em uppercase, cor bege 55%

Regras:
- Área de segurança mínima: 1× altura da letra "D"
- Tamanho mínimo digital: 18px
- Tamanho mínimo impresso: 14mm de altura
- Aplicações: bege sobre preto · preto sobre bege · branco sobre preto

---

## 7. Método ESPELHO

Assinatura clínica proprietária. Substitui referências ao antigo "Método DPC" (descontinuado).

**Tagline:** "O cabelo reflete o organismo. Lemos o reflexo antes de tratar."

**Premissa:** o cabelo não é o problema, é o sintoma mais visível de um quadro sistêmico. Antes de qualquer ativo tópico, qualquer intradermo, qualquer MMP, lemos o que o cabelo está dizendo sobre hormônios, ferritina, sono, nutrição, intestino e estresse.

**Quatro fases:**

1. **Leitura** — anamnese 60min, tricoscópio digital, exames de tração, dermatoscópio óptico, fototricograma, foto macro padronizada, solicitação de exames laboratoriais
2. **Reflexo** — devolutiva clínica, mostramos o que o cabelo está refletindo (qual deficiência, qual eixo hormonal, qual carência), avaliamos TrichoTest quando justificado
3. **Protocolo** — plano individualizado por mecanismo (ativos tópicos, fototerapia, intradermo, exossomas, peptídeos, MMP quando indicado, smart.soro sistêmica)
4. **Refração** — reavaliação 3º mês com nova fototricografia e comparação fotográfica, ajuste de protocolo, plano de manutenção

---

## 8. Serviços (7 linhas + 1 complementar)

| # | Serviço | Slug | Alvo |
|---|---------|------|------|
| 01 | Queda capilar feminina | `queda-feminina` | Mulheres pós-parto, menopausa, deficiências |
| 02 | Alopecia androgenética | `alopecia-androgenetica` | Homens e mulheres, clínico + pré/pós cirurgia |
| 03 | Pós-transplante | `pos-transplante` | 60-90 dias pós cirúrgico |
| 04 | Fortalecimento e densidade | `fortalecimento` | Sem queda ativa, busca densidade |
| 05 | TrichoTest (genética capilar) | `trichotest` | Casos avançados, protocolo premium |
| 06 | Soroterapia (smart.soro) | `soroterapia` | Suporte sistêmico, saúde integrativa |
| 07 | Diagnóstico capilar avançado | `diagnostico` | Segunda opinião, outros profissionais |
| +  | Inflamações leves | (dentro de outros) | Apenas casos leves · graves → encaminhar |

**Valores referência:**
- Consulta inicial: R$ 380 (60 min)
- Sessão de soroterapia: R$ 450-750
- Protocolo médio queda capilar: R$ 4.000-5.000
- Pacotes de soroterapia: 20% desconto

**Duração de protocolos:**
- Queda feminina: estabilização em 3-6 meses
- AAG: estabilização em 6-9 meses
- Sessões: a cada 15 dias ou mensais
- Procedimentos: 30 min · pontualidade rigorosa

---

## 9. smart.soro (Soroterapia)

**Regra de uso:**
- Nome institucional/página/agenda/receituário: **Soroterapia**
- Gancho de identidade/sistema interativo/marketing: **smart.soro**

**Base fixa de toda sessão:** Vitamina C + Trio Metilador (B6, B9, B12 metiladas) + Coenzima Q10.

**Prescrição:** exclusiva pela Danusa Pires (Adriana Melo após habilitação no conselho).

### Ativos catalogados por categoria

**Mitocondrial · Energia**
- Coenzima Q10 (IM)
- PQQ (IM)
- D-Ribose (EV/IM)
- L-Carnitina (IM/EV)
- HMB (IM)
- NADH (IM/EV)

**Metilação · Vitaminas**
- Trio Metilador (IM)
- Metilcobalamina (IM)
- Complexo B (IM)
- Vitamina B1 (IM)
- Vitamina C (EV/IM)
- Vitamina D (IM)
- ADEK (IM)

**Antioxidante · Detox**
- Glutationa (EV/IM)
- Ácido Alfa-Lipóico (EV)
- N-Acetilcisteína (EV/IM)
- Resveratrol (IM/EV)
- Curcumina (IM)

**Capilar · Pele**
- Silício Orgânico (IM)
- Biotina (IM)
- D-Pantenol (IM)
- Pill Food (IM)
- DMAE (IM)

**Cognitivo · Foco**
- Alpha GPC (IM)
- Piracetam (IM/EV)
- GABA (IM)

**Metabolismo · Composição**
- Cromo Picolinato (IM)
- Vanádio (IM)
- Morusil (IM)
- Tripeptídeo-41 (IM)
- Cafeína (IM)
- Pool de Aminoácidos (IM/EV)
- Pool de Minerais (IM/EV)

### Vias de administração

- EV (Endovenosa)
- IM (Intramuscular)
- SC (Subcutânea)
- ID (Intradermo)
- MMP (microagulhamento associado a ativos)

### Ativo proibido

**Azul de metileno** — não utilizado na clínica. Risco de interação medicamentosa (inibidor MAO) com antidepressivos, alimentos ricos em tiramina e fármacos comuns na faixa etária da paciente alvo.

---

## 10. Persona alvo

**Mulher · 48 anos · menopausa · profissional liberal**

- Renda: acima de R$ 8.000/mês
- Comportamento: viaja, investe em qualidade, é exigente
- Tentativas prévias: xampus, dermatologista, esteticista (sem sucesso)
- Estágio do quadro: queda estabelecida, costuma chegar tarde
- Decisão: pesquisa, lê, compara, não é impulsiva
- Ticket esperado: R$ 4.000 médio (protocolos R$ 5.000+)
- Frequência: sessões 15/15 dias ou mensais por 3-9 meses

**Quem não atendemos:**
- Menores de 18 anos (encaminhar para dermatologistas pediátricos)
- Quadros inflamatórios graves do couro cabeludo (encaminhar para avaliação médica)
- Casos que exigem prescrição médica de uso contínuo fora do escopo capilar (médico parceiro)

**Queixa verbal típica na primeira consulta:**

> "Vou ficar careca, meu cabelo está caindo muito. Não sei mais o que fazer."

---

## 11. Tom de voz

Densa sem ser intimidante. Técnica sem ser fria. Acolhedora sem ser doce.

| Evitar | Usar |
|--------|------|
| "Resultado milagroso e definitivo!" | "Investigamos a causa antes do protocolo. Resultados em 3 a 6 meses." |
| "Cabelos lindos e sedosos!" | "O cabelo é reflexo do organismo. Tratamos o sistema, não só o fio." |
| "Promoção: 50% off!" | "Avaliação inicial: 60 min. R$ 380. Protocolos individualizados." |

---

## 12. Estrutura obrigatória de copy

Toda página de serviço, queixa ou intervenção segue:

1. **Problema** — nomear queixa com palavras do paciente
2. **Mecanismo** — explicar o que acontece no corpo (hormônio, deficiência, ciclo)
3. **Intervenção** — descrever exame/protocolo/ativos/frequência/duração
4. **Resultado possível** — expectativa realista com janela temporal

---

## 13. Linhas vermelhas (absolutas, sem exceção)

- Não prometer cura, "100% de garantia", resultado definitivo
- Não usar "milagre", "revolucionário", "resultados imediatos"
- Não fazer antes-e-depois sem autorização escrita + parametrização fotográfica equivalente
- Não atender menores de 18 anos
- Não prescrever azul de metileno em soroterapia
- Não usar linguagem de cosmética popular ("cabelão", "fios sedosos", "brilho")
- Não competir por preço
- Não mostrar logos de cosméticos comerciais sem propósito clínico
- Não publicar conteúdo sem revisão da Danusa
- Não usar fotos de banco de imagens onde houver indicação de procedimento real

---

## 14. Equipe técnica

| Profissional | Registro | Função |
|--------------|----------|--------|
| Danusa Pires | COREN-RS | Tricologia avançada, prescrição, direção clínica |
| Adriana Melo dos Santos Pinto | COREN-RS 1.255.019 | Soroterapia (após habilitação), biorressonância |
| Amanda Paz da Silva Martins | COREN-RS 127.286 | Técnica auxiliar |

**Formação Danusa Pires:**
- Bacharelado em Enfermagem · PUCRS · 2012
- Pós em Enfermagem Estética · Instituto Nepuga · 2022
- Pós em Tricologia Avançada · Instituto Lívia Vacari · 2024
- Especialização em Nutracêuticos · Instituto Thereza Moraes · 2025

**Formação Adriana Melo:**
- Técnica em Enfermagem · 2008
- Graduanda em Enfermagem
- Pós em Suplementação Injetável Estética Avançada
- Especialização em Análise por Biorressonância
- Especialização em Saúde do Intestino
- Terapeuta Ortomolecular

---

## 15. Operação

**Horários:**
- Segunda, Terça, Quinta: 9h-20h
- Quarta: 9h-19h (online apenas)
- Sexta: 9h-18h
- Sábado: 1×/mês 9h-16h

**Endereço:** Edifício Moinhos 180 · Porto Alegre/RS (sem unidade Três de Maio)

**Triagem:** WhatsApp via equipe terceirizada · meta 5min de resposta

**Pré-avaliação online:** 15-30 min disponível

**Pagamento:** Pix, cartão crédito/débito, dinheiro. Não aceita convênio (oferece NF + relatório para reembolso).

**Google Meu Negócio:** https://share.google/FVoz7OZsHOhYbMvMr

---

## 16. Concorrentes mapeados (para diferenciação, não ataque)

- Clínica Bergmann
- Isabele Lucchese
- Gisele Martins

---

## 17. Diferencial competitivo

Tratamento sistêmico nunca olha só o fio. Combinamos tricologia técnica + saúde integrativa + soroterapia sob prescrição clínica + protocolo personalizado por DNA (TrichoTest) quando justificado. O outro lado do mercado faz estética capilar. Aqui faz medicina do cabelo via enfermagem especializada.
