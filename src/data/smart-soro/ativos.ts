/**
 * smart.soro · catálogo de ATIVOS disponíveis
 *
 * Fonte única de verdade dos ativos que a clínica trabalha em soroterapia.
 * Cada ativo aqui é uma "molécula" cadastrada — pode ser referenciada por N
 * queixas em queixas.ts via seu `nome`.
 *
 * REGRAS DE CADASTRO:
 *  - nome: identificador único e como aparece para o paciente. Estável.
 *    Se renomear, é obrigatório atualizar referências em queixas.ts.
 *  - mecanismo: 1 frase técnica curta. Sem marketing.
 *  - categoria: agrupamento clínico-funcional para auditoria e filtros.
 *  - indicacaoUso: cenários clínicos onde o ativo pode ser pertinente.
 *    Texto orientativo, não-prescritivo, sempre começando por
 *    "Pode ajudar em...".
 *
 * Quando adicionar ativo novo: cadastre aqui PRIMEIRO, depois referencie em
 * queixas.ts. Isso garante que a busca não quebra silenciosamente.
 */

export type Ativo = {
  nome: string
  mecanismo: string
  categoria: string
  indicacaoUso: string
}

export const ativos: Ativo[] = [
  {
    nome: "Coenzima Q10",
    mecanismo: "Participa da cadeia transportadora de elétrons mitocondrial, auxiliando a produção de ATP e reduzindo estresse oxidativo celular.",
    categoria: "Mitocondrial / energia / envelhecimento",
    indicacaoUso: "Pode ajudar em queixas de fadiga crônica, baixa energia celular, disfunção mitocondrial, envelhecimento, suporte cardiovascular e queda capilar associada à baixa energia folicular."
  },
  {
    nome: "PQQ",
    mecanismo: "Atua como modulador redox e pode favorecer biogênese mitocondrial, com suporte à função energética celular.",
    categoria: "Mitocondrial / cognição / longevidade",
    indicacaoUso: "Pode ajudar em fadiga persistente, baixa resposta a tratamentos, envelhecimento celular e queixas cognitivas."
  },
  {
    nome: "D-Ribose",
    mecanismo: "Fornece substrato para síntese de nucleotídeos e reposição energética celular, especialmente relacionada ao metabolismo de ATP.",
    categoria: "Energia / performance / recuperação",
    indicacaoUso: "Pode ajudar em fadiga intensa, baixa performance física, fibromialgia e recuperação energética."
  },
  {
    nome: "Metilcobalamina",
    mecanismo: "Forma ativa da vitamina B12, participa da metilação, síntese neurológica, formação de células sanguíneas e metabolismo energético.",
    categoria: "Metilação / neurologia / energia",
    indicacaoUso: "Pode ajudar em déficit de B12, queda capilar, fadiga, neuropatias, cognição e suporte pós-bariátrico."
  },
  {
    nome: "Complexo B",
    mecanismo: "Conjunto de vitaminas envolvidas como cofatores em metabolismo energético, função neurológica, síntese celular e resposta ao estresse.",
    categoria: "Metabolismo / energia / estresse",
    indicacaoUso: "Pode ajudar em suporte metabólico global, estresse crônico, queda capilar, fadiga e deficiências nutricionais."
  },
  {
    nome: "Alpha GPC",
    mecanismo: "Fonte biodisponível de colina, relacionada à síntese de acetilcolina e suporte à comunicação neuronal.",
    categoria: "Cognição / foco / performance mental",
    indicacaoUso: "Pode ajudar em queixas de cognição, memória, foco e performance mental."
  },
  {
    nome: "Piracetam",
    mecanismo: "Modula função neuronal e propriedades de membrana, sendo usado como suporte nootrópico em contextos de desempenho cognitivo.",
    categoria: "Cognição / neuroproteção / performance cerebral",
    indicacaoUso: "Pode ajudar em déficit cognitivo, memória, performance cerebral e neuroproteção."
  },
  {
    nome: "Ácido alfa-lipóico",
    mecanismo: "Atua como antioxidante metabólico, participa da função mitocondrial e pode modular estresse oxidativo e sensibilidade insulínica.",
    categoria: "Metabólico / antioxidante / sensibilidade insulínica",
    indicacaoUso: "Pode ajudar em resistência insulínica, inflamação sistêmica, neuropatia, estresse oxidativo e síndrome metabólica."
  },
  {
    nome: "Curcumina",
    mecanismo: "Modula vias inflamatórias e oxidativas, com ação anti-inflamatória sistêmica e suporte ao controle do estresse oxidativo.",
    categoria: "Anti-inflamatório / antioxidante / dor crônica",
    indicacaoUso: "Pode ajudar em inflamação crônica, queda capilar inflamatória, doenças autoimunes e dor crônica."
  },
  {
    nome: "Glutationa",
    mecanismo: "Principal antioxidante intracelular, participa da defesa redox e de processos de detoxificação hepática.",
    categoria: "Antioxidante / detoxificação / pele",
    indicacaoUso: "Pode ajudar em detox hepático, estresse oxidativo, envelhecimento, saúde da pele e inflamação sistêmica."
  },
  {
    nome: "N-Acetilcisteína",
    mecanismo: "Precursor de cisteína e glutationa, favorecendo defesa antioxidante, detoxificação e modulação inflamatória.",
    categoria: "Antioxidante / detoxificação / inflamação",
    indicacaoUso: "Pode ajudar em detox hepático, disbiose, inflamação, compulsão alimentar e saúde pulmonar."
  },
  {
    nome: "L-Carnitina",
    mecanismo: "Participa do transporte de ácidos graxos para a mitocôndria, favorecendo oxidação de gordura e produção energética.",
    categoria: "Metabolismo de gordura / energia / performance",
    indicacaoUso: "Pode ajudar em emagrecimento, fadiga, baixa oxidação de gordura e performance física."
  },
  {
    nome: "HMB",
    mecanismo: "Metabólito da leucina associado à preservação de massa muscular, síntese proteica e redução de catabolismo muscular.",
    categoria: "Massa muscular / sarcopenia / recuperação",
    indicacaoUso: "Pode ajudar em preservação de massa muscular, sarcopenia, pós-bariátrico e recuperação muscular."
  },
  {
    nome: "Cafeína",
    mecanismo: "Estimula o sistema nervoso central e aumenta sinalização adrenérgica, favorecendo alerta, termogênese e desempenho.",
    categoria: "Estímulo / termogênese / performance",
    indicacaoUso: "Pode ajudar em fadiga, termogênese e performance."
  },
  {
    nome: "Cromo picolinato",
    mecanismo: "Mineral associado à sinalização insulínica e ao metabolismo de glicose.",
    categoria: "Metabólico / glicemia / compulsão por açúcar",
    indicacaoUso: "Pode ajudar em resistência insulínica, compulsão por açúcar e síndrome metabólica."
  },
  {
    nome: "Vanádio",
    mecanismo: "Oligoelemento com ação insulinomimética descrita, relacionado ao metabolismo glicêmico.",
    categoria: "Metabólico / glicemia / sensibilidade insulínica",
    indicacaoUso: "Pode ajudar em controle glicêmico e resistência insulínica."
  },
  {
    nome: "Pool de minerais",
    mecanismo: "Combinação de minerais cofatores de enzimas envolvidas em metabolismo, imunidade, antioxidantes e estrutura capilar.",
    categoria: "Minerais / imunidade / suporte capilar",
    indicacaoUso: "Pode ajudar em deficiências minerais, queda capilar, imunidade e fadiga."
  },
  {
    nome: "Biotina",
    mecanismo: "Vitamina do complexo B envolvida em carboxilases, metabolismo energético e suporte estrutural de cabelo e unhas.",
    categoria: "Capilar / unhas / metabolismo",
    indicacaoUso: "Pode ajudar em queda capilar, fragilidade ungueal e suporte estrutural capilar."
  },
  {
    nome: "D-Pantenol",
    mecanismo: "Pró-vitamina B5 relacionada ao metabolismo celular, hidratação tecidual e suporte à regeneração.",
    categoria: "Capilar / hidratação / regeneração",
    indicacaoUso: "Pode ajudar em saúde capilar, hidratação celular e regeneração."
  },
  {
    nome: "Vitamina C",
    mecanismo: "Antioxidante hidrossolúvel, cofator para síntese de colágeno e suporte à função imune.",
    categoria: "Antioxidante / imunidade / pele",
    indicacaoUso: "Pode ajudar em imunidade, suporte antioxidante, pele e recuperação."
  },
  {
    nome: "ADEK",
    mecanismo: "Combinação de vitaminas lipossolúveis envolvidas em imunidade, metabolismo ósseo, sinalização hormonal e controle inflamatório.",
    categoria: "Vitaminas lipossolúveis / imunidade / inflamação",
    indicacaoUso: "Pode ajudar em imunidade, saúde óssea, regulação hormonal e inflamação."
  },
  {
    nome: "Vitamina D",
    mecanismo: "Secosteroide com ação sobre imunidade, metabolismo ósseo, função muscular, inflamação e sinalização hormonal.",
    categoria: "Imunometabólico / hormonal / capilar",
    indicacaoUso: "Pode ajudar em imunidade, queda capilar, inflamação e saúde hormonal."
  },
  {
    nome: "DMAE",
    mecanismo: "Composto relacionado ao metabolismo colinérgico e ao suporte de foco, cognição e tônus tecidual.",
    categoria: "Cognição / foco / estética",
    indicacaoUso: "Pode ajudar em foco, cognição e flacidez como suporte indireto."
  },
  {
    nome: "GABA",
    mecanismo: "Neurotransmissor inibitório associado à modulação de excitabilidade neuronal, relaxamento e regulação do estresse.",
    categoria: "Sono / ansiedade / estresse",
    indicacaoUso: "Pode ajudar em ansiedade, sono e estresse."
  },
  {
    nome: "NADH",
    mecanismo: "Forma reduzida da nicotinamida adenina dinucleotídeo, participa de reações energéticas mitocondriais e metabolismo redox.",
    categoria: "Mitocondrial / energia / cognição",
    indicacaoUso: "Pode ajudar em fadiga intensa e refratária, disfunção mitocondrial, envelhecimento celular, baixa performance cognitiva, síndrome metabólica e pacientes com baixa resposta a protocolos básicos."
  },
  {
    nome: "Resveratrol",
    mecanismo: "Polifenol associado à modulação inflamatória, sinalização redox e vias relacionadas a sirtuínas.",
    categoria: "Longevidade / anti-inflamatório / cardiovascular",
    indicacaoUso: "Pode ajudar em longevidade, inflamação crônica, saúde cardiovascular, resistência insulínica e envelhecimento cutâneo."
  },
  {
    nome: "Trio Metilador",
    mecanismo: "Combinação usual de B12 ativa, metilfolato e B6 ativa, voltada ao suporte da metilação e metabolismo da homocisteína.",
    categoria: "Metilação / homocisteína / energia",
    indicacaoUso: "Pode ajudar em deficiência de metilação, queda capilar, fadiga, alterações hormonais, homocisteína elevada, pós-bariátrico e pacientes com baixa resposta inflamatória ou detox prejudicado."
  },
  {
    nome: "Pool de Aminoácidos",
    mecanismo: "Fornece aminoácidos como substratos para síntese proteica, reparo tecidual, massa muscular e estrutura capilar.",
    categoria: "Aminoácidos / massa muscular / recuperação tecidual",
    indicacaoUso: "Pode ajudar em queda capilar, pós-operatório, sarcopenia, baixa massa muscular, recuperação tecidual e desnutrição funcional."
  },
  {
    nome: "Vitamina B1",
    mecanismo: "Tiamina, cofator essencial no metabolismo de carboidratos e produção energética, com papel no sistema nervoso.",
    categoria: "Energia / neurologia / metabolismo de carboidratos",
    indicacaoUso: "Pode ajudar em fadiga, baixa produção de energia, suporte neurológico, pacientes pós-bariátricos e metabolismo de carboidratos."
  },
  {
    nome: "Morusil",
    mecanismo: "Extrato padronizado de Morus alba associado a modulação metabólica e composição corporal.",
    categoria: "Metabólico / gordura visceral / emagrecimento",
    indicacaoUso: "Pode ajudar em redução de gordura visceral, síndrome metabólica, resistência insulínica e dificuldade de perda de gordura."
  },
  {
    nome: "Tripeptídeo-41",
    mecanismo: "Peptídeo usado em protocolos estéticos com foco em lipólise e suporte à redução de gordura localizada.",
    categoria: "Emagrecimento / lipólise / gordura localizada",
    indicacaoUso: "Pode ajudar em lipólise, redução de gordura localizada, emagrecimento assistido e potencialização em pacientes em uso de análogos de GLP-1."
  },
  {
    nome: "Pill Food",
    mecanismo: "Associação nutricional voltada ao suporte de matriz capilar, estrutura do fio e reposição de micronutrientes relacionados ao cabelo.",
    categoria: "Capilar / fortalecimento / suporte nutricional",
    indicacaoUso: "Pode ajudar em queda capilar difusa, fortalecimento dos fios, deficiência nutricional capilar e suporte adjuvante em AAG e eflúvio."
  },
  {
    nome: "Silício orgânico",
    mecanismo: "Participa do suporte à matriz extracelular, síntese de colágeno e estrutura de pele, cabelo e unhas.",
    categoria: "Capilar / colágeno / pele e unhas",
    indicacaoUso: "Pode ajudar em fortalecimento capilar, produção de colágeno, elasticidade da pele, unhas frágeis e envelhecimento cutâneo."
  }
]

/**
 * Helper: busca ativo por nome exato (usado em queixas.ts).
 * Lança erro se não encontrar — garante consistência com o catálogo.
 */
export function getAtivo(nome: string): Ativo {
  const a = ativos.find(x => x.nome === nome);
  if (!a) throw new Error(`[smart.soro] Ativo "${nome}" não cadastrado em ativos.ts`);
  return a;
}
