/**
 * Conteúdo detalhado dos 6 serviços clínicos.
 * Estrutura obrigatória: problema · mecanismo · intervenção · resultado possível.
 * Brandbook proíbe promessas absolutas, usar "resposta variável conforme padrão fisiológico individual".
 */

export interface ServiceContent {
  slug: string;
  hero: {
    eyebrow: string;
    title: string;
    emphasis: string;
    lead: string;
    image: string; // ex: 'clinical/scalp-female-closeup'
  };
  problem: string;
  mechanism: string;
  intervention: string[];
  outcome: string;
  indications: string[];
  faqs: { q: string; a: string }[];
}

export const services: Record<string, ServiceContent> = {
  'diagnostico-capilar': {
    slug: 'diagnostico-capilar',
    hero: {
      eyebrow: 'serviço · diagnóstico',
      title: 'Diagnóstico capilar avançado.',
      emphasis: 'Diagnóstico',
      lead: 'Avaliação estruturada do ciclo folicular, do couro cabeludo e do contexto clínico individual. Mapa que antecede e orienta o protocolo.',
      image: 'clinical/trichoscopy-exam',
    },
    problem:
      'Quadros capilares, queda, afinamento, alterações do couro cabeludo, são rotineiramente tratados de forma genérica, sem investigação adequada da causa. Resultado: ciclos longos de tentativa e erro, com pouca evolução.',
    mechanism:
      'O ciclo folicular tem fases reguladas por fatores hormonais, vasculares, inflamatórios e nutricionais. Quando algo desloca a proporção entre fases, surgem sintomas, queda, miniaturização, descamação. A leitura instrumental do couro cabeludo identifica densidade folicular, padrão de afinamento, sinais inflamatórios, condição da haste capilar e presença de processos secundários.',
    intervention: [
      'Anamnese estruturada, histórico, evolução, hábitos, eventos gatilho, medicamentos.',
      'Leitura visual e instrumental do couro cabeludo e dos fios.',
      'Solicitação de exames laboratoriais quando há suspeita de causa sistêmica (tireoide, ferro, vitamina D, perfil hormonal).',
      'Encaminhamento integrado a outros profissionais quando indicado.',
      'Devolutiva clínica com leitura, hipótese diagnóstica e plano sequencial.',
    ],
    outcome:
      'O paciente sai com o mapa do próprio quadro: hipótese, fatores envolvidos, plano de intervenção e marcadores de reavaliação. Resposta variável conforme padrão fisiológico individual.',
    indications: [
      'Quedas persistentes acima de 8 a 12 semanas',
      'Afinamento progressivo dos fios',
      'Histórico familiar de alopecia',
      'Pré-protocolo capilar de qualquer natureza',
      'Casos sem evolução em tratamentos anteriores',
    ],
    faqs: [
      {
        q: 'O que é avaliado na primeira consulta?',
        a: 'Histórico clínico completo, exame visual e instrumental do couro cabeludo e dos fios. Quando indicado, solicitação de exames laboratoriais. A primeira consulta termina com hipótese diagnóstica e direcionamento.',
      },
      {
        q: 'Preciso fazer exames antes da consulta?',
        a: 'Não. Exames podem ser solicitados a partir da primeira leitura, conforme o quadro pedir. Levar exames recentes que você já tenha pode adiantar parte da investigação.',
      },
    ],
  },

  'queda-feminina': {
    slug: 'queda-feminina',
    hero: {
      eyebrow: 'serviço · queda capilar',
      title: 'Queda capilar feminina.',
      emphasis: 'feminina',
      lead: 'Investigação dos padrões femininos de queda, eflúvio agudo e crônico, alopecia androgenética feminina, fases hormonais. Conduta conforme mecanismo dominante.',
      image: 'clinical/scalp-female-closeup',
    },
    problem:
      'Mulheres em diferentes fases, pós-parto, menopausa, sob estresse crônico, em uso de medicamentos específicos, apresentam padrões distintos de queda capilar. Tratar todos os casos igual desperdiça tempo terapêutico.',
    mechanism:
      'A queda feminina pode ser difusa (eflúvio, gatilhos sistêmicos), padronizada (alopecia androgenética com afinamento na linha central) ou cicatricial (mais raro, exige diagnóstico diferencial). Investigação hormonal, ferro sérico, ferritina, função tireoidiana e vitamina D são rotina nessa avaliação.',
    intervention: [
      'Avaliação clínica direcionada ao padrão feminino.',
      'Solicitação de exames hormonais e nutricionais conforme indicação.',
      'Plano que combina cuidados clínicos, indicações domiciliares e, quando pertinente, integração com ginecologista ou endocrinologista.',
      'Acompanhamento programado com marcadores de resposta.',
    ],
    outcome:
      'Estabilização ou redução da queda em ciclos consistentes. Sinais de melhora variáveis conforme tipo de queda e tempo de evolução. Conduta ajustada na reavaliação programada.',
    indications: [
      'Queda pós-parto persistente',
      'Queda em fase de menopausa ou perimenopausa',
      'Afinamento progressivo na linha central',
      'Eflúvio crônico com mais de 6 meses',
      'Quadros com componente hormonal suspeitado',
    ],
    faqs: [
      {
        q: 'A queda no pós-parto é normal?',
        a: 'É comum entre 2 e 4 meses pós-parto, geralmente autolimitada em 6 a 12 meses. Quando o quadro persiste além desse período ou é acompanhado de afinamento, merece investigação.',
      },
      {
        q: 'Anticoncepcional pode causar queda?',
        a: 'Em parte dos casos sim, especialmente em troca ou suspensão. A leitura clínica avalia o vínculo e orienta conjuntamente com o ginecologista quando necessário.',
      },
    ],
  },

  'queda-masculina': {
    slug: 'queda-masculina',
    hero: {
      eyebrow: 'serviço · queda capilar',
      title: 'Queda capilar masculina.',
      emphasis: 'masculina',
      lead: 'Avaliação clínica da alopecia androgenética masculina e das suas variantes. Protocolo individualizado conforme fase, evolução e expectativa do paciente.',
      image: 'clinical/scalp-male-closeup',
    },
    problem:
      'A alopecia androgenética masculina segue um padrão visualmente reconhecido, mas a evolução é variável entre indivíduos. Conduta sem leitura clínica subestima a velocidade do quadro ou supervaloriza intervenções com pouco retorno.',
    mechanism:
      'Sensibilidade folicular à di-hidrotestosterona (DHT) leva à miniaturização progressiva dos fios em áreas geneticamente determinadas, entradas, coroa, vértice. A leitura instrumental quantifica miniaturização e identifica fase do quadro.',
    intervention: [
      'Leitura clínica do padrão e velocidade de evolução.',
      'Plano combinando cuidados clínicos e indicações domiciliares.',
      'Quando indicado, articulação com manejo médico complementar.',
      'Acompanhamento programado com fotografia padronizada.',
    ],
    outcome:
      'Estabilização do quadro em ciclos consistentes. Densidade aparente preservada quando a intervenção começa nas fases iniciais. Resposta variável conforme padrão fisiológico individual.',
    indications: [
      'Recuo das entradas e linha frontal',
      'Afinamento na coroa ou vértice',
      'Histórico familiar de calvície',
      'Estágios iniciais com janela de intervenção',
      'Acompanhamento pós-procedimento capilar',
    ],
    faqs: [
      {
        q: 'A partir de que idade vale começar?',
        a: 'A janela útil de intervenção é nas fases iniciais, quando o folículo ainda preserva atividade. Identificar precocemente o padrão é mais relevante do que a idade isolada.',
      },
      {
        q: 'Preciso usar produto pra sempre?',
        a: 'A continuidade depende do mecanismo do quadro e da resposta individual. A reavaliação programada define quando ajustar, manter ou pausar conduta.',
      },
    ],
  },

  'inflamacoes-couro': {
    slug: 'inflamacoes-couro',
    hero: {
      eyebrow: 'serviço · couro cabeludo',
      title: 'Inflamações do couro cabeludo.',
      emphasis: 'Inflamações',
      lead: 'Leitura clínica de processos inflamatórios, dermatite seborreica, foliculite, descamações, prurido. Quando a inflamação alimenta a queda, tratar a causa precede o resto.',
      image: 'clinical/serum-application',
    },
    problem:
      'Inflamação do couro cabeludo é causa frequente de queda secundária e barreira à eficácia de qualquer protocolo capilar. Tratar a queda sem tratar a inflamação é insistir contra o terreno.',
    mechanism:
      'Processos inflamatórios, dermatite seborreica, foliculite por Malassezia, psoríase, dermatites de contato, alteram a função da barreira do couro cabeludo, modificam o microbioma local e podem comprometer a fase de crescimento do folículo. Leitura clínica identifica padrão e gravidade.',
    intervention: [
      'Investigação clínica com diferenciação dos padrões inflamatórios.',
      'Conduta dirigida ao processo dominante.',
      'Cuidados domiciliares específicos para barreira e microbioma.',
      'Reavaliação programada para confirmar resolução antes de avançar a outras camadas do plano.',
    ],
    outcome:
      'Redução da inflamação em ciclos curtos quando o agente é identificado. Estabilidade da barreira como condição para qualquer protocolo capilar subsequente.',
    indications: [
      'Caspa persistente ou descamação intensa',
      'Prurido crônico do couro cabeludo',
      'Vermelhidão e oleosidade descontroladas',
      'Foliculite recorrente',
      'Quadros que não respondem a tratamentos capilares prévios',
    ],
    faqs: [
      {
        q: 'Caspa é só estética?',
        a: 'Não. Quando persistente, indica processo inflamatório do couro cabeludo que pode comprometer o ciclo folicular e alimentar queda. Merece investigação clínica.',
      },
    ],
  },

  'pos-transplante': {
    slug: 'pos-transplante',
    hero: {
      eyebrow: 'serviço · pós-cirurgia',
      title: 'Acompanhamento pós-transplante.',
      emphasis: 'pós-transplante',
      lead: 'Manutenção técnica do resultado do implante capilar. Cuidados ajustados à fase pós-operatória e ao plano de longo prazo, conforme orientação do cirurgião.',
      image: 'clinical/procedure-mesotherapy',
    },
    problem:
      'Implante capilar é investimento. Sem cuidado pós-operatório técnico, parte do resultado pode ser perdida no longo prazo, fios doadores comportam-se como na origem, e fatores adjacentes precisam de gestão contínua.',
    mechanism:
      'Os fios transplantados mantêm a programação genética da área doadora, geralmente preservados. Os fios circundantes na área receptora seguem o padrão original, e podem continuar miniaturizando. O cuidado de manutenção atua sobre essa segunda camada.',
    intervention: [
      'Avaliação pós-operatória integrada com a orientação do cirurgião.',
      'Cuidados clínicos adequados à fase (cicatrização, consolidação, manutenção).',
      'Indicações domiciliares específicas.',
      'Reavaliações programadas com fotografia padronizada.',
    ],
    outcome:
      'Preservação do resultado da cirurgia capilar a médio e longo prazo. Estabilização da densidade total da área receptora. Conduta ajustada conforme evolução individual.',
    indications: [
      'Pós-operatório recente (FUE, FUT, DHI)',
      'Pacientes em fase de consolidação (3 a 12 meses)',
      'Manutenção de longo prazo (após 12 meses)',
      'Casos com afinamento dos fios circundantes',
    ],
    faqs: [
      {
        q: 'Quando posso iniciar o acompanhamento após o transplante?',
        a: 'Depende da técnica e da orientação do cirurgião. A primeira avaliação aqui já alinha o cronograma adequado à fase em que você está.',
      },
      {
        q: 'O acompanhamento substitui a equipe que fez a cirurgia?',
        a: 'Não. É cuidado complementar, focado em preservar o resultado obtido e gerir os fios circundantes. Trabalhamos em diálogo com a equipe cirúrgica.',
      },
    ],
  },

  'fortalecimento': {
    slug: 'fortalecimento',
    hero: {
      eyebrow: 'serviço · densidade capilar',
      title: 'Fortalecimento e densidade.',
      emphasis: 'densidade',
      lead: 'Protocolos para melhora da qualidade da haste capilar e da densidade aparente. Indicado quando o quadro não é de queda ativa, mas de afinamento e fragilidade.',
      image: 'clinical/scalp-female-closeup',
    },
    problem:
      'Nem todo paciente capilar tem queda como queixa principal. Afinamento progressivo, perda de brilho, fios mais finos e quebradiços geram percepção de "menos cabelo" sem queda excessiva visível.',
    mechanism:
      'A qualidade da haste capilar depende de fatores foliculares, nutricionais, hormonais e do próprio cuidado domiciliar. Intervir simultaneamente em diferentes camadas costuma render melhora visível na densidade aparente e na resistência mecânica do fio.',
    intervention: [
      'Leitura clínica focada em qualidade do fio, não só em queda.',
      'Plano com cuidados clínicos e domiciliares dirigidos ao fortalecimento.',
      'Quando indicado, suplementação alinhada com nutricionista.',
      'Reavaliação programada com fotografia padronizada.',
    ],
    outcome:
      'Melhora gradual da qualidade dos fios novos formados ao longo dos ciclos foliculares. Tempo de resposta variável, geralmente entre 3 e 6 meses para sinais consistentes.',
    indications: [
      'Afinamento sem queda ativa',
      'Fios quebradiços ou pouco volume',
      'Pós-procedimentos capilares químicos repetidos',
      'Manutenção em pacientes estáveis',
    ],
    faqs: [
      {
        q: 'Vou ver diferença em quanto tempo?',
        a: 'A qualidade do fio se modifica ao longo do ciclo de crescimento. Sinais consistentes costumam aparecer entre 3 e 6 meses, com variação individual.',
      },
    ],
  },
};
