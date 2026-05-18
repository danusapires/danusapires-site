# smart.soro · base de conhecimento

Sistema de orientação de soroterapia individualizada. O paciente digita uma queixa em linguagem natural (capilar, fadiga, ansiedade, dor de cabeça, sono, performance, hormonal, etc.) e recebe a lista de ativos que **podem** entrar em uma composição de soro para aquele quadro.

**Não é prescrição. Não é diagnóstico. A composição final, dose e via só são definidas em avaliação clínica presencial.**

---

## Arquitetura

```
src/data/smart-soro/
├── ativos.ts        ← catálogo de ativos disponíveis (fonte única)
├── queixas.ts       ← mapeamento queixa → ativos (referencia ativos por slug)
├── index.ts         ← exports
└── README.md        ← este documento
```

A página que consome esta base de dados é `src/pages/soroterapia.astro` — mas você nunca deve editar a lista de queixas/ativos lá. Sempre aqui.

### Por que separar `ativos` de `queixas`?

- **Ativos** = catálogo da clínica. O que a Danusa Pires **dispõe** (ou está disposta a prescrever em soro). Cada ativo cadastrado uma única vez, com mecanismo, vias possíveis, contraindicações, notas.
- **Queixas** = mapeamento clínico. Para cada quadro do paciente, qual subconjunto de ativos é pertinente. Cada queixa referencia ativos por `slug`.

Vantagens:
1. Atualizar mecanismo/contraindicação de um ativo → muda em **todas** as queixas que o usam.
2. Adicionar/remover ativo do catálogo → impacto rastreável (TypeScript falha o build se um slug não existir).
3. Auditoria clínica fica em um lugar só (revisão dos ativos).
4. Pode-se gerar relatórios automáticos: "todas as queixas que usam vitamina C", "ativos com contraindicação em gestantes", etc.

---

## Como adicionar **um ativo novo** (catálogo)

Edite `ativos.ts`. Adicione um item ao array `ATIVOS`:

```ts
{
  slug: 'meu-ativo',          // kebab-case, sem acento, ESTÁVEL — nunca renomeie depois.
  nome: 'Meu Ativo (forma X)', // como aparece para o paciente.
  mecanismo: '1 frase técnica curta. Sem marketing.',
  via: ['IV', 'oral'],         // opcional. Tipos: 'IV' | 'IM' | 'SC' | 'oral' | 'topica'.
  contraindicacoes: [          // opcional, mas NÃO omita quando aplicável.
    'Gestação',
    'Função renal grave',
  ],
  notas: 'Texto livre opcional para detalhe clínico relevante.',
},
```

Build (`npm run build`) — se houver erro de tipo, corrija antes de commitar.

## Como adicionar **uma queixa nova** (mapeamento)

Edite `queixas.ts`. Adicione um item ao array `QUEIXAS`:

```ts
{
  slug: 'minha-queixa',
  label: 'Como aparece para o paciente (com acento, formal)',
  dominio: 'energia-sns',          // ver lista de domínios abaixo
  tags: [                          // SINÔNIMOS para a busca casar
    'palavra natural',
    'palavra sem acento',
    'sinônimo médico',
    'gíria popular',
    'sigla',
  ],
  ativos: [
    { slug: 'magnesio' },                                    // mecanismo padrão do catálogo
    { slug: 'vitamina-b6', observacao: 'Contexto local' },   // sobrescreve mecanismo neste contexto
  ],
},
```

Domínios atuais (`type Dominio`):

- `capilar`
- `energia-sns` (energia e sistema nervoso)
- `pele`
- `imunidade`
- `hormonal`
- `nutricao`
- `performance`
- `perioperatorio`
- `viagem`
- `gestacao-puerperio`
- `longevidade`
- `digestivo`

Para adicionar um domínio novo, edite o tipo `Dominio` em `queixas.ts`.

---

## Técnica de busca (UI)

A página `/soroterapia` carrega todas as queixas resolvidas via `resolveQueixas()` e renderiza um card por queixa. O input de busca tem este comportamento:

1. **Normalização:** input convertido para minúsculas e despojado de acentos (NFD + regex `[̀-ͯ]`).
2. **Tokenização:** quebrado em palavras de ≥ 2 caracteres.
3. **Match:** o card de cada queixa é exibido se **todas** as palavras do input aparecem em `label + tags` (também normalizado).
   - Lógica AND, não OR. "dor cabeça" casa "dor de cabeça" mas não "dor lombar".
4. **Vazio:** se input vazio, mostra todas. Se input não vazio e zero matches, mostra mensagem com link para `/agendamento`.

O atributo `data-search` no DOM é gerado no build a partir de `label` + `tags`, concatenado com ` | `.

### Adicionar suporte a nova categoria de busca

Para que a busca case com um sinônimo novo, adicione a string no array `tags` da queixa apropriada em `queixas.ts`. **Não precisa mexer no JS.**

---

## Guardrails éticos (não negociáveis)

Toda página que consome esta base deve renderizar **em destaque, antes do input**:

1. **Não é diagnóstico.** Lista de plausibilidades técnicas, não recomendação clínica.
2. **Não inicie protocolo por conta própria.** Composição final, dose, via e frequência exigem avaliação presencial.
3. **Há contraindicações sérias.** Função renal/hepática, alergias, gestação, lactação e interações medicamentosas podem inviabilizar ativos listados.
4. **Casos urgentes** (dor intensa, febre persistente, sintomas neurológicos novos) → pronto-atendimento, não soroterapia.

Os textos exatos do disclaimer estão hardcoded em `src/pages/soroterapia.astro` na seção `sm-ethical-notice`. **Não remover sem aprovação clínica documentada.**

---

## Auditoria periódica

Sugestão de cadência:

| Cadência | O que revisar |
|---|---|
| **Trimestral** | Texto de cada `mecanismo` no catálogo (evidência atualizou?) |
| **Trimestral** | Contraindicações novas reportadas em literatura |
| **Semestral** | Tags de cada queixa (alguém digitou algo que não casou? adicionar) |
| **Anual** | Lista completa de queixas — alguma deve ser removida? alguma falta? |
| **Anual** | Lista completa de ativos — clínica deixou de oferecer algum? |

Toda revisão deve ser commitada com mensagem clara:
```
data(smart-soro): adicionar [ativo|queixa|tag] X em Y
data(smart-soro): atualizar mecanismo de [slug] conforme evidência [referência]
data(smart-soro): remover [slug] por descontinuação na clínica
```

---

## Helpers disponíveis

```ts
import {
  ATIVOS,            // array completo do catálogo
  getAtivo,          // (slug) → Ativo  (throw se não existir)
  QUEIXAS,           // array raw com ativos por slug
  resolveQueixas,    // QueixaResolvida[] — ativos já resolvidos para a UI
  getDominiosCount,  // número de domínios distintos cobertos
} from '../data/smart-soro';
```

---

## Roadmap (sugestões futuras)

- [ ] Filtro por **domínio** na UI (chips no topo: "capilar", "hormonal", etc.)
- [ ] Página interna `/smart-soro/ativos` com catálogo público (educacional, com cuidados éticos)
- [ ] Tag de **evidência** por ativo (`['RCT', 'consenso', 'mecanístico']`) com filtro
- [ ] Integração com prontuário (quando houver) para puxar ativos prescritos com mais frequência
- [ ] Export estruturado (JSON) do catálogo para uso em outros canais (Instagram, e-mail)
- [ ] Internacionalização (en/es) se for atender pacientes internacionais

---

Última atualização do documento: 2026-05-18
Mantenedor: equipe clínica Danusa Pires
