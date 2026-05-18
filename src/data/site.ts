/**
 * SITE · Danusa Pires · Tricologia & Saúde Integrativa
 * Sistema de marca: Vignelli Discipline
 * Posicionamento: Saúde capilar através da leitura sistêmica. Protocolo clínico individualizado.
 */

/**
 * PALETA VIGNELLI (4 cores + preto/branco)
 * Documentada em hex, RGB, CMYK, Pantone
 */
export const PALETTE = {
  primary: {
    name: 'Obsidian',
    hex: '#0B0B0B',
    rgb: 'rgb(11, 11, 11)',
    cmyk: '0, 0, 0, 96',
    pantone: 'PMS Black 6 C',
  },
  secondary: {
    name: 'Alabaster',
    hex: '#F5F5F5',
    rgb: 'rgb(245, 245, 245)',
    cmyk: '0, 0, 0, 4',
    pantone: 'PMS Warm Gray 1 C',
  },
  accent1: {
    name: 'Copper',
    hex: '#B8860B',
    rgb: 'rgb(184, 134, 11)',
    cmyk: '0, 27, 94, 28',
    pantone: 'PMS 871 C',
  },
  accent2: {
    name: 'Sage',
    hex: '#7A8B7F',
    rgb: 'rgb(122, 139, 127)',
    cmyk: '12, 0, 9, 45',
    pantone: 'PMS 555 C',
  },
  text: {
    name: 'Charcoal',
    hex: '#2A2A2A',
    rgb: 'rgb(42, 42, 42)',
    cmyk: '0, 0, 0, 84',
  },
};

/**
 * TIPOGRAFIA VIGNELLI
 * Duas famílias serif: títulos e corpo
 */
export const TYPOGRAPHY = {
  display: {
    family: 'Playfair Display',
    weights: ['400', '700'],
    usage: 'Headlines, serviços principais, seções de destaque',
  },
  body: {
    family: 'DM Sans',
    weights: ['400', '500', '700'],
    usage: 'Body text, navegação, formulários, detalhes',
  },
  hierarchy: {
    h1: { size: '3.5rem', weight: '700', family: 'display', lineHeight: '1.1' },
    h2: { size: '2.5rem', weight: '700', family: 'display', lineHeight: '1.2' },
    h3: { size: '1.75rem', weight: '700', family: 'display', lineHeight: '1.3' },
    h4: { size: '1.25rem', weight: '700', family: 'body', lineHeight: '1.4' },
    body: { size: '1rem', weight: '400', family: 'body', lineHeight: '1.6' },
    small: { size: '0.875rem', weight: '400', family: 'body', lineHeight: '1.5' },
  },
};

export const SITE = {
  name: 'Danusa Pires',
  shortName: 'Danusa',
  brandSpecialty: 'Tricologia & Saúde Integrativa',
  mission: 'Saúde capilar através da leitura sistêmica do organismo. Protocolos clínicos individualizados que tratam a causa, não apenas o sintoma.',
  tagline: 'O cabelo reflete o organismo. Lemos o reflexo antes de tratar.',

  url: 'https://danusapires.com.br',
  phone: '+55 51 98016-4433',
  email: 'contato@danusapires.com.br',
  instagram: '@dradanusa',
  whatsapp: '5551980164433',

  address: {
    street: 'Rua Mariante',
    number: '180',
    complement: '9° andar, Edifício Moinhos 180',
    neighborhood: 'Moinhos de Vento',
    city: 'Porto Alegre',
    state: 'RS',
    zip: '90430-180',
    country: 'BR',
  },
  coordinates: {
    lat: -30.0277,
    lng: -51.2068,
  },

  cnpj: 'TODO_CNPJ',
  responsavelTecnico: 'Danusa Pires',
  registroProfissional: 'COREN-RS 395164',

  gtmId: 'TODO_GTM_ID',
  metaPixelId: 'TODO_PIXEL_ID',
  gasUrl: 'TODO_GOOGLE_APPS_SCRIPT_URL',

  mapsUrl: 'https://maps.google.com/?q=Rua+Mariante+180+Moinhos+de+Vento+Porto+Alegre',
  foundedYear: 2022,
  teamSize: 4,

  hours: {
    weekday: { open: '09:00', close: '20:00' },
    saturday: { open: '09:00', close: '14:00' },
    sunday: 'Fechado',
  },

  onlineCare: true,
  onlineCareDescription: 'Avaliação online para casos selecionados em todo o Brasil',

  /** Schulze Service Excellence: Daily Lineup themes */
  dailyLineup: {
    enabled: true,
    language: 'pt-BR',
    themes: [
      'Leitura antes de tratar',
      'Protocolo individualizado',
      'Acompanhamento estruturado',
      'Continuidade clínica',
      'Autonomia técnica',
    ],
  },

  /** Schulze Empowerment Policy */
  empowermentPolicy: {
    description: 'Cada membro da equipe tem autonomia para decisões clínicas dentro do protocolo aprovado.',
    empowermentBudget: 'R$ 500-1000 por membro/mês para desenvolvimento e resolução de problemas.',
  },
};

