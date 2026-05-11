/**
 * SITE — Dra. Danusa Pires · Tricologia Avançada
 * Sistema: Obsidian Clinical
 * Posicionamento: Tratamento capilar baseado em diagnóstico, não tentativa e erro.
 */

export const SITE = {
  name: 'Dra. Danusa Pires',
  shortName: 'Dra. Danusa Pires',
  brandSpecialty: 'Tricologia Avançada',
  tagline: 'Tratamento capilar baseado em diagnóstico, não tentativa e erro.',
  url: 'https://dradanusa.com.br',
  phone: '+55 51 98016-4433',
  email: 'TODO_EMAIL',
  instagram: '@dradanusa',
  whatsapp: '5551980164433',
  address: {
    street: 'Rua Mariante',
    number: '180',
    complement: '9° andar — Edifício Moinhos 180',
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
  responsavelTecnico: 'Dra. Danusa Pires',
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
  'Olá Dra. Danusa, vim pelo site e gostaria de agendar uma avaliação capilar.'
)}`;

/**
 * Método DPC — diferencial proprietário da clínica.
 */
export const METHOD = {
  name: 'Método DPC',
  steps: [
    {
      letter: 'D',
      title: 'Diagnóstico',
      desc: 'Leitura clínica e capilar para identificar padrão, causa e contexto. Avaliação do ciclo folicular, inflamação, eixo hormonal e histórico individual.',
    },
    {
      letter: 'P',
      title: 'Protocolo',
      desc: 'Combinação individualizada de condutas conforme mecanismo dominante. Definição da janela terapêutica, frequência e marcadores de resposta.',
    },
    {
      letter: 'C',
      title: 'Controle',
      desc: 'Acompanhamento, ajuste e avaliação evolutiva. Reavaliação programada, ajuste de conduta conforme resposta individual e padrão fisiológico.',
    },
  ],
};

/**
 * SERVIÇOS — organizados por lógica clínica, não estética.
 * (Estrutura mantida no nome PILLARS por compatibilidade com componentes ecooa.)
 */
export const PILLARS = [
  {
    slug: 'diagnostico-capilar',
    name: 'Diagnóstico capilar avançado',
    description: 'Avaliação estruturada do ciclo folicular, inflamação, eixo hormonal e histórico individual.',
    href: '/servicos/diagnostico-capilar',
  },
  {
    slug: 'queda-feminina',
    name: 'Queda capilar feminina',
    description: 'Investigação dos padrões femininos de queda — eflúvio, alopecia androgenética, fases hormonais.',
    href: '/servicos/queda-feminina',
  },
  {
    slug: 'queda-masculina',
    name: 'Queda capilar masculina',
    description: 'Avaliação clínica da alopecia androgenética masculina e protocolos individualizados.',
    href: '/servicos/queda-masculina',
  },
  {
    slug: 'inflamacoes-couro',
    name: 'Inflamações do couro cabeludo',
    description: 'Leitura de processos inflamatórios — dermatite seborreica, psoríase, foliculite e correlatos.',
    href: '/servicos/inflamacoes-couro',
  },
  {
    slug: 'pos-transplante',
    name: 'Acompanhamento pós-transplante',
    description: 'Manutenção técnica do resultado da cirurgia capilar — preservação e potencialização a longo prazo.',
    href: '/servicos/pos-transplante',
  },
  {
    slug: 'fortalecimento',
    name: 'Fortalecimento e densidade',
    description: 'Protocolos de melhora de densidade aparente e fortalecimento da haste capilar.',
    href: '/servicos/fortalecimento',
  },
  {
    slug: 'soroterapia',
    name: 'Soroterapia individualizada',
    description: 'Formulação de soroterapia conforme avaliação clínica. Sistema soro-match orienta os ativos pertinentes ao quadro.',
    href: '/soroterapia',
  },
];

export const NAV_LINKS = [
  { label: 'inicio', href: '/' },
  { label: 'método', href: '/#metodo' },
  { label: 'serviços', href: '/#servicos' },
  { label: 'soroterapia', href: '/soroterapia' },
  { label: 'terapias holísticas', href: '/terapias-holisticas' },
  { label: 'sobre', href: '/sobre' },
  { label: 'profissionais', href: '/profissionais' },
  { label: 'contato', href: '/contato' },
];

/**
 * Serviços principais — lista clínica para schema MedicalSpecialty
 */
export const SERVICES_FLAT = PILLARS.map(p => p.name);
