/**
 * smart.soro · catálogo de ATIVOS disponíveis
 *
 * Fonte única de verdade dos ativos que a clínica trabalha em soroterapia.
 * Cada ativo aqui é uma "molécula" cadastrada — pode ser referenciada por N queixas
 * em queixas.ts via seu `slug`.
 *
 * REGRAS DE CADASTRO:
 *  - slug: identificador único, kebab-case, sem acento, estável (NUNCA renomear depois).
 *    Se quiser renomear o nome de exibição, troque `nome` e mantenha `slug`.
 *  - nome: como aparece para o paciente (com acento, formal).
 *  - mecanismo: 1 frase técnica curta. Evitar marketing.
 *  - via: rotas comuns de administração. Apenas referência — não é prescrição.
 *  - contraindicacoes: lista de cenários que invalidam o ativo. NUNCA omitir
 *    quando aplicável (gravidez, função renal, alergia, interação).
 *  - notas: texto livre opcional para detalhes clínicos relevantes.
 *
 * Quando adicionar ativo novo: cadastre aqui PRIMEIRO, depois referencie em
 * queixas.ts. Isso garante que a busca não quebra silenciosamente.
 */

export type Via = 'IV' | 'IM' | 'SC' | 'oral' | 'topica';

export interface Ativo {
  slug: string;
  nome: string;
  mecanismo: string;
  via?: Via[];
  contraindicacoes?: string[];
  notas?: string;
}

