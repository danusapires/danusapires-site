/**
 * SITE · Danusa Pires · Tricologia & Saúde Integrativa
 * Sistema: Obsidian Clinical
 * Posicionamento: o cabelo é reflexo do organismo. Lemos o reflexo antes de tratar.
 */

export const SITE = {
  name: 'Danusa Pires',
  shortName: 'Danusa Pires',
  brandSpecialty: 'Tricologia & Saúde Integrativa',
  tagline: 'O cabelo é reflexo do organismo. Lemos o reflexo antes de tratar.',
  url: 'https://dradanusa.com.br',
  phone: '+55 51 98016-4433',
  email: 'TODO_EMAIL',
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
  employeeCount: 4,
  onlineCare: 'Avaliação online para casos selecionados em todo o Brasil',
};

export const WA_BASE = `https://wa.me/${SITE.whatsapp}`;
export const WA_DEFAULT = `${WA_BASE}?text=${encodeURIComponent(
  'Olá Danusa, vim pelo site e gostaria de agendar uma avaliação capilar.'
)}`;

/**
 * Método ESPELHO. Assinatura clínica proprietária.
 * Tagline: "O cabelo reflete o organismo. Lemos o reflexo antes de tratar."
 */
export const METHOD = {
  name: 'Método ESPELHO',
  steps: [
    {
      letter: '01',
      title: 'Leitura',
      desc: 'Anamnese clínica de 60 minutos, tricoscopia digital, exames de tração, dermatoscopia, fototricograma e solicitação de exames laboratoriais quando indicado.',
    },
    {
      letter: '02',
      title: 'Reflexo',
      desc: 'Devolutiva clínica. Mostramos o que o cabelo reflete sobre eixo hormonal, ferritina, vitamina D, sono, microbioma, estresse e nutrição. Avaliação do TrichoTest quando justificado.',
    },
    {
      letter: '03',
      title: 'Protocolo',
      desc: 'Plano individualizado por mecanismo dominante. Ativos tópicos, fototerapia, intradermo, exossomas, peptídeos, MMP quando indicado e smart.soro sistêmica.',
    },
    {
      letter: '04',
      title: 'Refração',
      desc: 'Reavaliação no terceiro mês com nova fototricografia e comparação fotográfica. Ajuste de protocolo e plano de manutenção.',
    },
  ],
};

/**
 * SERVIÇOS, organizados por lógica clínica. 7 linhas conforme BRAND.md v4.
 */
export const PILLARS = [
  {
    slug: 'queda-feminina',
    name: 'Queda capilar feminina',
    description: 'Avaliação dos padrões femininos: pós-parto, menopausa, deficiências, estresse crônico, fases hormonais.',
    href: '/#servicos',
  },
  {
    slug: 'alopecia-androgenetica',
    name: 'Alopecia androgenética',
    description: 'Conduta clínica para homens e mulheres, complementar pré e pós cirurgia capilar.',
    href: '/#servicos',
  },
  {
    slug: 'pos-transplante',
    name: 'Pós-transplante',
    description: 'Manutenção técnica do resultado da cirurgia capilar entre 60 e 90 dias do pós-operatório.',
    href: '/#servicos',
  },
  {
    slug: 'fortalecimento',
    name: 'Fortalecimento e densidade',
    description: 'Protocolos para quem não tem queda ativa e busca densidade, brilho e força da haste.',
    href: '/#servicos',
  },
  {
    slug: 'trichotest',
    name: 'TrichoTest',
    description: 'Genética capilar aplicada. Protocolo premium individualizado por DNA quando justificado.',
    href: '/#servicos',
  },
  {
    slug: 'soroterapia',
    name: 'Soroterapia (smart.soro)',
    description: 'Suporte sistêmico sob prescrição clínica. Vitamina C, trio metilador, coenzima Q10 e ativos individualizados.',
    href: '/soroterapia',
  },
  {
    slug: 'diagnostico',
    name: 'Diagnóstico capilar avançado',
    description: 'Segunda opinião e leitura clínica estruturada para outros profissionais.',
    href: '/#servicos',
  },
];

export const NAV_LINKS = [
  { label: 'home', href: '/' },
  { label: 'sobre', href: '/sobre' },
  { label: 'método ESPELHO', href: '/#metodo' },
  { label: 'serviços', href: '/#servicos' },
  { label: 'soroterapia', href: '/soroterapia' },
  { label: 'terapias integrativas', href: '/terapias-integrativas' },
  { label: 'blog', href: '/blog' },
  { label: 'contato', href: '/contato' },
];

/**
 * Serviços principais, lista clínica para schema MedicalSpecialty
 */
export const SERVICES_FLAT = PILLARS.map(p => p.name);
