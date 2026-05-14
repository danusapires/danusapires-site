/**
 * SITE, Danusa Pires · Tricologia & Saúde Integrativa
 * Sistema: Obsidian Clinical · Brandbook v4 · Maio 2026
 * Manifesto: "O cabelo é reflexo do nosso organismo."
 */

export const SITE = {
  name: 'Danusa Pires',
  shortName: 'Danusa Pires',
  brandSpecialty: 'Tricologia & Saúde Integrativa',
  tagline: 'O cabelo é reflexo do nosso organismo.',
  positioning: 'Tratamento capilar baseado em diagnóstico sistêmico, não tentativa e erro.',
  url: 'https://www.danusapires.com.br',
  phone: '+55 51 98016-4433',
  email: 'TODO_EMAIL_COMERCIAL',
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
  cnpj: '47.698.087/0001-86',
  razaoSocial: 'Mincorp Saúde e Estética Ltda.',
  nomeFantasia: 'Danusa Pires Saúde e Estética',
  responsavelTecnico: 'Danusa Pires',
  registroProfissional: 'COREN-RS 395164',
  gtmId: 'TODO_GTM_ID',
  metaPixelId: '1326953349366151',
  gasUrl: 'TODO_GOOGLE_APPS_SCRIPT_URL',
  mapsUrl: 'https://share.google/FVoz7OZsHOhYbMvMr',
  foundedYear: 2022,
  employeeCount: 3,
  onlineCare: 'Avaliação online para casos selecionados em todo o Brasil',
};

export const WA_BASE = `https://wa.me/${SITE.whatsapp}`;
export const WA_DEFAULT = `${WA_BASE}?text=${encodeURIComponent(
  'Olá Danusa Pires, vim pelo site e gostaria de agendar uma avaliação capilar.'
)}`;

/**
 * MANIFESTO, frase fundadora da marca.
 * Premissa: a tricologia praticada aqui não isola o fio do sistema.
 * Investiga hormônios, ferritina, vitamina D, microbioma intestinal,
 * sono, estresse e história clínica antes de propor qualquer protocolo.
 */
export const MANIFESTO = 'O cabelo é reflexo do nosso organismo.';

/**
 * Método ESPELHO, assinatura clínica proprietária (substitui o antigo Método DPC).
 * Tagline: "O cabelo reflete o organismo. Lemos o reflexo antes de tratar."
 */
export const METHOD = {
  name: 'Método ESPELHO',
  tagline: 'Lemos o reflexo antes de tratar.',
  steps: [
    {
      letter: 'L',
      title: 'Leitura',
      desc: 'Anamnese de 60 minutos, tricoscópio digital, exames de tração, dermatoscópio óptico, fototricograma e fotografia macro padronizada. Solicitação de exames laboratoriais quando há suspeita de causa sistêmica.',
    },
    {
      letter: 'R',
      title: 'Reflexo',
      desc: 'Devolutiva clínica: mostramos o que o cabelo está refletindo, qual deficiência, qual eixo hormonal, qual carência. Quando justificado, avaliação do TrichoTest (genética capilar).',
    },
    {
      letter: 'P',
      title: 'Protocolo',
      desc: 'Plano individualizado por mecanismo: ativos tópicos, fototerapia, intradermo, exossomas, peptídeos, MMP quando indicado, smart.soro sistêmica.',
    },
    {
      letter: 'R',
      title: 'Refração',
      desc: 'Reavaliação no terceiro mês com nova fototricografia e comparação fotográfica. Ajuste de protocolo e definição do plano de manutenção.',
    },
  ],
};

/**
 * SERVIÇOS, 7 linhas clínicas conforme Brandbook v4.
 * (Estrutura mantida no nome PILLARS por compatibilidade com componentes.)
 *
 * Nota de pendência: TrichoTest e Alopecia androgenética ainda não têm
 * página de conteúdo dedicada em services-content.ts. Até o conteúdo
 * existir, os hrefs apontam para /agendamento.
 */
export const PILLARS = [
  {
    slug: 'queda-feminina',
    name: 'Queda capilar feminina',
    description: 'Investigação dos padrões femininos de queda, eflúvio, alopecia androgenética feminina, fases hormonais (pós-parto, menopausa, perimenopausa).',
    href: '/servicos/queda-feminina',
  },
  {
    slug: 'alopecia-androgenetica',
    name: 'Alopecia androgenética',
    description: 'Avaliação clínica do padrão androgenético em homens e mulheres. Conduta clínica isolada ou integrada a pré e pós-cirúrgico.',
    href: '/servicos/queda-masculina',
  },
  {
    slug: 'pos-transplante',
    name: 'Pós-transplante',
    description: 'Manutenção técnica do resultado da cirurgia capilar entre 60 e 90 dias pós-operatório e continuidade no longo prazo.',
    href: '/servicos/pos-transplante',
  },
  {
    slug: 'fortalecimento',
    name: 'Fortalecimento e densidade',
    description: 'Protocolos de qualidade da haste e densidade aparente para casos sem queda ativa, com afinamento ou fragilidade.',
    href: '/servicos/fortalecimento',
  },
  {
    slug: 'trichotest',
    name: 'TrichoTest, genética capilar',
    description: 'Teste genético capilar para casos avançados. Orienta protocolo premium individualizado por marcadores moleculares.',
    href: '/agendamento',
  },
  {
    slug: 'soroterapia',
    name: 'Soroterapia (smart.soro)',
    description: 'Suporte sistêmico sob prescrição clínica. Base fixa: Vitamina C + Trio Metilador + Coenzima Q10. Ativos selecionados conforme avaliação.',
    href: '/soroterapia',
  },
  {
    slug: 'diagnostico',
    name: 'Diagnóstico capilar avançado',
    description: 'Avaliação estruturada do ciclo folicular, inflamação, eixo hormonal e histórico individual. Indicado também como segunda opinião.',
    href: '/servicos/diagnostico-capilar',
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