export const ATIVOS: Ativo[] = [
  // ===== AMINOÁCIDOS E PROTEÍNAS =====
  {
    slug: 'aminoacidos-essenciais',
    nome: 'Aminoácidos essenciais',
    mecanismo: 'Substrato para reparo tecidual e síntese proteica',
    via: ['IV'],
  },
  {
    slug: 'arginina',
    nome: 'L-Arginina',
    mecanismo: 'Substrato de óxido nítrico, vasodilatação periférica',
    via: ['IV', 'oral'],
    contraindicacoes: ['Herpes ativo (pode ativar replicação)', 'Pós-IAM recente'],
  },
  {
    slug: 'bcaa',
    nome: 'BCAA (aminoácidos de cadeia ramificada)',
    mecanismo: 'Reparo muscular pós-treino, síntese proteica',
    via: ['IV', 'oral'],
  },
  {
    slug: 'cisteina-metionina',
    nome: 'Cisteína / Metionina',
    mecanismo: 'Aminoácidos sulfurados estruturais do fio',
    via: ['IV'],
  },
  {
    slug: 'glicina',
    nome: 'Glicina',
    mecanismo: 'Indução e qualidade do sono profundo, glicina-receptor',
    via: ['oral'],
  },
  {
    slug: 'glutamina',
    nome: 'L-Glutamina',
    mecanismo: 'Substrato primário dos enterócitos, reparo da barreira intestinal',
    via: ['IV', 'oral'],
  },
  {
    slug: 'taurina',
    nome: 'Taurina',
    mecanismo: 'Modulação do estresse oxidativo e função osmótica',
    via: ['IV', 'oral'],
  },
  {
    slug: 'triptofano',
    nome: 'L-Triptofano',
    mecanismo: 'Precursor de serotonina e melatonina',
    via: ['oral'],
    contraindicacoes: ['Uso de ISRS (risco síndrome serotoninérgica)', 'IMAO'],
  },
  {
    slug: 'tirosina',
    nome: 'L-Tirosina',
    mecanismo: 'Precursor de dopamina, noradrenalina e hormônio tireoidiano',
    via: ['oral'],
    contraindicacoes: ['Feocromocitoma', 'Hipertireoidismo'],
  },

  // ===== VITAMINAS =====
  {
    slug: 'biotina',
    nome: 'Biotina (B7)',
    mecanismo: 'Cofator no metabolismo da queratina e síntese proteica',
    via: ['IV', 'IM', 'oral'],
    notas: 'Pode interferir em exames laboratoriais de tireoide e troponina — suspender 48-72h antes de coleta.',
  },
  {
    slug: 'complexo-b',
    nome: 'Complexo B',
    mecanismo: 'Suporte energético mitocondrial e síntese de neurotransmissores',
    via: ['IV', 'IM'],
  },
  {
    slug: 'vitamina-b1',
    nome: 'Vitamina B1 (tiamina)',
    mecanismo: 'Função nervosa periférica e metabolismo de carboidratos',
    via: ['IV', 'IM', 'oral'],
  },
  {
    slug: 'vitamina-b2',
    nome: 'Vitamina B2 (riboflavina, alta dose)',
    mecanismo: 'Profilaxia de migrânea com evidência clínica',
    via: ['oral'],
  },
  {
    slug: 'vitamina-b6',
    nome: 'Vitamina B6',
    mecanismo: 'Conversão de triptofano a serotonina e modulação de prostaglandinas',
    via: ['IV', 'oral'],
  },
  {
    slug: 'vitamina-b12',
    nome: 'Vitamina B12 (metilcobalamina)',
    mecanismo: 'Função neurológica, mielinização e hematopoese',
    via: ['IM', 'IV', 'oral'],
  },
  {
    slug: 'acido-folico',
    nome: 'Ácido fólico (5-MTHF metilado)',
    mecanismo: 'Cofator hematopoético e metilação',
    via: ['IV', 'oral'],
  },
  {
    slug: 'vitamina-c',
    nome: 'Vitamina C',
    mecanismo: 'Cofator do colágeno, antioxidante, suporte adrenal e imune',
    via: ['IV', 'IM', 'oral'],
    contraindicacoes: ['Deficiência de G6PD (risco hemólise em alta dose IV)', 'Litíase oxálica ativa'],
  },
  {
    slug: 'vitamina-d3',
    nome: 'Vitamina D3 (colecalciferol)',
    mecanismo: 'Modulação imune, ciclo folicular, saúde óssea',
    via: ['oral', 'IM'],
    notas: 'Reposição sempre conforme dosagem de 25-OH sérico.',
  },
  {
    slug: 'vitamina-e',
    nome: 'Vitamina E',
    mecanismo: 'Antioxidante de membrana e modulação de fogachos',
    via: ['oral'],
  },
  {
    slug: 'vitamina-k2',
    nome: 'Vitamina K2 (MK-7)',
    mecanismo: 'Direcionamento ósseo do cálcio mobilizado por vitamina D',
    via: ['oral'],
    contraindicacoes: ['Uso de varfarina'],
  },
  {
    slug: 'vitamina-a',
    nome: 'Vitamina A (palmitato, dose clínica)',
    mecanismo: 'Regulação de queratinização e função imune',
    via: ['oral'],
    contraindicacoes: ['Gestação (teratogenicidade em doses altas)'],
  },

  // ===== MINERAIS =====
  {
    slug: 'magnesio',
    nome: 'Magnésio quelado (glicinato/treonato)',
    mecanismo: 'Cofator de 300+ reações enzimáticas, neuromuscular, sono',
    via: ['IV', 'oral'],
    contraindicacoes: ['Insuficiência renal grave'],
  },
  {
    slug: 'zinco',
    nome: 'Zinco quelado',
    mecanismo: 'Suporte enzimático folicular, imune, cicatrização, função sexual',
    via: ['IV', 'oral'],
    notas: 'Reposição prolongada exige cobre concomitante.',
  },
  {
    slug: 'selenio',
    nome: 'Selênio',
    mecanismo: 'Conversão T4→T3, modulação autoimune tireoidiana, defesa antioxidante',
    via: ['oral'],
    contraindicacoes: ['Selênio sérico já elevado'],
  },
  {
    slug: 'ferro-bisglicinato',
    nome: 'Ferro bisglicinato',
    mecanismo: 'Reposição de ferro com alta biodisponibilidade e tolerabilidade',
    via: ['IV', 'oral'],
    notas: 'IV apenas com ferritina documentada baixa e contraindicação a oral.',
    contraindicacoes: ['Hemocromatose', 'Talassemia'],
  },
  {
    slug: 'calcio-ionico',
    nome: 'Cálcio iônico',
    mecanismo: 'Acoplamento excitação-contração muscular',
    via: ['IV', 'oral'],
    contraindicacoes: ['Hipercalcemia', 'Cálculos renais cálcicos ativos'],
  },
  {
    slug: 'potassio',
    nome: 'Potássio',
    mecanismo: 'Equilíbrio eletrolítico e função neuromuscular',
    via: ['IV', 'oral'],
    contraindicacoes: ['Insuficiência renal', 'Uso de poupadores de potássio'],
  },
  {
    slug: 'cromo',
    nome: 'Cromo (picolinato)',
    mecanismo: 'Potencialização da ação insulínica',
    via: ['oral'],
  },
  {
    slug: 'silica-organica',
    nome: 'Sílica orgânica',
    mecanismo: 'Mineralização do tecido ósseo, capilar e ungueal',
    via: ['oral'],
  },

  // ===== ANTIOXIDANTES E DETOX =====
  {
    slug: 'glutationa',
    nome: 'Glutationa',
    mecanismo: 'Antioxidante mestre, conjugação hepática fase II',
    via: ['IV', 'IM'],
  },
  {
    slug: 'nac',
    nome: 'NAC (N-acetilcisteína)',
    mecanismo: 'Precursor de glutationa, mucolítico, modulação PCOS-acne',
    via: ['IV', 'oral'],
  },
  {
    slug: 'acido-alfa-lipoico',
    nome: 'Ácido alfa-lipoico',
    mecanismo: 'Antioxidante hidro e lipossolúvel, regenera vit C e E',
    via: ['IV', 'oral'],
  },
  {
    slug: 'silimarina',
    nome: 'Silimarina',
    mecanismo: 'Proteção hepatocitária contra estresse oxidativo',
    via: ['oral'],
  },
  {
    slug: 'colina',
    nome: 'Colina',
    mecanismo: 'Metabolismo lipídico hepático e síntese de acetilcolina',
    via: ['oral', 'IV'],
  },

  // ===== MITOCONDRIAIS =====
  {
    slug: 'coq10',
    nome: 'Coenzima Q10',
    mecanismo: 'Cadeia respiratória mitocondrial, suporte energético',
    via: ['oral', 'IV'],
  },
  {
    slug: 'nad-precursores',
    nome: 'NAD+ precursores (NMN/NR)',
    mecanismo: 'Suporte mitocondrial e vias de longevidade',
    via: ['IV', 'oral'],
    notas: 'Evidência mais forte em vias preclínicas; aplicação clínica em desenvolvimento.',
  },
  {
    slug: 'l-carnitina',
    nome: 'L-Carnitina',
    mecanismo: 'Transporte de ácidos graxos para mitocôndria',
    via: ['IV', 'oral'],
  },
  {
    slug: 'acetil-carnitina',
    nome: 'Acetil-L-Carnitina',
    mecanismo: 'Transporte energético neuronal, atravessa BHE',
    via: ['oral'],
  },

  // ===== ÁCIDOS GRAXOS =====
  {
    slug: 'omega-3',
    nome: 'Ômega 3 (EPA/DHA)',
    mecanismo: 'Modulação inflamatória, estrutura neuronal, modulação cardiovascular',
    via: ['oral'],
    contraindicacoes: ['Uso concomitante de anticoagulantes (avaliar)'],
  },

  // ===== MODULADORES NEURO / METABÓLICOS =====
  {
    slug: 'l-teanina',
    nome: 'L-Teanina',
    mecanismo: 'Modulação de ondas alfa cerebrais, ansiolítico não-sedativo',
    via: ['oral'],
  },
  {
    slug: 'inositol',
    nome: 'Inositol (myo + d-chiro)',
    mecanismo: 'Sensibilização à insulina, modulação serotoninérgica, evidência em SOP',
    via: ['oral'],
  },
  {
    slug: 'fosfatidilserina',
    nome: 'Fosfatidilserina',
    mecanismo: 'Suporte de membrana neuronal, modulação de cortisol',
    via: ['oral'],
  },
  {
    slug: 'melatonina',
    nome: 'Melatonina',
    mecanismo: 'Reorganização do ciclo circadiano',
    via: ['oral'],
    notas: 'Uso clínico controlado. Dose e horário fazem toda a diferença.',
  },
  {
    slug: 'berberina',
    nome: 'Berberina',
    mecanismo: 'Modulação de glicemia, perfil lipídico e microbioma',
    via: ['oral'],
    contraindicacoes: ['Gestação', 'Lactação', 'Uso de ciclosporina'],
  },

  // ===== ESTÉTICOS / TECIDUAIS =====
  {
    slug: 'colageno-tipo-2',
    nome: 'Colágeno tipo II hidrolisado',
    mecanismo: 'Suporte cartilaginoso, oral coadjuvante em artropatias',
    via: ['oral'],
  },
  {
    slug: 'msm',
    nome: 'MSM (metilsulfonilmetano)',
    mecanismo: 'Doador de enxofre, suporte antiinflamatório articular',
    via: ['oral'],
  },
  {
    slug: 'acido-tranexamico',
    nome: 'Ácido tranexâmico (uso clínico)',
    mecanismo: 'Modulação vascular do melasma, coadjuvante oral',
    via: ['oral', 'topica'],
    contraindicacoes: ['Histórico de tromboembolismo', 'Trombofilia conhecida'],
  },
  {
    slug: 'polypodium',
    nome: 'Polypodium leucotomos',
    mecanismo: 'Fotoproteção sistêmica oral coadjuvante',
    via: ['oral'],
  },
  {
    slug: 'resveratrol',
    nome: 'Resveratrol',
    mecanismo: 'Modulação de vias de longevidade (sirtuínas), antioxidante',
    via: ['oral'],
  },
  {
    slug: 'arnica',
    nome: 'Arnica (homeopática coadjuvante)',
    mecanismo: 'Modulação de equimose e edema pós-procedimento',
    via: ['oral', 'topica'],
  },

  // ===== HIDRATAÇÃO / SUPORTE =====
  {
    slug: 'hidratacao-isotonica',
    nome: 'Hidratação isotônica + eletrólitos',
    mecanismo: 'Reposição volêmica e correção hidroeletrolítica',
    via: ['IV'],
  },
  {
    slug: 'multivitaminico-ev',
    nome: 'Multivitamínico EV',
    mecanismo: 'Reposição programada conforme avaliação laboratorial',
    via: ['IV'],
  },
  {
    slug: 'zinco-carnosina',
    nome: 'Zinco-carnosina',
    mecanismo: 'Reparo da mucosa gástrica e proteção contra úlcera',
    via: ['oral'],
  },
];

/**
 * Helper: busca ativo por slug (para uso em queixas.ts).
 * Lança erro se não encontrar — força catálogo atualizado.
 */
export function getAtivo(slug: string): Ativo {
  const a = ATIVOS.find(x => x.slug === slug);
  if (!a) throw new Error(`[smart.soro] Ativo "${slug}" não cadastrado em ativos.ts`);
  return a;
}