export const WA_BASE = `https://wa.me/${SITE.whatsapp}`;
export const WA_DEFAULT = `${WA_BASE}?text=${encodeURIComponent(
  'Olá Danusa, vim pelo site e gostaria de agendar uma avaliação capilar.'
)}`;

/**
 * Método ESPELHO. Sistema clínico proprietário Vignelli-structured.
 * Cada fase é independente mas integrada. Transparência clínica total.
 */
export const METHOD = {
  name: 'Método ESPELHO',
  philosophy: 'Leitura estruturada → Reflexão sistêmica → Protocolo individualizado → Refração objetiva.',
  steps: [
    {
      number: '01',
      title: 'Leitura',
      subtitle: 'Diagnóstico clínico estruturado',
      description:
        'Anamnese clínica de 60 minutos. Tricoscopia digital de alta resolução. Exames de tração (pull test). Dermatoscopia. Fototricograma baseline. Solicitação de exames laboratoriais sistêmicos quando indicado (hormônios, ferro, vitaminas, imunologia).',
      tools: [
        'Anamnese estruturada',
        'Tricoscopia digital',
        'Dermatoscopia',
        'Fototricograma',
        'Análise laboratorial',
      ],
    },
    {
      number: '02',
      title: 'Reflexo',
      subtitle: 'Síntese diagnóstica',
      description:
        'Devolutiva clínica detalhada ao paciente. Interpretação integrada de achados clínicos e laboratoriais. Identificação do mecanismo dominante (hormonal, inflamatório, carencial, relacionado ao estresse, microbioma). Avaliação de genética capilar (TrichoTest) quando indicado.',
      tools: [
        'Análise integrada',
        'Interpretação de exames',
        'Genética capilar (TrichoTest)',
        'Identificação de mecanismo',
      ],
    },
    {
      number: '03',
      title: 'Protocolo',
      subtitle: 'Plano individualizado',
      description:
        'Tratamento multi-modal customizado por mecanismo dominante. Ativos tópicos prescritos. Fototerapia (laser, LED). Procedimentos intradermo (mesoterapia capilar). Bioestimuladores (exossomas, peptídeos). Moduladores (MMP, inibidores de 5-alfa-redutase). Suporte sistêmico (soroterapia smart.soro prescrita).',
      tools: [
        'Ativos tópicos',
        'Fototerapia',
        'Mesoterapia capilar',
        'Bioestimuladores',
        'Soroterapia sistêmica',
      ],
    },
    {
      number: '04',
      title: 'Refração',
      subtitle: 'Acompanhamento estruturado',
      description:
        'Reavaliação clínica no 3º mês. Fototricografia comparativa. Análise fotográfica de evolução. Ajustes de protocolo conforme resposta individual. Plano de manutenção. Continuidade indefinida com reavalições periódicas.',
      tools: [
        'Fototricografia comparativa',
        'Análise fotográfica',
        'Ajuste de protocolo',
        'Plano de manutenção',
      ],
    },
  ],
};

