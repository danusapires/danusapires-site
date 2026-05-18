/**
 * smart.soro · mapeamento de QUEIXAS para ATIVOS
 *
 * Cada queixa aqui referencia ativos por slug (definidos em ativos.ts).
 * O catálogo de ativos é fonte única — esta tabela apenas mapeia.
 *
 * REGRAS DE CADASTRO:
 *  - slug: identificador único, kebab-case, estável.
 *  - label: como aparece para o paciente (com acento).
 *  - dominio: categoria larga para agrupamento (capilar, energia, hormonal, etc).
 *  - tags: SINÔNIMOS para a busca casar. Inclua grafia sem acento, gírias,
 *    nomes médicos populares. Quanto mais tags, mais resiliente a busca.
 *  - ativos: array de { slug: <slug do ativo>, observacao?: string }.
 *    A observacao SOBREESCREVE o mecanismo padrão do ativo nesse contexto.
 *    Use observacao para contextualizar o ativo dentro da queixa específica.
 *
 * NÃO esqueça de cadastrar tags com grafia sem acento — a busca normaliza,
 * mas é boa prática para clareza ao revisar.
 */

import type { Ativo } from './ativos';
import { ATIVOS, getAtivo } from './ativos';

export type Dominio =
  | 'capilar'
  | 'energia-sns'
  | 'pele'
  | 'imunidade'
  | 'hormonal'
  | 'nutricao'
  | 'performance'
  | 'perioperatorio'
  | 'viagem'
  | 'gestacao-puerperio'
  | 'longevidade'
  | 'digestivo';

export interface AtivoEmQueixa {
  slug: string;
  observacao?: string; // sobrescreve mecanismo do ativo no contexto desta queixa
}

export interface Queixa {
  slug: string;
  label: string;
  dominio: Dominio;
  tags: string[];
  ativos: AtivoEmQueixa[];
}

