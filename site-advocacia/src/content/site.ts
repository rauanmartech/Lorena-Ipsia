import practiceWriting from '../assets/practice-writing.png';
import practiceColumns from '../assets/practice-columns.png';
import practiceJustice from '../assets/practice-justice.png';
import aboutConsultation from '../assets/about-consultation-v1.png';
import processAttorney from '../assets/process-advogada-v1.png';

/**
 * Conteúdo centralizado da landing page.
 * Nome, logo e canais de contato foram fornecidos pelo usuário.
 * Valide os demais textos e dados profissionais antes da publicação.
 */
export const site = {
  brand: 'Lorena Ípsia Advocacia',
  navigation: [
    { label: 'Atuação', href: '#atuacao' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Atendimento', href: '#atendimento' },
  ],
  hero: {
    eyebrow: 'ATUAÇÃO JURÍDICA',
    titleStart: 'Direito com',
    titleMiddle: 'clareza e',
    titleAccent: 'confiança.',
    description:
      'Orientação jurídica construída com atenção à sua história e às necessidades de cada etapa.',
  },
  practice: {
    eyebrow: '01 / ÁREAS DE ATUAÇÃO',
    title: 'Atuação com clareza em cada etapa.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero, sed cursus ante dapibus diam.',
    areas: [
      {
        title: 'Consultoria jurídica',
        description:
          'Análise de documentos e orientação jurídica para apoiar decisões com clareza e atenção a cada situação.',
        image: practiceWriting,
        imageAlt: 'Mãos escrevendo em documento sobre uma mesa de escritório.',
        icon: 'document',
      },
      {
        title: 'Assessoria preventiva',
        description:
          'Revisão de contratos e procedimentos para identificar riscos e organizar medidas preventivas.',
        image: practiceColumns,
        imageAlt: 'Detalhe das colunas de mármore do Partenon em Atenas.',
        icon: 'columns',
      },
      {
        title: 'Defesa de direitos',
        description:
          'Representação em demandas judiciais e administrativas, com análise individualizada de fatos e documentos.',
        image: practiceJustice,
        imageAlt: 'Estatueta dourada da Justiça com balança em destaque.',
        icon: 'justice',
      },
    ],
  },
  about: {
    eyebrow: '02 / SOBRE O ESCRITÓRIO',
    image: aboutConsultation,
    imageAlt: 'Advogada conversando com uma cliente durante a análise de um documento.',
    statement: 'A confiança começa quando cada história é ouvida com atenção.',
    titleStart: 'Compromisso com',
    titleAccent: 'cada trajetória.',
    description:
      'Uma atuação jurídica que começa pela escuta, valoriza a clareza e considera as particularidades de cada situação.',
    features: [
      {
        title: 'Escuta atenta',
        description: 'Compreender o contexto é o primeiro passo para orientar com responsabilidade.',
        icon: 'listen',
      },
      {
        title: 'Análise cuidadosa',
        description: 'Fatos e documentos examinados com atenção às possibilidades de cada caso.',
        icon: 'analysis',
      },
      {
        title: 'Comunicação clara',
        description: 'Informações objetivas para acompanhar as etapas e tomar decisões conscientes.',
        icon: 'communication',
      },
      {
        title: 'Ética e discrição',
        description: 'Uma condução respeitosa, comprometida com o sigilo profissional.',
        icon: 'ethics',
      },
    ],
  },
  process: {
    eyebrow: '03 / COMO FUNCIONA',
    titleStart: 'Cada passo,',
    titleAccent: 'com clareza.',
    description:
      'Uma conversa inicial ajuda a compreender sua situação. A partir dos fatos e documentos, são apresentados os caminhos que podem ser avaliados.',
    image: processAttorney,
    imageAlt: 'Retrato da advogada em traje azul-marinho, em um ambiente de trabalho com luz natural.',
    steps: [
      {
        title: 'Primeiro contato',
        description: 'Conte o que aconteceu e quais dúvidas precisam ser esclarecidas.',
        icon: 'conversation',
      },
      {
        title: 'Análise inicial',
        description: 'O contexto e os documentos disponíveis são examinados com atenção.',
        icon: 'analysis',
      },
      {
        title: 'Orientação',
        description: 'Você conhece as possibilidades e combina os próximos passos do atendimento.',
        icon: 'guidance',
      },
    ],
  },
  contact: {
    eyebrow: '04 / CONTATO',
    titleStart: 'Sua história merece',
    titleAccent: 'ser ouvida.',
    description:
      'Entre em contato para compartilhar sua situação. Uma conversa inicial ajuda a compreender suas dúvidas e a avaliar como o atendimento pode seguir.',
    panelTitle: 'Fale com o escritório',
    channels: [
      { label: 'E-mail', value: 'lorenaípsia@gmail.com' },
      { label: 'Telefone', value: '(11) 99999-9999' },
      { label: 'Localização', value: 'São Paulo - SP • Atendimentos Online' },
    ],
  },
  footer: {
    description: 'Orientação jurídica com escuta, clareza e responsabilidade.',
  },
} as const;
