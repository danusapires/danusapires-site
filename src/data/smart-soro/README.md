# smart.soro · base de conhecimento

Sistema de orientação de soroterapia individualizada. O paciente digita uma queixa em linguagem natural (capilar, fadiga, ansiedade, dor de cabeça, sono, performance, hormonal, etc.) e recebe a lista de ativos que **podem** entrar em uma composição de soro para aquele quadro.

**Não é prescrição. Não é diagnóstico. A composição final, dose e via só são definidas em avaliação clínica presencial.**

---

## Arquitetura

```
src/data/smart-soro/
├── ativos.ts        ← catálogo de ativos disponíveis (fonte única)
├── queixas.ts       ← mapeamento queixa → ativos (referencia ativos por nome)
├── index.ts         ← exports
└── README.md        ← este documento
```

A página que consome esta base de dados é `src/pages/soroterapia.astro` — mas você nunca deve editar a lista de queixas/ativos lá. Sempre aqui.

### Por que separar `ativos` de `queixas`?

- **Ativos** = catálogo da clínica. O que a Danusa Pires **dispõe** (ou está disposta a prescrever em soro). Cada ativo cadastrado uma única vez, com `nome`, `mecanismo`, `categoria` e `indicacaoUso`.
- **Queixas** = mapeamento clínico. Para cada quadro do paciente, qual subconjunto de ativos é pertinente. Cada queixa referencia ativos por `nome` (string exata).

Vantagens:
1. Atualizar mecanismo/categoria de um ativo → muda em **todas** as queixas que o usam.
2. Adicionar/remover ativo do catálogo → impacto rastreável (build falha se um nome não existir).
3. Auditoria clínica fica em um lugar só (revisão dos ativos).
4. Pode-se gerar relatórios automáticos: "todas as queixas que usam Vitamina C", "ativos da categoria mitocondrial", etc.

---

## Modelo de dados

### `Ativo`

```ts
export type Ativo = {
  nome: string          // identificador único + exibição
  mecanismo: string     // 1 frase técnica curta
  categoria: string     // agrupamento clínico-funcional
  indicacaoUso: string  // "Pode ajudar em..." (texto orientativo)
}
```

### `Queixa`

```ts
export interface Queixa {
  slug: string                // kebab-case, estável
  label: string               // como aparece para o paciente
  dominio: Dominio            // categoria larga (ver lista abaixo)
  tags: string[]              // sinônimos para busca
  ativos: AtivoEmQueixa[]     // referências por nome
}

export interface AtivoEmQueixa {
  nome: string         // tem que existir em ativos.ts
  observacao?: string  // sobrescreve mecanismo no contexto desta queixa
}
```

---

## Como adicionar **um ativo novo** (catálogo)

Edite `ativos.ts`. Adicione um item ao array `ativos`:

```ts
{
  nome: "Nome do Ativo",
  mecanismo: "1 frase técnica curta. Sem marketing.",
  categoria: "Categoria1 / categoria2 / categoria3",
  indicacaoUso: "Pode ajudar em [cenários clínicos], [outro cenário], [...]."
}
```

Depois rode `npm run build` — se houver erro de tipo, corrija antes de commitar.

## Como adicionar **uma queixa nova** (mapeamento)

Edite `queixas.ts`. Adicione um item ao array `QUEIXAS`:

```ts
{
  slug: 'minha-queixa',
  label: 'Como aparece para o paciente (com acento, formal)',
  dominio: 'energia-sns',                  // ver lista de domínios abaixo
  tags: [                                  // SINÔNIMOS para a busca casar
    'palavra natural',
    'palavra sem acento',
    'sinônimo médico',
    'gíria popular',
    'sigla',
  ],
  ativos: [
    { nome: 'Coenzima Q10' },                                    // usa mecanismo padrão
    { nome: 'Vitamina C', observacao: 'Contexto local' },        // sobrescreve no contexto
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
- `longevidade`
- `digestivo`
- `emagrecimento`
- `pos-bariatrico`

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
| **Trimestral** | `indicacaoUso` atualizada conforme prática clínica |
| **Semestral** | Tags de cada queixa (alguém digitou algo que não casou? adicionar) |
| **Anual** | Lista completa de queixas — alguma deve ser removida? alguma falta? |
| **Anual** | Lista completa de ativos — clínica deixou de oferecer algum? |

Toda revisão deve ser commitada com mensagem clara:
```
data(smart-soro): adicionar [ativo|queixa|tag] X em Y
data(smart-soro): atualizar mecanismo de [nome] conforme evidência [referência]
data(smart-soro): remover [nome] por descontinuação na clínica
```

---

## Helpers disponíveis

```ts
import {
  ativos,            // array completo do catálogo
  getAtivo,          // (nome) → Ativo  (throw se não existir)
  QUEIXAS,           // array raw com ativos por nome
  resolveQueixas,    // QueixaResolvida[] — ativos já resolvidos para a UI
  getDominiosCount,  // número de domínios distintos cobertos
} from '../data/smart-soro';
```

---

## Roadmap (sugestões futuras)

- [ ] Filtro por **domínio** na UI (chips no topo: "capilar", "hormonal", etc.)
- [ ] Filtro por **categoria** de ativo
- [ ] Página interna `/smart-soro/ativos` com catálogo público (educacional)
- [ ] Mostrar `indicacaoUso` em modo expandido
- [ ] Tag de **evidência** por ativo (`['RCT', 'consenso', 'mecanístico']`) com filtro
- [ ] Integração com prontuário (quando houver) para puxar ativos prescritos com mais frequência
- [ ] Export estruturado (JSON) do catálogo para uso em outros canais (Instagram, e-mail)
- [ ] Internacionalização (en/es) se for atender pacientes internacionais

---

Última atualização do documento: 2026-05-18
Mantenedor: equipe clínica Danusa Pires
