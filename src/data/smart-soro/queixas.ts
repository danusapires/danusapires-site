/**
 * smart.soro · mapeamento de QUEIXAS para ATIVOS
 *
 * Cada queixa aqui referencia ativos por `nome` (definidos em ativos.ts).
 * O catálogo de ativos é fonte única — esta tabela apenas mapeia.
 *
 * REGRAS DE CADASTRO:
 *  - slug: identificador único, kebab-case, sem acento, estável.
 *  - label: como aparece para o paciente (com acento, formal).
 *  - dominio: categoria larga para agrupamento.
 *  - tags: SINÔNIMOS para a busca casar. Inclua grafia sem acento, gírias,
 *    nomes médicos populares. Quanto mais tags, mais resiliente a busca.
 *  - ativos: array de { nome: <nome exato do ativo>, observacao?: string }.
 *    A observacao SOBRESCREVE o mecanismo padrão do ativo nesse contexto.
 *    Use observacao apenas para contextualizar o ativo dentro da queixa.
 */

import type { Ativo } from './ativos';
import { ativos as CATALOGO, getAtivo } from './ativos';

export type Dominio =
  | 'capilar'
  | 'energia-sns'
  | 'pele'
  | 'imunidade'
  | 'hormonal'
  | 'nutricao'
  | 'performance'
  | 'perioperatorio'
  | 'longevidade'
  | 'digestivo'
  | 'emagrecimento'
  | 'pos-bariatrico';

export interface AtivoEmQueixa {
  nome: string;          // referência ao nome exato em ativos.ts
  observacao?: string;   // sobrescreve mecanismo do ativo no contexto desta queixa
}

export interface Queixa {
  slug: string;
  label: string;
  dominio: Dominio;
  tags: string[];
  ativos: AtivoEmQueixa[];
}

