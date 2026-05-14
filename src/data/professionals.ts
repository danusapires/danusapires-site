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
      'Após 18 anos atuando em emergências, a Danusa construiu uma forma diferente de cuidar, com tempo e método. Desde 2022 dedica-se exclusivamente à tricologia & saúde integrativa, conduzindo avaliações estruturadas, planejando protocolos individualizados e acompanhando a evolução de cada paciente.',
    tags: ['Tricologia', 'Diagnóstico capilar', 'Inflamações do couro', '18 anos em saúde'],
    registration: 'COREN-RS 395164',
    education: {
      graduation: 'Enfermagem',
      postgrad: ['Especialização em tricologia · TODO_INSTITUIÇÃO'],
    },
    specialties: ['Tricologia avançada', 'Diagnóstico capilar', 'Inflamações do couro cabeludo', 'Acompanhamento pós-transplante'],
    mainComplaints: [
      'Queda capilar feminina',
      'Queda capilar masculina',
      'Alopecia androgenética',
      'Eflúvio crônico',
      'Inflamações do couro cabeludo',
      'Pós-transplante capilar',
    ],
  },
  {
    slug: 'adriana-melo',
    name: 'Adriana Melo',
    role: 'Técnica de Enfermagem · Procedimentos clínicos',
    unit: 'tricologia',
    bg: '#3A3733',
    description:
      'Adriana atua diretamente nos procedimentos clínicos da tricologia, com rigor técnico e leitura integrativa. Conduz aplicações controladas e participa da continuidade do protocolo definido em conjunto com a fundadora.',
    tags: ['Procedimentos', 'Mesoterapia capilar', 'Aplicações clínicas', 'Enfermagem técnica'],
    registration: 'TODO_COREN_ADRIANA',
    specialties: ['Procedimentos tricológicos', 'Mesoterapia capilar', 'Aplicações controladas'],
    mainComplaints: [
      'Suporte técnico em mesoterapia capilar',
      'Aplicação de protocolos clínicos',
    ],
  },
  {
    slug: 'equipe-tecnica',
    name: 'Equipe Técnica',
    role: 'Técnicas de Enfermagem · Execução e Cuidado',
    unit: 'tricologia',
    bg: '#4A453F',
    description:
      'Duas técnicas de enfermagem compõem a base de sustentação de cada procedimento, da preparação do paciente à execução dos protocolos. Treinadas, alinhadas e comprometidas com a mesma estrutura clínica.',
    tags: ['Procedimentos', 'Preparo e esterilização', 'Execução técnica', 'Acolhimento'],
    specialties: ['Procedimentos clínicos', 'Suporte técnico'],
  },
];

export function getProfessionalBySlug(slug: string) {
  return professionals.find(p => p.slug === slug);
}

export function getProfessionalsByUnit(unit: string) {
  return professionals.filter(p => p.unit === unit);
}