export const QUEIXAS: Queixa[] = [
  // ===== CAPILAR =====
  {
    slug: 'queda-capilar',
    label: 'Queda capilar e fragilidade dos fios',
    dominio: 'capilar',
    tags: ['cabelo', 'queda', 'capilar', 'eflúvio', 'efluvio', 'caindo', 'careca', 'calvície', 'calvicie', 'alopecia', 'fio fino', 'cabelo fraco', 'cabelo ralo'],
    ativos: [
      { slug: 'biotina', observacao: 'Cofator no metabolismo da queratina' },
      { slug: 'zinco', observacao: 'Suporte enzimático ao folículo' },
      { slug: 'vitamina-d3', observacao: 'Modulação do ciclo folicular' },
      { slug: 'cisteina-metionina' },
      { slug: 'ferro-bisglicinato', observacao: 'Quando há ferritina baixa documentada' },
    ],
  },
  {
    slug: 'unhas-fracas',
    label: 'Unhas fracas, quebradiças, com estrias',
    dominio: 'capilar',
    tags: ['unha', 'unhas', 'quebradiça', 'quebradica', 'fina', 'descamando', 'cuticula', 'cutícula'],
    ativos: [
      { slug: 'biotina', observacao: 'Estrutura da queratina ungueal' },
      { slug: 'silica-organica' },
      { slug: 'zinco' },
      { slug: 'vitamina-e' },
    ],
  },

  // ===== ENERGIA E SISTEMA NERVOSO =====
  {
    slug: 'fadiga-disposicao',
    label: 'Fadiga, baixa disposição, cansaço crônico',
    dominio: 'energia-sns',
    tags: ['cansaço', 'cansaco', 'fadiga', 'esgotada', 'esgotado', 'esgotamento', 'sem energia', 'preguiça', 'preguica', 'moleza', 'apatia', 'burnout', 'exaustão', 'exaustao'],
    ativos: [
      { slug: 'complexo-b', observacao: 'Suporte energético mitocondrial' },
      { slug: 'magnesio' },
      { slug: 'vitamina-c', observacao: 'Antioxidante e suporte adrenal' },
      { slug: 'taurina' },
      { slug: 'coq10' },
    ],
  },
  {
    slug: 'dor-de-cabeca',
    label: 'Dor de cabeça, enxaqueca e tensional',
    dominio: 'energia-sns',
    tags: ['dor de cabeça', 'dor de cabeca', 'cefaleia', 'cefaléia', 'enxaqueca', 'migrânea', 'migranea', 'tensional', 'pressão cabeça', 'cabeça doendo'],
    ativos: [
      { slug: 'magnesio', observacao: 'Profilaxia de enxaqueca, relaxamento vascular' },
      { slug: 'vitamina-b2' },
      { slug: 'coq10' },
      { slug: 'hidratacao-isotonica', observacao: 'Correção de desidratação como gatilho' },
    ],
  },
  {
    slug: 'ansiedade-estresse',
    label: 'Ansiedade, estresse crônico e irritabilidade',
    dominio: 'energia-sns',
    tags: ['ansiedade', 'ansiosa', 'ansioso', 'estresse', 'estressada', 'stress', 'nervosa', 'nervoso', 'irritação', 'irritacao', 'tensão', 'tensao', 'preocupação', 'preocupacao'],
    ativos: [
      { slug: 'magnesio', observacao: 'Treonato/glicinato — modulação do SNC' },
      { slug: 'l-teanina' },
      { slug: 'complexo-b', observacao: 'Suporte à síntese de neurotransmissores' },
      { slug: 'inositol', observacao: 'Modulação serotoninérgica' },
    ],
  },
  {
    slug: 'sono-insonia',
    label: 'Insônia, sono fragmentado, dificuldade de dormir',
    dominio: 'energia-sns',
    tags: ['sono', 'insônia', 'insonia', 'não consigo dormir', 'nao consigo dormir', 'dormir mal', 'acorda', 'acordar', 'noite ruim', 'dormindo mal', 'pesadelo', 'sono leve'],
    ativos: [
      { slug: 'magnesio', observacao: 'Glicinato — relaxamento muscular e neural noturno' },
      { slug: 'glicina' },
      { slug: 'triptofano' },
      { slug: 'vitamina-b6' },
    ],
  },
  {
    slug: 'memoria-foco',
    label: 'Memória, foco, concentração e névoa mental',
    dominio: 'energia-sns',
    tags: ['memória', 'memoria', 'esquecida', 'esquecido', 'esquecimento', 'foco', 'concentração', 'concentracao', 'névoa mental', 'nevoa mental', 'brain fog', 'cognição', 'cognicao', 'raciocínio', 'raciocinio'],
    ativos: [
      { slug: 'vitamina-b12' },
      { slug: 'omega-3' },
      { slug: 'fosfatidilserina' },
      { slug: 'acetil-carnitina' },
    ],
  },

  // ===== PELE =====
  {
    slug: 'pele-envelhecimento',
    label: 'Pele, envelhecimento, oxidação e brilho',
    dominio: 'pele',
    tags: ['pele', 'rosto', 'envelhecimento', 'rugas', 'flacidez', 'oxidação', 'oxidacao', 'antioxidante', 'glow', 'brilho', 'idade', 'jovem'],
    ativos: [
      { slug: 'glutationa' },
      { slug: 'acido-alfa-lipoico' },
      { slug: 'vitamina-c', observacao: 'Cofator do colágeno' },
      { slug: 'selenio' },
    ],
  },
  {
    slug: 'melasma-manchas',
    label: 'Melasma, manchas, hiperpigmentação',
    dominio: 'pele',
    tags: ['melasma', 'mancha', 'manchas', 'hiperpigmentação', 'hiperpigmentacao', 'pano', 'cloasma', 'escurecimento'],
    ativos: [
      { slug: 'glutationa', observacao: 'Inibição indireta de melanogênese' },
      { slug: 'vitamina-c', observacao: 'Modulação de tirosinase' },
      { slug: 'acido-tranexamico' },
      { slug: 'polypodium' },
    ],
  },
  {
    slug: 'acne-pele-oleosa',
    label: 'Acne, pele oleosa, espinha persistente',
    dominio: 'pele',
    tags: ['acne', 'espinha', 'cravo', 'oleosa', 'pele oleosa', 'inflamação pele', 'inflamacao pele'],
    ativos: [
      { slug: 'zinco', observacao: 'Modulação de 5α-redutase e inflamação' },
      { slug: 'vitamina-a' },
      { slug: 'omega-3' },
      { slug: 'nac', observacao: 'Modulação de PCOS-acne em mulheres' },
    ],
  },

  // ===== IMUNIDADE =====
  {
    slug: 'imunidade-recorrencia',
    label: 'Imunidade baixa ou episódios virais recorrentes',
    dominio: 'imunidade',
    tags: ['imunidade', 'imune', 'gripe', 'resfriado', 'virose', 'vivo doente', 'sempre doente', 'baixa imunidade', 'defesa'],
    ativos: [
      { slug: 'vitamina-d3', observacao: 'Modulação imune' },
      { slug: 'zinco', observacao: 'Função de linfócitos T' },
      { slug: 'vitamina-c', observacao: 'Suporte de neutrófilos' },
      { slug: 'nac' },
    ],
  },
  {
    slug: 'covid-longa',
    label: 'COVID longa, pós-viral, fadiga pós-infecção',
    dominio: 'imunidade',
    tags: ['covid', 'long covid', 'covid longa', 'pós covid', 'pos covid', 'pós viral', 'pos viral', 'fadiga pós', 'fadiga pos'],
    ativos: [
      { slug: 'nad-precursores', observacao: 'Recuperação mitocondrial' },
      { slug: 'coq10' },
      { slug: 'vitamina-c', observacao: 'Modulação inflamatória pós-viral' },
      { slug: 'glutationa' },
      { slug: 'complexo-b' },
    ],
  },
  {
    slug: 'ressaca',
    label: 'Ressaca, hangover e recuperação após consumo',
    dominio: 'imunidade',
    tags: ['ressaca', 'hangover', 'álcool', 'alcool', 'bebida', 'após beber', 'apos beber', 'recuperação alcool', 'recuperacao alcool'],
    ativos: [
      { slug: 'nac', observacao: 'Conjugação hepática do acetaldeído' },
      { slug: 'glutationa' },
      { slug: 'vitamina-b1', observacao: 'Reposição depletada pelo álcool' },
      { slug: 'hidratacao-isotonica' },
    ],
  },

  // ===== HORMONAL =====
  {
    slug: 'tpm-colica',
    label: 'TPM, cólica menstrual e dor pélvica cíclica',
    dominio: 'hormonal',
    tags: ['tpm', 'menstruação', 'menstruacao', 'cólica', 'colica', 'ciclo menstrual', 'sangramento', 'mestrual', 'menstrual'],
    ativos: [
      { slug: 'magnesio', observacao: 'Relaxamento da musculatura uterina' },
      { slug: 'vitamina-b6', observacao: 'Modulação de prostaglandinas' },
      { slug: 'omega-3' },
      { slug: 'calcio-ionico', observacao: 'Modulação de sintomas pré-menstruais' },
    ],
  },
  {
    slug: 'climaterio-menopausa',
    label: 'Climatério, menopausa, fogachos e suor noturno',
    dominio: 'hormonal',
    tags: ['menopausa', 'climatério', 'climaterio', 'fogacho', 'fogachos', 'calorão', 'calorao', 'suor noturno', 'perimenopausa', '40+', '50+'],
    ativos: [
      { slug: 'vitamina-e', observacao: 'Modulação de fogachos com evidência clínica' },
      { slug: 'magnesio' },
      { slug: 'complexo-b' },
      { slug: 'omega-3' },
    ],
  },
  {
    slug: 'libido-disposicao-sexual',
    label: 'Libido baixa, disposição sexual e energia íntima',
    dominio: 'hormonal',
    tags: ['libido', 'sexo', 'desejo', 'sexual', 'disfunção', 'disfuncao', 'íntima', 'intima'],
    ativos: [
      { slug: 'arginina' },
      { slug: 'zinco', observacao: 'Suporte hormonal androgênico' },
      { slug: 'vitamina-d3', observacao: 'Modulação hormonal' },
      { slug: 'coq10' },
    ],
  },
  {
    slug: 'tireoide',
    label: 'Tireoide, hipo, fadiga tireoidiana',
    dominio: 'hormonal',
    tags: ['tireoide', 'tireóide', 'hipotireoidismo', 'hashimoto', 'tsh', 't4', 't3'],
    ativos: [
      { slug: 'selenio' },
      { slug: 'zinco', observacao: 'Cofator de desiodases' },
      { slug: 'tirosina' },
      { slug: 'vitamina-d3', observacao: 'Modulação autoimune (Hashimoto)' },
    ],
  },
  {
    slug: 'resistencia-insulinica',
    label: 'Resistência insulínica, pré-diabetes, glicemia alterada',
    dominio: 'hormonal',
    tags: ['insulina', 'resistência insulínica', 'resistencia insulinica', 'diabetes', 'pré-diabetes', 'pre-diabetes', 'glicemia', 'glicose', 'açúcar', 'acucar', 'sop', 'pcos'],
    ativos: [
      { slug: 'inositol' },
      { slug: 'berberina' },
      { slug: 'magnesio', observacao: 'Cofator da sinalização insulínica' },
      { slug: 'cromo' },
    ],
  },

  // ===== NUTRIÇÃO =====
  {
    slug: 'anemia-ferro-b12',
    label: 'Anemia, ferro baixo, B12 baixa',
    dominio: 'nutricao',
    tags: ['anemia', 'ferro', 'ferritina', 'b12', 'cobalamina', 'palidez', 'tontura', 'hemoglobina'],
    ativos: [
      { slug: 'ferro-bisglicinato' },
      { slug: 'vitamina-b12' },
      { slug: 'acido-folico' },
      { slug: 'vitamina-c', observacao: 'Otimização da absorção de ferro' },
    ],
  },
  {
    slug: 'vitamina-d-baixa',
    label: 'Vitamina D baixa, deficiência documentada',
    dominio: 'nutricao',
    tags: ['vitamina d', 'vitamina d3', 'd baixa', 'deficiência', 'deficiencia', '25-oh'],
    ativos: [
      { slug: 'vitamina-d3' },
      { slug: 'vitamina-k2' },
      { slug: 'magnesio', observacao: 'Cofator da ativação da vitamina D' },
    ],
  },
  {
    slug: 'detox-figado',
    label: 'Detox, sobrecarga hepática, esteatose',
    dominio: 'nutricao',
    tags: ['detox', 'desintoxicação', 'desintoxicacao', 'fígado', 'figado', 'esteatose', 'gordura no fígado', 'gordura no figado', 'limpeza'],
    ativos: [
      { slug: 'glutationa', observacao: 'Conjugação hepática fase II' },
      { slug: 'nac' },
      { slug: 'silimarina' },
      { slug: 'colina' },
    ],
  },

  // ===== PERFORMANCE =====
  {
    slug: 'performance-esportiva',
    label: 'Performance esportiva, treino intenso, recuperação',
    dominio: 'performance',
    tags: ['treino', 'esporte', 'atleta', 'performance', 'academia', 'crossfit', 'corrida', 'maratona', 'recuperação', 'recuperacao'],
    ativos: [
      { slug: 'bcaa' },
      { slug: 'l-carnitina' },
      { slug: 'coq10' },
      { slug: 'magnesio' },
    ],
  },
  {
    slug: 'caibras-musculares',
    label: 'Cãibras, dor muscular, espasmos',
    dominio: 'performance',
    tags: ['cãibra', 'cabra', 'caimbra', 'caibra', 'dor muscular', 'espasmo', 'músculo', 'musculo', 'tensão muscular', 'tensao muscular'],
    ativos: [
      { slug: 'magnesio' },
      { slug: 'potassio' },
      { slug: 'calcio-ionico' },
      { slug: 'vitamina-b1' },
    ],
  },
  {
    slug: 'articulacao-dor',
    label: 'Dor articular, artrose, articulações',
    dominio: 'performance',
    tags: ['articulação', 'articulacao', 'joelho', 'ombro', 'artrose', 'artrite', 'dor articular', 'rigidez'],
    ativos: [
      { slug: 'colageno-tipo-2' },
      { slug: 'omega-3', observacao: 'EPA com evidência inflamatória' },
      { slug: 'vitamina-d3' },
      { slug: 'msm' },
    ],
  },

  // ===== PERIOPERATÓRIO =====
  {
    slug: 'pre-pos-procedimento',
    label: 'Pré e pós-procedimento (estético, cirúrgico ou capilar)',
    dominio: 'perioperatorio',
    tags: ['cirurgia', 'pré cirurgia', 'pre cirurgia', 'pós cirurgia', 'pos cirurgia', 'procedimento', 'recuperação cirurgia', 'recuperacao cirurgia', 'cicatrização', 'cicatrizacao', 'transplante'],
    ativos: [
      { slug: 'vitamina-c', observacao: 'Síntese de colágeno na cicatrização' },
      { slug: 'aminoacidos-essenciais' },
      { slug: 'glutationa' },
      { slug: 'zinco', observacao: 'Cicatrização e reparo' },
      { slug: 'arnica' },
    ],
  },

  // ===== VIAGEM =====
  {
    slug: 'jet-lag-viagem',
    label: 'Jet lag, viagem longa, mudança de fuso',
    dominio: 'viagem',
    tags: ['jet lag', 'viagem', 'fuso', 'avião', 'aviao', 'fusos', 'cansaço viagem', 'cansaco viagem'],
    ativos: [
      { slug: 'melatonina' },
      { slug: 'magnesio' },
      { slug: 'complexo-b' },
      { slug: 'vitamina-c' },
    ],
  },

  // ===== GESTAÇÃO / PUERPÉRIO =====
  {
    slug: 'pos-parto-puerperio',
    label: 'Pós-parto, puerpério, queda capilar pós-parto',
    dominio: 'gestacao-puerperio',
    tags: ['pós parto', 'pos parto', 'pós-parto', 'pos-parto', 'puerpério', 'puerperio', 'amamentando', 'amamentação', 'amamentacao', 'parto', 'bebê', 'bebe'],
    ativos: [
      { slug: 'ferro-bisglicinato', observacao: 'Reposição após perdas sanguíneas' },
      { slug: 'vitamina-b12' },
      { slug: 'acido-folico' },
      { slug: 'omega-3', observacao: 'DHA — suporte materno-fetal na amamentação' },
    ],
  },

  // ===== LONGEVIDADE =====
  {
    slug: 'longevidade',
    label: 'Longevidade, manutenção preventiva, antiaging',
    dominio: 'longevidade',
    tags: ['longevidade', 'antiaging', 'anti-aging', 'envelhecimento saudável', 'prevenção', 'prevencao', 'manutenção', 'manutencao', 'wellness'],
    ativos: [
      { slug: 'nad-precursores' },
      { slug: 'glutationa' },
      { slug: 'coq10' },
      { slug: 'multivitaminico-ev' },
      { slug: 'resveratrol' },
    ],
  },

  // ===== DIGESTIVO =====
  {
    slug: 'intestino-disbiose',
    label: 'Intestino, disbiose, inchaço, digestão',
    dominio: 'digestivo',
    tags: ['intestino', 'disbiose', 'inchaço', 'inchaco', 'gases', 'digestão', 'digestao', 'constipação', 'constipacao', 'refluxo', 'sii', 'colite'],
    ativos: [
      { slug: 'glutamina', observacao: 'Substrato dos enterócitos' },
      { slug: 'zinco-carnosina' },
      { slug: 'vitamina-d3', observacao: 'Modulação da barreira intestinal' },
      { slug: 'magnesio', observacao: 'Motilidade intestinal' },
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
      const cat = getAtivo(a.slug);
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