export const QUEIXAS: Queixa[] = [
  // ============ CAPILAR ============
  {
    slug: 'queda-capilar',
    label: 'Queda capilar e fragilidade dos fios',
    dominio: 'capilar',
    tags: ['cabelo', 'queda', 'capilar', 'eflúvio', 'efluvio', 'caindo', 'careca', 'calvície', 'calvicie', 'alopecia', 'fio fino', 'cabelo fraco', 'cabelo ralo', 'aag'],
    ativos: [
      { nome: 'Biotina' },
      { nome: 'Pill Food', observacao: 'Suporte nutricional dedicado à matriz capilar' },
      { nome: 'Pool de minerais', observacao: 'Cofatores enzimáticos do folículo' },
      { nome: 'Vitamina D' },
      { nome: 'Pool de Aminoácidos', observacao: 'Substrato proteico para o fio' },
      { nome: 'Coenzima Q10', observacao: 'Suporte energético ao folículo' },
      { nome: 'Trio Metilador' },
      { nome: 'Silício orgânico' },
    ],
  },
  {
    slug: 'unhas-fracas',
    label: 'Unhas fracas, quebradiças, com estrias',
    dominio: 'capilar',
    tags: ['unha', 'unhas', 'quebradiça', 'quebradica', 'fina', 'descamando', 'cuticula', 'cutícula'],
    ativos: [
      { nome: 'Biotina' },
      { nome: 'Silício orgânico' },
      { nome: 'Pool de minerais' },
      { nome: 'Pool de Aminoácidos' },
    ],
  },

  // ============ ENERGIA E SISTEMA NERVOSO ============
  {
    slug: 'fadiga-disposicao',
    label: 'Fadiga, baixa disposição, cansaço crônico',
    dominio: 'energia-sns',
    tags: ['cansaço', 'cansaco', 'fadiga', 'esgotada', 'esgotado', 'esgotamento', 'sem energia', 'preguiça', 'preguica', 'moleza', 'apatia', 'burnout', 'exaustão', 'exaustao'],
    ativos: [
      { nome: 'Coenzima Q10' },
      { nome: 'NADH' },
      { nome: 'D-Ribose' },
      { nome: 'Complexo B' },
      { nome: 'Vitamina C', observacao: 'Suporte adrenal e antioxidante' },
      { nome: 'L-Carnitina' },
      { nome: 'Vitamina B1' },
    ],
  },
  {
    slug: 'fadiga-refrataria',
    label: 'Fadiga intensa, refratária e disfunção mitocondrial',
    dominio: 'energia-sns',
    tags: ['fadiga refratária', 'fadiga refrataria', 'fibromialgia', 'sfc', 'síndrome da fadiga', 'sindrome da fadiga', 'cansaço extremo', 'cansaco extremo', 'baixa resposta'],
    ativos: [
      { nome: 'NADH', observacao: 'Indicado em fadiga refratária a protocolos básicos' },
      { nome: 'PQQ' },
      { nome: 'D-Ribose' },
      { nome: 'Coenzima Q10' },
      { nome: 'Ácido alfa-lipóico' },
      { nome: 'Trio Metilador' },
    ],
  },
  {
    slug: 'ansiedade-estresse',
    label: 'Ansiedade, estresse crônico e irritabilidade',
    dominio: 'energia-sns',
    tags: ['ansiedade', 'ansiosa', 'ansioso', 'estresse', 'estressada', 'stress', 'nervosa', 'nervoso', 'irritação', 'irritacao', 'tensão', 'tensao', 'preocupação', 'preocupacao'],
    ativos: [
      { nome: 'GABA' },
      { nome: 'Complexo B' },
      { nome: 'Vitamina C', observacao: 'Suporte adrenal' },
    ],
  },
  {
    slug: 'sono-insonia',
    label: 'Insônia, sono fragmentado, dificuldade de dormir',
    dominio: 'energia-sns',
    tags: ['sono', 'insônia', 'insonia', 'não consigo dormir', 'nao consigo dormir', 'dormir mal', 'acorda', 'acordar', 'noite ruim', 'dormindo mal', 'pesadelo', 'sono leve'],
    ativos: [
      { nome: 'GABA', observacao: 'Modulação de excitabilidade neuronal noturna' },
      { nome: 'Complexo B' },
    ],
  },
  {
    slug: 'memoria-foco',
    label: 'Memória, foco, concentração e névoa mental',
    dominio: 'energia-sns',
    tags: ['memória', 'memoria', 'esquecida', 'esquecido', 'esquecimento', 'foco', 'concentração', 'concentracao', 'névoa mental', 'nevoa mental', 'brain fog', 'cognição', 'cognicao', 'raciocínio', 'raciocinio', 'desempenho cerebral'],
    ativos: [
      { nome: 'Alpha GPC' },
      { nome: 'Piracetam' },
      { nome: 'DMAE' },
      { nome: 'NADH' },
      { nome: 'PQQ' },
      { nome: 'Metilcobalamina' },
    ],
  },

  // ============ PELE E ESTÉTICA ============
  {
    slug: 'pele-envelhecimento',
    label: 'Pele, envelhecimento, oxidação e brilho',
    dominio: 'pele',
    tags: ['pele', 'rosto', 'envelhecimento', 'rugas', 'flacidez', 'oxidação', 'oxidacao', 'antioxidante', 'glow', 'brilho', 'idade', 'jovem'],
    ativos: [
      { nome: 'Glutationa' },
      { nome: 'Ácido alfa-lipóico' },
      { nome: 'Vitamina C', observacao: 'Cofator do colágeno' },
      { nome: 'Resveratrol' },
      { nome: 'Silício orgânico' },
      { nome: 'DMAE', observacao: 'Suporte indireto ao tônus tecidual' },
    ],
  },
  {
    slug: 'melasma-manchas',
    label: 'Melasma, manchas, hiperpigmentação',
    dominio: 'pele',
    tags: ['melasma', 'mancha', 'manchas', 'hiperpigmentação', 'hiperpigmentacao', 'pano', 'cloasma', 'escurecimento'],
    ativos: [
      { nome: 'Glutationa', observacao: 'Modulação indireta de melanogênese' },
      { nome: 'Vitamina C', observacao: 'Modulação de tirosinase' },
      { nome: 'Resveratrol' },
      { nome: 'Ácido alfa-lipóico' },
    ],
  },
  {
    slug: 'acne-pele-oleosa',
    label: 'Acne, pele oleosa, espinha persistente',
    dominio: 'pele',
    tags: ['acne', 'espinha', 'cravo', 'oleosa', 'pele oleosa', 'inflamação pele', 'inflamacao pele'],
    ativos: [
      { nome: 'N-Acetilcisteína', observacao: 'Modulação de PCOS-acne em mulheres' },
      { nome: 'Pool de minerais', observacao: 'Zinco e outros cofatores' },
      { nome: 'Curcumina' },
      { nome: 'ADEK', observacao: 'Vitamina A e D pertinentes ao quadro' },
    ],
  },

  // ============ IMUNIDADE ============
  {
    slug: 'imunidade-recorrencia',
    label: 'Imunidade baixa ou episódios virais recorrentes',
    dominio: 'imunidade',
    tags: ['imunidade', 'imune', 'gripe', 'resfriado', 'virose', 'vivo doente', 'sempre doente', 'baixa imunidade', 'defesa'],
    ativos: [
      { nome: 'Vitamina D' },
      { nome: 'Vitamina C' },
      { nome: 'N-Acetilcisteína' },
      { nome: 'Pool de minerais' },
      { nome: 'ADEK' },
    ],
  },
  {
    slug: 'covid-longa',
    label: 'COVID longa, pós-viral, fadiga pós-infecção',
    dominio: 'imunidade',
    tags: ['covid', 'long covid', 'covid longa', 'pós covid', 'pos covid', 'pós viral', 'pos viral', 'fadiga pós', 'fadiga pos'],
    ativos: [
      { nome: 'NADH' },
      { nome: 'Coenzima Q10' },
      { nome: 'Glutationa' },
      { nome: 'N-Acetilcisteína' },
      { nome: 'Vitamina C', observacao: 'Modulação inflamatória pós-viral' },
      { nome: 'Complexo B' },
      { nome: 'D-Ribose' },
      { nome: 'PQQ' },
    ],
  },
  {
    slug: 'ressaca',
    label: 'Ressaca, hangover e recuperação após consumo',
    dominio: 'imunidade',
    tags: ['ressaca', 'hangover', 'álcool', 'alcool', 'bebida', 'após beber', 'apos beber', 'recuperação alcool', 'recuperacao alcool'],
    ativos: [
      { nome: 'N-Acetilcisteína', observacao: 'Conjugação hepática do acetaldeído' },
      { nome: 'Glutationa' },
      { nome: 'Vitamina B1', observacao: 'Reposição depletada pelo álcool' },
      { nome: 'Complexo B' },
      { nome: 'Vitamina C' },
    ],
  },

  // ============ HORMONAL E METABOLISMO ============
  {
    slug: 'tpm-colica',
    label: 'TPM, cólica menstrual e dor pélvica cíclica',
    dominio: 'hormonal',
    tags: ['tpm', 'menstruação', 'menstruacao', 'cólica', 'colica', 'ciclo menstrual', 'sangramento', 'mestrual', 'menstrual'],
    ativos: [
      { nome: 'Complexo B', observacao: 'Inclui B6, modulação de prostaglandinas' },
      { nome: 'Curcumina', observacao: 'Modulação inflamatória' },
      { nome: 'Pool de minerais' },
    ],
  },
  {
    slug: 'climaterio-menopausa',
    label: 'Climatério, menopausa, fogachos e suor noturno',
    dominio: 'hormonal',
    tags: ['menopausa', 'climatério', 'climaterio', 'fogacho', 'fogachos', 'calorão', 'calorao', 'suor noturno', 'perimenopausa', '40+', '50+'],
    ativos: [
      { nome: 'ADEK', observacao: 'Vitamina E com evidência em fogachos' },
      { nome: 'Resveratrol' },
      { nome: 'Complexo B' },
      { nome: 'Vitamina D' },
      { nome: 'DMAE', observacao: 'Suporte cognitivo no climatério' },
    ],
  },
  {
    slug: 'libido-disposicao-sexual',
    label: 'Libido baixa, disposição sexual e energia íntima',
    dominio: 'hormonal',
    tags: ['libido', 'sexo', 'desejo', 'sexual', 'disfunção', 'disfuncao', 'íntima', 'intima'],
    ativos: [
      { nome: 'Vitamina D', observacao: 'Modulação hormonal' },
      { nome: 'Coenzima Q10', observacao: 'Energia celular sistêmica' },
      { nome: 'Pool de minerais', observacao: 'Zinco com suporte hormonal' },
      { nome: 'L-Carnitina' },
    ],
  },
  {
    slug: 'tireoide',
    label: 'Tireoide, hipo, fadiga tireoidiana',
    dominio: 'hormonal',
    tags: ['tireoide', 'tireóide', 'hipotireoidismo', 'hashimoto', 'tsh', 't4', 't3'],
    ativos: [
      { nome: 'Vitamina D', observacao: 'Modulação autoimune (Hashimoto)' },
      { nome: 'Pool de minerais', observacao: 'Selênio e zinco como cofatores' },
      { nome: 'Trio Metilador' },
    ],
  },
  {
    slug: 'resistencia-insulinica',
    label: 'Resistência insulínica, pré-diabetes, glicemia alterada',
    dominio: 'hormonal',
    tags: ['insulina', 'resistência insulínica', 'resistencia insulinica', 'diabetes', 'pré-diabetes', 'pre-diabetes', 'glicemia', 'glicose', 'açúcar', 'acucar', 'sop', 'pcos', 'síndrome metabólica', 'sindrome metabolica'],
    ativos: [
      { nome: 'Ácido alfa-lipóico' },
      { nome: 'Cromo picolinato' },
      { nome: 'Vanádio' },
      { nome: 'Morusil' },
      { nome: 'Resveratrol' },
      { nome: 'Curcumina' },
    ],
  },
  {
    slug: 'compulsao-acucar',
    label: 'Compulsão por açúcar, fissura por doce, ânsia alimentar',
    dominio: 'hormonal',
    tags: ['compulsão', 'compulsao', 'compulsão açúcar', 'compulsao acucar', 'doce', 'fissura', 'vontade de doce', 'comer demais', 'binge'],
    ativos: [
      { nome: 'Cromo picolinato', observacao: 'Modulação da fissura por açúcar' },
      { nome: 'Vanádio' },
      { nome: 'N-Acetilcisteína', observacao: 'Modulação de compulsão alimentar' },
      { nome: 'Ácido alfa-lipóico' },
      { nome: 'Morusil' },
    ],
  },

  // ============ NUTRIÇÃO ============
  {
    slug: 'anemia-ferro-b12',
    label: 'Anemia, deficiência de B12, baixa hemoglobina',
    dominio: 'nutricao',
    tags: ['anemia', 'b12', 'cobalamina', 'palidez', 'tontura', 'hemoglobina', 'deficiência b12', 'deficiencia b12'],
    ativos: [
      { nome: 'Metilcobalamina', observacao: 'Reposição direta de B12 ativa' },
      { nome: 'Trio Metilador' },
      { nome: 'Complexo B' },
      { nome: 'Vitamina C', observacao: 'Otimização da absorção de ferro' },
      { nome: 'Pool de minerais' },
    ],
  },
  {
    slug: 'vitamina-d-baixa',
    label: 'Vitamina D baixa, deficiência documentada',
    dominio: 'nutricao',
    tags: ['vitamina d', 'vitamina d3', 'd baixa', 'deficiência vitamina d', 'deficiencia vitamina d', '25-oh', 'sol pouco'],
    ativos: [
      { nome: 'Vitamina D' },
      { nome: 'ADEK' },
      { nome: 'Pool de minerais' },
    ],
  },
  {
    slug: 'detox-figado',
    label: 'Detox, sobrecarga hepática, esteatose',
    dominio: 'nutricao',
    tags: ['detox', 'desintoxicação', 'desintoxicacao', 'fígado', 'figado', 'esteatose', 'gordura no fígado', 'gordura no figado', 'limpeza'],
    ativos: [
      { nome: 'Glutationa', observacao: 'Conjugação hepática fase II' },
      { nome: 'N-Acetilcisteína' },
      { nome: 'Ácido alfa-lipóico' },
      { nome: 'Alpha GPC', observacao: 'Fonte de colina, metabolismo lipídico hepático' },
      { nome: 'Curcumina' },
    ],
  },

  // ============ PERFORMANCE E MASSA MUSCULAR ============
  {
    slug: 'performance-esportiva',
    label: 'Performance esportiva, treino intenso, recuperação',
    dominio: 'performance',
    tags: ['treino', 'esporte', 'atleta', 'performance', 'academia', 'crossfit', 'corrida', 'maratona', 'recuperação', 'recuperacao'],
    ativos: [
      { nome: 'L-Carnitina' },
      { nome: 'Coenzima Q10' },
      { nome: 'HMB' },
      { nome: 'Pool de Aminoácidos' },
      { nome: 'D-Ribose' },
      { nome: 'Cafeína' },
      { nome: 'Vitamina B1' },
    ],
  },
  {
    slug: 'sarcopenia-massa-muscular',
    label: 'Sarcopenia, perda de massa muscular, fragilidade',
    dominio: 'performance',
    tags: ['sarcopenia', 'massa muscular', 'perda muscular', 'magreza', 'fragilidade', 'idoso', 'sênior', 'senior', 'baixa massa magra'],
    ativos: [
      { nome: 'HMB', observacao: 'Preservação de massa muscular' },
      { nome: 'Pool de Aminoácidos' },
      { nome: 'L-Carnitina' },
      { nome: 'Vitamina D' },
      { nome: 'Silício orgânico' },
    ],
  },
  {
    slug: 'caibras-musculares',
    label: 'Cãibras, dor muscular, espasmos',
    dominio: 'performance',
    tags: ['cãibra', 'cabra', 'caimbra', 'caibra', 'dor muscular', 'espasmo', 'músculo', 'musculo', 'tensão muscular', 'tensao muscular'],
    ativos: [
      { nome: 'Pool de minerais', observacao: 'Cálcio, potássio e cofatores neuromusculares' },
      { nome: 'Vitamina B1' },
      { nome: 'Pool de Aminoácidos' },
    ],
  },
  {
    slug: 'articulacao-dor',
    label: 'Dor articular, artrose, articulações, dor crônica',
    dominio: 'performance',
    tags: ['articulação', 'articulacao', 'joelho', 'ombro', 'artrose', 'artrite', 'dor articular', 'rigidez', 'dor crônica', 'dor cronica'],
    ativos: [
      { nome: 'Curcumina', observacao: 'Modulação inflamatória articular' },
      { nome: 'Vitamina D' },
      { nome: 'Silício orgânico', observacao: 'Suporte à matriz extracelular' },
      { nome: 'Resveratrol' },
    ],
  },

  // ============ EMAGRECIMENTO ============
  {
    slug: 'emagrecimento-gordura-localizada',
    label: 'Emagrecimento, gordura localizada, lipólise',
    dominio: 'emagrecimento',
    tags: ['emagrecer', 'emagrecimento', 'gordura', 'gordura localizada', 'lipólise', 'lipolise', 'perder peso', 'magreza', 'celulite', 'glp-1', 'glp1', 'ozempic', 'mounjaro'],
    ativos: [
      { nome: 'Tripeptídeo-41', observacao: 'Lipólise e potencialização em pacientes com análogos de GLP-1' },
      { nome: 'L-Carnitina', observacao: 'Oxidação de gordura' },
      { nome: 'Morusil', observacao: 'Redução de gordura visceral' },
      { nome: 'Cafeína', observacao: 'Termogênese' },
      { nome: 'Cromo picolinato' },
    ],
  },

  // ============ PERIOPERATÓRIO ============
  {
    slug: 'pre-pos-procedimento',
    label: 'Pré e pós-procedimento (estético, cirúrgico ou capilar)',
    dominio: 'perioperatorio',
    tags: ['cirurgia', 'pré cirurgia', 'pre cirurgia', 'pós cirurgia', 'pos cirurgia', 'procedimento', 'recuperação cirurgia', 'recuperacao cirurgia', 'cicatrização', 'cicatrizacao', 'transplante'],
    ativos: [
      { nome: 'Vitamina C', observacao: 'Síntese de colágeno na cicatrização' },
      { nome: 'Pool de Aminoácidos', observacao: 'Substrato para reparo tecidual' },
      { nome: 'Glutationa', observacao: 'Modulação inflamatória pós-procedimento' },
      { nome: 'Pool de minerais', observacao: 'Zinco com papel em cicatrização' },
      { nome: 'Silício orgânico' },
      { nome: 'HMB', observacao: 'Preservação muscular em recuperação prolongada' },
    ],
  },

  // ============ PÓS-BARIÁTRICO ============
  {
    slug: 'pos-bariatrico',
    label: 'Pós-bariátrico, deficiências e queda capilar pós-cirurgia',
    dominio: 'pos-bariatrico',
    tags: ['bariátrica', 'bariatrica', 'bariátrico', 'bariatrico', 'pós bariátrica', 'pos bariatrica', 'gastroplastia', 'sleeve', 'bypass', 'queda pós bariátrica', 'queda pos bariatrica'],
    ativos: [
      { nome: 'Trio Metilador', observacao: 'Suporte de metilação frequentemente comprometido' },
      { nome: 'Metilcobalamina', observacao: 'Reposição de B12 quase sempre necessária' },
      { nome: 'Pool de Aminoácidos', observacao: 'Substrato proteico em absorção reduzida' },
      { nome: 'Vitamina B1' },
      { nome: 'Complexo B' },
      { nome: 'HMB', observacao: 'Preservação de massa muscular durante perda de peso' },
      { nome: 'Pill Food', observacao: 'Suporte capilar específico pós-perda rápida' },
      { nome: 'ADEK', observacao: 'Lipossolúveis com absorção comprometida' },
    ],
  },

  // ============ LONGEVIDADE ============
  {
    slug: 'longevidade',
    label: 'Longevidade, manutenção preventiva, antiaging',
    dominio: 'longevidade',
    tags: ['longevidade', 'antiaging', 'anti-aging', 'envelhecimento saudável', 'prevenção', 'prevencao', 'manutenção', 'manutencao', 'wellness'],
    ativos: [
      { nome: 'NADH' },
      { nome: 'Resveratrol' },
      { nome: 'Glutationa' },
      { nome: 'Coenzima Q10' },
      { nome: 'PQQ' },
      { nome: 'Ácido alfa-lipóico' },
    ],
  },

  // ============ DIGESTIVO ============
  {
    slug: 'intestino-disbiose',
    label: 'Intestino, disbiose, inflamação intestinal',
    dominio: 'digestivo',
    tags: ['intestino', 'disbiose', 'inchaço', 'inchaco', 'gases', 'digestão', 'digestao', 'constipação', 'constipacao', 'refluxo', 'sii', 'colite', 'pulmonar'],
    ativos: [
      { nome: 'N-Acetilcisteína', observacao: 'Modulação de disbiose e inflamação' },
      { nome: 'Pool de Aminoácidos', observacao: 'Substrato glutamina para enterócitos' },
      { nome: 'Vitamina D' },
      { nome: 'Curcumina' },
    ],
  },
];

/**
 * Estrutura "achatada" para a UI: resolve cada AtivoEmQueixa contra o catálogo
 * ATIVOS e retorna os dados completos para renderização.
 */
export interface QueixaResolvida {
  slug: string;
  label: string;
  dominio: Dominio;
  tags: string[];
  ativos: Array<Ativo & { observacao?: string }>;
}

export function resolveQueixas(): QueixaResolvida[] {
  return QUEIXAS.map(q => ({
    ...q,
    ativos: q.ativos.map(a => {
      const cat = getAtivo(a.nome);
      return { ...cat, observacao: a.observacao };
    }),
  }));
}

/**
 * Contagem de domínios para exibição (ex.: "{n} quadros cobertos em {m} domínios").
 */
export function getDominiosCount(): number {
  return new Set(QUEIXAS.map(q => q.dominio)).size;
}
