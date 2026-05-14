export interface Professional {
  slug: string;
  name: string;
  role: string;
  unit: string;
  photo?: string;
  bg: string;
  ig?: string;
  description: string;
  tags: string[];
  registration?: string;
  education?: {
    graduation: string;
    postgrad?: string[];
    residency?: string;
  };
  specialties?: string[];
  mainComplaints?: string[];
}

export const professionals: Professional[] = [
  {
    slug: 'danusa-pires',
    name: 'Danusa Pires',
    role: 'Fundadora · Tricologia & Saúde Integrativa',
    unit: 'tricologia',
    photo: '/team/danusa-pires.webp',
    bg: '#2A2A2A',
    ig: '@dradanusa',
    description:
      'Enfermeira com 18 anos em saúde, dedicada exclusivamente à tricologia desde 2022. Conduz avaliações estruturadas de 60 minutos, planeja protocolos por mecanismo dominante e acompanha a evolução de cada paciente. O cabelo é lido como reflexo do organismo — hormônios, ferritina, vitamina D, microbioma intestinal, sono e história clínica antes de qualquer protocolo.',
    tags: ['Tricologia avançada', 'Diagnóstico sistêmico', 'Método ESPELHO', 'Nutracêuticos'],
    registration: 'COREN-RS 395164',
    education: {
      graduation: 'Bacharelado em Enfermagem · PUCRS · 2012',
      postgrad: [
        'Pós em Enfermagem Estética · Instituto Nepuga · 2022',
        'Pós em Tricologia Avançada · Instituto Lívia Vacari · 2024',
        'Especialização em Nutracêuticos · Instituto Thereza Moraes · 2025',
      ],
    },
    specialties: ['Tricologia avançada', 'Método ESPELHO', 'Soroterapia (smart.soro)', 'Acompanhamento pós-transplante'],
    mainComplaints: [
      'Queda capilar feminina',
      'Alopecia androgenética',
      'Eflúvio crônico',
      'Menopausa e perimenopausa',
      'Pós-transplante capilar',
      'Fortalecimento e densidade',
    ],
  },
  {
    slug: 'adriana-melo',
    name: 'Adriana Melo dos Santos Pinto',
    role: 'Enfermagem · Soroterapia e abordagem integrativa',
    unit: 'tricologia',
    bg: '#3A3733',
    description:
      'Adriana conduz a soroterapia (smart.soro) após habilitação no conselho e integra a abordagem clínica via biorressonância e saúde do intestino. Atua nos procedimentos da tricologia com rigor técnico e leitura integrativa, em diálogo direto com a direção clínica.',
    tags: ['Soroterapia', 'Biorressonância', 'Saúde do intestino', 'Ortomolecular'],
    registration: 'COREN-RS 1.255.019',
    education: {
      graduation: 'Técnica em Enfermagem · 2008 (graduanda em Enfermagem)',
      postgrad: [
        'Pós em Suplementação Injetável Estética Avançada',
        'Especialização em Análise por Biorressonância',
        'Especialização em Saúde do Intestino',
        'Terapeuta Ortomolecular',
      ],
    },
    specialties: ['Soroterapia (smart.soro)', 'Biorressonância', 'Abordagem ortomolecular', 'Procedimentos tricológicos'],
    mainComplaints: [
      'Suporte sistêmico via soroterapia',
      'Leitura energético-funcional complementar',
      'Aplicação de protocolos clínicos',
    ],
  },
  {
    slug: 'amanda-paz',
    name: 'Amanda Paz da Silva Martins',
    role: 'Técnica de Enfermagem · Suporte clínico',
    unit: 'tricologia',
    bg: '#4A453F',
    description:
      'Amanda dá suporte direto a cada procedimento — da preparação do paciente à execução técnica dos protocolos. Treinada, alinhada à estrutura clínica e comprometida com a mesma exigência de cuidado em cada atendimento.',
    tags: ['Procedimentos', 'Preparo e esterilização', 'Execução técnica', 'Acolhimento'],
    registration: 'COREN-RS 127.286',
    specialties: ['Procedimentos clínicos', 'Suporte técnico'],
  },
];

export function getProfessionalBySlug(slug: string) {
  return professionals.find(p => p.slug === slug);
}

export function getProfessionalsByUnit(unit: string) {
  return professionals.filter(p => p.unit === unit);
}