/**
 * SERVIÇOS CLÍNICOS. Estrutura por mecanismo dominante + casos especiais.
 * Cada serviço oferece linha de crédito clínico independente dentro do protocolo ESPELHO.
 */
export const PILLARS = [
  {
    slug: 'queda-feminina',
    name: 'Queda capilar feminina',
    subtitle: 'Protocolos estruturados para padrões femininos',
    description:
      'Avaliação especializada de padrões de queda específicos do feminino. Pós-parto (eflúvio pós-partum). Menopausa (deficiência estrogênica). Distúrbios hormonais (PCOS, tireoide, hiperprolactinemia). Deficiências (ferro, vitamina D, zinco, vitamina B12). Estresse crônico. Fases do ciclo menstrual.',
    href: '/servicos/queda-feminina',
  },
  {
    slug: 'alopecia-androgenetica',
    name: 'Alopecia androgenética',
    subtitle: 'Conduta clínica para homens e mulheres',
    description:
      'Tratamento de alopecia androgenética (calvície) com protocolo estruturado. Indicação pré-cirúrgica para estabilização. Suporte pós-cirúrgico (60-90 dias). Respeitamos o direito do paciente em decidir: tratar farmacologicamente, esperar, ou combinar com cirurgia.',
    href: '/servicos/alopecia-androgenetica',
  },
  {
    slug: 'efluvio-telogeno',
    name: 'Eflúvio telógeno',
    subtitle: 'Queda difusa aguda e crônica',
    description:
      'Investigação dirigida da queda telogênica difusa. Eflúvio agudo pós-evento (parto, cirurgia, infecção, restrição alimentar, luto, COVID). Eflúvio crônico de mais de 6 meses com causa sistêmica não mapeada. Leitura clínica do gatilho, do substrato nutricional e do ciclo folicular antes de qualquer protocolo cosmético.',
    href: '/servicos/efluvio-telogeno',
  },
  {
    slug: 'outras-alopecias',
    name: 'Outras alopecias',
    subtitle: 'Areata, cicatricial, tração, frontal fibrosante',
    description:
      'Manejo clínico de alopecia areata (autoimune), alopecia cicatricial (líquen plano pilar, foliculite decalvante), alopecia de tração, alopecia frontal fibrosante, e quadros mistos. Diagnóstico diferencial com tricoscopia digital e, quando indicado, encaminhamento dermatológico integrado.',
    href: '/servicos/outras-alopecias',
  },
  {
    slug: 'pos-transplante',
    name: 'Acompanhamento pós-transplante',
    subtitle: 'Continuidade técnica da cirurgia capilar',
    description:
      'Protocolos estruturados entre 60-90 dias pós-cirurgia. Otimização da integração dos enxertos. Redução de queda pós-operatória. Estimulação da vascularização. Preparação do couro cabeludo para fase de crescimento final. Avaliar estabilidade da área doadora.',
    href: '/servicos/pos-transplante',
  },
  {
    slug: 'fortalecimento',
    name: 'Fortalecimento e densidade',
    subtitle: 'Protocolo preventivo e otimização',
    description:
      'Pacientes sem queda ativa que buscam otimização. Densidade. Brilho e força da haste. Prevenção de futuros problemas baseada em genética ou histórico familiar. Protocolo de manutenção de saúde capilar estruturado.',
    href: '/servicos/fortalecimento',
  },
  {
    slug: 'trichotest',
    name: 'Análise genética capilar (TrichoTest)',
    subtitle: 'Genômica aplicada à tricologia',
    description:
      'Sequenciamento genético direcionado a marcadores de predisposição capilar. Resposta farmacogenômica (responsividade a finasterida, minoxidil). Metabolismo de ativos. Protocolo premium de precisão quando genética é fator central.',
    href: '/servicos/trichotest',
  },
  {
    slug: 'soroterapia',
    name: 'Soroterapia sistêmica (smart.soro)',
    subtitle: 'Suporte nutritivo prescrito',
    description:
      'Prescrição clínica de soros intramusculares. Vitamina C. Trio metilador (metionina, colina, inositol). Coenzima Q10. Ativos individualizados conforme análise laboratorial. Suporte sistêmico que complementa protocolo local.',
    href: '/servicos/soroterapia',
  },
  {
    slug: 'terapias-integrativas',
    name: 'Terapias integrativas',
    subtitle: 'Leitura sistêmica do organismo',
    description:
      'Avaliação integrada além do cabelo. Nutrição. Sono. Estresse. Microbioma. Inflamação sistêmica. Hormônios e metabolismo. Quando o cabelo reflete um problema sistêmico, tratamos a causa. Direcionamento a especialistas quando indicado.',
    href: '/saude-integrativa',
  },
];

