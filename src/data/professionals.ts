export interface Professional {
  slug: string;
  name: string;
  title: string; // Título profissional
  role: string; // Função na clínica
  unit: string; // 'tricologia' ou 'integrativa'
  photo?: string;
  bg: string; // Cor de fundo do card
  ig?: string;

  // Schulze credibility pillars
  description: string; // Filosofia e abordagem
  autonomy: string; // O que decide/define autonomamente
  philosophy: string; // Visão sobre o cuidado

  tags: string[];
  registration?: string; // COREN, CRM, etc

  education?: {
    graduation: string;
    postgrad?: string[];
    residency?: string;
    continuingEducation?: string[];
  };

  specialties?: string[];
  mainComplaints?: string[];

  // Schulze: Focus on outcomes and patient transformation
  clinicalFocus?: string;
}

export const professionals: Professional[] = [
  {
    slug: 'danusa-pires',
    name: 'Danusa Pires',
    title: 'Enfermeira especialista em Tricologia',
    role: 'Fundadora & Diretora Clínica',
    unit: 'tricologia',
    photo: '/team/danusa-pires.webp',
    bg: '#0B0B0B',
    ig: '@dradanusa',

    philosophy:
      'Acredito que o cabelo é um espelho do organismo. Antes de qualquer tratamento tópico ou procedural, é imperativo ler estruturadamente. Diagnóstico preciso precede protocolo efetivo. Cada paciente merece uma solução desenhada especificamente para seu mecanismo dominante de problema.',

    autonomy:
      'Define diagnóstico clínico. Prescreve protocolos. Realiza todos os procedimentos especializados (tricoscopia, dermatoscopia, fototricografia, procedimentos intradermo). Autoriza procedimentos cirúrgicos de referência. Toma todas as decisões clínicas do protocolo. Autonomia de R$ 1000/mês para desenvolvimento clínico e resolução de problemas.',

    description:
      '18 anos em emergências hospitalares construíram uma perspectiva de cuidado diferente. Desde 2022, dedica-se exclusivamente a tricologia e saúde integrativa. Lê estruturadamente. Planeja protocolos individualizados. Acompanha pessoalmente a evolução de cada paciente. Recusa casos onde não consegue oferecer protocolo estruturado.',

    tags: ['Tricologia avançada', 'Metabolismo', 'Diagnóstico capilar', 'Saúde sistêmica', '18 anos em saúde'],
    registration: 'COREN-RS 395164',

    education: {
      graduation: 'Enfermagem (Universidade Federal do Rio Grande do Sul)',
      postgrad: [
        'Especialização em Tricologia (TODO_INSTITUIÇÃO)',
        'Certificação em Terapia Capilar Avançada',
      ],
      continuingEducation: [
        'Participação anual em congressos internacionais de tricologia',
        'Educação continuada em genômica capilar',
      ],
    },

    specialties: [
      'Tricologia clínica avançada',
      'Diagnóstico diferencial capilar',
      'Inflamações do couro cabeludo',
      'Acompanhamento pós-transplante',
      'Genética capilar (TrichoTest)',
      'Saúde integrativa',
    ],

    mainComplaints: [
      'Queda capilar feminina (pós-parto, menopausa, ciclo)',
      'Alopecia androgenética',
      'Eflúvio telógeno crônico',
      'Alopecia areata',
      'Dermatite seborreica',
      'Pós-transplante capilar',
    ],

    clinicalFocus:
      'Diagnóstico estruturado antes de qualquer tratamento. Protocolo multimodal respeitando mecanismo dominante.',
  },

  {
    slug: 'adriana-melo',
    name: 'Adriana Melo',
    title: 'Técnica de Enfermagem',
    role: 'Coordenadora de procedimentos clínicos',
    unit: 'tricologia',
    photo: '/team/adriana-melo.webp',
    bg: '#2A2A2A',

    philosophy:
      'Procedimento bem executado é metade do resultado. A outra metade é técnica e preparação. Acredito na esterilidade rigorosa, no timing de aplicação e na leitura do paciente durante a execução.',

    autonomy:
      'Define timing de aplicação dentro do protocolo. Realiza todos os procedimentos intradermo (mesoterapia capilar, aplicações de bioestimuladores). Pode ajustar concentração/volume conforme resposta do paciente. Autoriza pausas ou modificações técnicas em tempo real. Coordena preparo de pacientes e sequenciamento de procedimentos. Autonomia de R$ 500/mês para inovação técnica.',

    description:
      'Adriana conduz os procedimentos clínicos com rigor técnico e inteligência integrativa. Não apenas executa protocolos—lê a resposta do paciente em tempo real e comunica isso para ajustes. Responsável pela continuidade técnica e pela sensação de segurança que cada paciente sente durante o procedimento.',

    tags: ['Procedimentos', 'Mesoterapia capilar', 'Bioestimuladores', 'Esterilidade rigorosa', 'Aplicações controladas'],
    registration: 'TODO_COREN_ADRIANA',

    education: {
      graduation: 'Técnico de Enfermagem (TODO_ESCOLA)',
      postgrad: [
        'Capacitação em procedimentos tricológicos',
        'Certificação em esterilidade e biossegurança clínica',
      ],
      continuingEducation: [
        'Treinamento em novos bioestimuladores e tecnologias',
      ],
    },

    specialties: [
      'Procedimentos intradermo tricológicos',
      'Mesoterapia capilar',
      'Aplicação de bioestimuladores',
      'Fototerapia capilar (LED, laser)',
      'Preparo e técnica asséptica',
    ],

    mainComplaints: [
      'Execução de protocolos intradermo',
      'Acompanhamento técnico em procedimentos',
      'Dúvidas sobre aplicação ou dosagem',
    ],

    clinicalFocus: 'Execução precisa e acolhimento durante procedimento.',
  },

  {
    slug: 'equipe-tecnica',
    name: 'Equipe Técnica',
    title: 'Técnicas de Enfermagem',
    role: 'Suporte clínico e acolhimento',
    unit: 'tricologia',
    bg: '#1A1A1A',

    philosophy:
      'A qualidade do resultado depende não apenas da clínica, mas da sensação de segurança, respeito e cuidado que o paciente sente. Somos a primeira mão que o paciente sente e a última que o acompanha.',

    autonomy:
      'Realizam preparo de pacientes. Monitoram durante procedimentos. Executam protocolos de pós-procedimento. Podem fazer ajustes menores conforme conforto do paciente. Coordenam agendamentos e continuidade. Autoridade para pausar procedimento se houver dúvida.',

    description:
      'Duas técnicas de enfermagem são a base invisível de cada sucesso. Além de executar protocolos com precisão, trazem calor humano para cada encontro. Preparação rigorosa. Execução precisa. Acompanhamento cuidadoso pós-procedimento. Comprometidas com o padrão clínico da casa.',

    tags: ['Suporte técnico', 'Acolhimento', 'Preparo e esterilização', 'Procedimentos clínicos', 'Continuidade de cuidado'],

    specialties: [
      'Preparo de pacientes',
      'Esterilização e biossegurança',
      'Acompanhamento de procedimentos',
      'Cuidado pós-procedural',
      'Acolhimento e comunicação',
    ],

    clinicalFocus: 'Execução com precisão, acolhimento com inteligência.',
  },
];

export function getProfessionalBySlug(slug: string) {
  return professionals.find(p => p.slug === slug);
}

export function getProfessionalsByUnit(unit: string) {
  return professionals.filter(p => p.unit === unit);
}