/**
 * NAVEGAÇÃO VIGNELLI: Hierarquia clara, espaço em branco, sem ruído visual.
 */
export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Soroterapia', href: '/soroterapia' },
  { label: 'Saúde Capilar', href: '/saude-capilar' },
  { label: 'Saúde Integrativa', href: '/saude-integrativa' },
  { label: 'Blog', href: '/blog' },
  { label: 'Agendamento', href: '/agendamento', cta: true },
];

/**
 * Lista clínica de serviços para schema.org MedicalSpecialty
 */
export const SERVICES_FLAT = PILLARS.map(p => p.name);

/**
 * TIPOS DE FORMULÁRIO: Segmentação para rastreamento de conversão e UX.
 * Cada tipo tem missão diferente no funil de conversão.
 */
export const FORM_TYPES = {
  scheduling: {
    id: 'agendamento',
    label: 'Agendamento de consulta',
    description: 'Paciente novo ou reciclagem',
    fbqEvent: 'Lead',
    fields: [
      'nome',
      'email',
      'telefone',
      'tipoConsulta',
      'descricaoQueixa',
      'modalidade', // presencial ou online
      'dataPreferencia',
    ],
  },
  secondOpinion: {
    id: 'segunda-opiniao',
    label: 'Segunda opinião clínica',
    description: 'Reavaliação diagnóstica',
    fbqEvent: 'Lead',
    fields: [
      'nome',
      'email',
      'telefone',
      'profissao', // se profissional de saúde
      'descricaoClinica',
      'examesAnexados',
      'modalidade',
    ],
  },
  onlineConsultation: {
    id: 'consulta-online',
    label: 'Consulta online',
    description: 'Avaliação remota para casos selecionados',
    fbqEvent: 'Lead',
    fields: [
      'nome',
      'email',
      'telefone',
      'estado', // qual estado mora
      'descricaoQueixa',
      'dataPreferencia',
    ],
  },
  professionalInquiry: {
    id: 'profissional',
    label: 'Contato profissional',
    description: 'Médicos, dermatologistas, estéticos',
    fbqEvent: 'Lead',
    fields: [
      'nome',
      'profissao',
      'especializacao',
      'email',
      'telefone',
      'descricaoInteresse',
    ],
  },
  generalContact: {
    id: 'contato',
    label: 'Contato geral',
    description: 'Dúvidas, informações, parcerias',
    fbqEvent: 'Contact',
    fields: ['nome', 'email', 'telefone', 'assunto', 'mensagem'],
  },
  newsletter: {
    id: 'newsletter',
    label: 'Newsletter',
    description: 'Inscrição em artigos e atualizações clínicas',
    fbqEvent: 'Subscribe',
    fields: ['nome', 'email'],
  },
};
