export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  stack: string[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
}

export interface Highlight {
  title: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface LangContent {
  ui: {
    navLinks: NavLink[];
    navCta: string;
    heroPrimaryCta: string;
    heroSecondaryCta: string;
    aboutHeadline: string;
    aboutHighlightsTitle: string;
    experienceTitle: string;
    skillsTitle: string;
    educationTitle: string;
    contactTitle: string;
    contactSubtitle: string;
    footerTagline: string;
    langToggleLabel: string;
  };
  profile: {
    name: string;
    role: string;
    tagline: string;
    email: string;
    phone: string;
    linkedin: string;
    summary: string;
  };
  stats: { value: string; label: string }[];
  highlights: Highlight[];
  experiences: Experience[];
  skillGroups: SkillGroup[];
  education: EducationItem[];
}

const YEARS_OF_EXPERIENCE = 9;

export const CONTENT: Record<'pt' | 'en', LangContent> = {
  pt: {
    ui: {
      navLinks: [
        { label: 'Perfil', href: '#sobre' },
        { label: 'Experiência', href: '#experiencia' },
        { label: 'Skills', href: '#skills' },
        { label: 'Formação', href: '#formacao' },
        { label: 'Contato', href: '#contato' },
      ],
      navCta: 'Fale comigo',
      heroPrimaryCta: 'Ver experiência',
      heroSecondaryCta: 'Entrar em contato ›',
      aboutHeadline: 'Nove anos construindo interfaces que sustentam negócios reais.',
      aboutHighlightsTitle: 'Onde eu entrego mais valor',
      experienceTitle: 'Trajetória profissional.',
      skillsTitle: 'Ferramentas do dia a dia.',
      educationTitle: 'Formação.',
      contactTitle: 'Vamos conversar sobre a próxima oportunidade.',
      contactSubtitle: 'Aberto a posições de Senior Front-End Engineer, Senior Software Engineer e Tech Lead.',
      footerTagline: 'Construído com Angular — standalone components & signals.',
      langToggleLabel: 'EN',
    },
    profile: {
      name: 'Leonardo Oliveira Das Neves',
      role: 'Senior Front-End Engineer',
      tagline: 'Angular · React · TypeScript · 9+ anos construindo aplicações em escala.',
      email: 'leonardodk1@outlook.com',
      phone: '+55 11 96163-7002',
      linkedin: 'https://www.linkedin.com/in/leonardo-oliveira-das-neves-a6153811b/',
      summary:
        'Engenheiro Front-End Sênior com mais de 9 anos de experiência, arquitetando software crítico para negócios que não podem parar: bancos como Santander, Itaú Unibanco e C6 Bank, saúde na SulAmérica e AmorSaúde, e e-commerce do Grupo Boticário. Tenho domínio sólido em arquitetura Front-End e sistemas escaláveis, com foco em performance, componentização e design systems, e atuo lado a lado com Product Owners, UX/UI, Back-End, QA e DevOps em times ágeis. Também mentorei mais de 10 desenvolvedores e participei de dezenas de entrevistas técnicas.',
    },
    stats: [
      { value: `${YEARS_OF_EXPERIENCE}+`, label: 'anos de experiência' },
      { value: '6', label: 'empresas e projetos enterprise' },
      { value: '4', label: 'setores atendidos' },
      { value: '10+', label: 'devs mentorados' },
    ],
    highlights: [
      {
        title: 'Arquitetura Front-End',
        description:
          'Decisões de arquitetura, componentização, design systems e padrões de escalabilidade em aplicações Angular e React de grande porte.',
      },
      {
        title: 'Liderança técnica',
        description:
          'Mentoria de engenheiros, condução de 1:1s, code reviews e participação em processos de contratação e promoção.',
      },
      {
        title: 'Visão full stack',
        description:
          'Experiência prática com Node.js, NestJS e MongoDB, o que me ajuda a entender o produto de ponta a ponta.',
      },
      {
        title: 'Impacto enterprise',
        description:
          'Contribuições em projetos de Santander, Itaú Unibanco, C6 Bank, SulAmérica e Grupo Boticário.',
      },
    ],
    experiences: [
      {
        company: 'AmorSaúde',
        role: 'Tech Lead',
        period: 'Out 2025 — Ago 2026 · 11 meses',
        location: 'São Paulo, Brasil',
        highlights: [
          'Liderança técnica de times de Front-End (Angular) e Back-End (NestJS), com responsabilidade sobre arquitetura, decisões técnicas e entregas em produção.',
          'Implementação de novo SSO com Amazon Cognito (MFA), reforçando segurança e controle de acesso.',
          'Condução técnica de duas iniciativas de negócio centrais — Proposta e Combos — integrando Angular e NestJS.',
          'Mentoria de engenheiros em 1:1s, planos de carreira e participação em decisões de promoção.',
          'Participação em processos seletivos, conduzindo entrevistas técnicas.',
        ],
        stack: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'Signals', 'NestJS', 'AWS Cognito', 'GitHub Actions'],
      },
      {
        company: 'SulAmérica Seguros Saúde',
        role: 'Senior Front-End Software Engineer',
        period: 'Mai 2024 — Set 2025 · 1 ano e 5 meses',
        location: 'São Paulo, Brasil',
        highlights: [
          'Desenvolvimento dos módulos de Gestão de Limites e Cadastro de Exceção de Regras, dando suporte a processos operacionais críticos.',
          'Arquitetura e manutenção de aplicações Angular (v9+) com foco em escalabilidade, performance e qualidade.',
          'Prototipação de fluxos em Figma para validação antecipada com stakeholders de negócio.',
          'Referência técnica do time através de code review, mentoria e disseminação de boas práticas.',
        ],
        stack: ['Angular 9+', 'TypeScript', 'SCSS', 'RxJS', 'Angular Material', 'Figma'],
      },
      {
        company: 'Keyrus',
        role: 'Senior Front-End Software Engineer',
        period: 'Out 2023 — Abr 2024 · 7 meses',
        location: 'São Paulo, Brasil',
        highlights: [
          'Construção de componentes reutilizáveis e interfaces responsivas seguindo padrões de arquitetura Front-End.',
          'Integração com APIs REST e programação reativa com RxJS.',
          'Testes automatizados e participação ativa em code review e resolução de problemas técnicos.',
          'Rotina ágil/Scrum: refinamento, estimativas e planejamento de sprint.',
        ],
        stack: ['Angular 2–20', 'TypeScript', 'NgRx', 'Signals', 'Storybook', 'Jest', 'AWS'],
      },
      {
        company: 'Avanade',
        role: 'Senior Front-End Software Engineer',
        period: 'Fev 2020 — Ago 2023 · 3 anos e 7 meses',
        location: 'São Paulo, Brasil',
        highlights: [
          'Aplicações enterprise para Santander, Itaú Unibanco e C6 Bank em ambientes complexos do setor financeiro.',
          'Soluções Front-End modulares e reutilizáveis com foco em escalabilidade e performance.',
          'Boas práticas de arquitetura, componentização, state management e separação de responsabilidades.',
          'Otimização de performance, tempos de carregamento e usabilidade multi-dispositivo.',
        ],
        stack: ['Angular', 'React', 'TypeScript', 'Node.js', 'RxJS', 'Azure DevOps', 'Jest'],
      },
      {
        company: 'CoreBiz',
        role: 'Front-End Developer',
        period: 'Nov 2018 — Fev 2020 · 1 ano e 4 meses',
        location: 'São Paulo e Região, Brasil',
        highlights: [
          'Atuação on-site no Grupo Boticário, incluindo a marca Eudora, em experiências de e-commerce na plataforma VTEX.',
          'Landing pages e campanhas alinhadas a iniciativas de marketing e lançamentos de produto.',
          'Integração de APIs de pagamento, catálogo e páginas de produto (PDPs).',
          'Melhoria de performance, responsividade e usabilidade em desktop e mobile.',
        ],
        stack: ['VTEX', 'JavaScript', 'HTML5', 'SCSS', 'E-commerce'],
      },
      {
        company: 'UNINOVE',
        role: 'Trainee Service Desk',
        period: 'Mai 2017 — Jun 2018 · 1 ano e 2 meses',
        location: 'São Paulo e Região, Brasil',
        highlights: [
          'Triagem e priorização de chamados por urgência e impacto.',
          'Atendimento a usuários por telefone, e-mail e sistema de tickets.',
          'Troubleshooting seguindo documentação e bases de conhecimento.',
        ],
        stack: ['Windows', 'Microsoft 365', 'Remote Desktop'],
      },
    ],
    skillGroups: [
      { label: 'Front-End', items: ['Angular', 'React', 'TypeScript', 'JavaScript (ES6+)', 'RxJS', 'NgRx', 'Signals'] },
      { label: 'Arquitetura', items: ['Microfrontends', 'Design Systems', 'Storybook', 'Reactive Forms', 'Arquitetura escalável'] },
      { label: 'Back-End', items: ['Node.js', 'NestJS', 'MongoDB', 'REST APIs'] },
      { label: 'Cloud & DevOps', items: ['AWS', 'Amazon Cognito', 'S3', 'Serverless', 'Terraform', 'Docker', 'GitHub Actions', 'CI/CD'] },
      { label: 'Qualidade', items: ['Jest', 'Jasmine', 'Karma', 'Sonar', 'ESLint'] },
    ],
    education: [
      {
        school: 'Uninove — Universidade Nove de Julho',
        degree: 'Bacharelado em Sistemas de Informação, Tecnologia da Informação',
        period: 'Ago 2015 — Dez 2019',
      },
      {
        school: 'UNINOVE',
        degree: 'Segurança da Informação, Gestão de Redes e Sistemas',
        period: 'Ago 2016 — Dez 2018',
      },
    ],
  },

  en: {
    ui: {
      navLinks: [
        { label: 'Profile', href: '#sobre' },
        { label: 'Experience', href: '#experiencia' },
        { label: 'Skills', href: '#skills' },
        { label: 'Education', href: '#formacao' },
        { label: 'Contact', href: '#contato' },
      ],
      navCta: 'Get in touch',
      heroPrimaryCta: 'View experience',
      heroSecondaryCta: 'Get in touch ›',
      aboutHeadline: 'Nine years building interfaces that carry real businesses.',
      aboutHighlightsTitle: 'Where I add the most value',
      experienceTitle: 'Career journey.',
      skillsTitle: 'Everyday toolkit.',
      educationTitle: 'Education.',
      contactTitle: "Let's talk about the next opportunity.",
      contactSubtitle: 'Open to Senior Front-End Engineer, Senior Software Engineer, and Tech Lead roles.',
      footerTagline: 'Built with Angular — standalone components & signals.',
      langToggleLabel: 'PT',
    },
    profile: {
      name: 'Leonardo Oliveira Das Neves',
      role: 'Senior Front-End Engineer',
      tagline: 'Angular · React · TypeScript · 9+ years building applications at scale.',
      email: 'leonardodk1@outlook.com',
      phone: '+55 11 96163-7002',
      linkedin: 'https://www.linkedin.com/in/leonardo-oliveira-das-neves-a6153811b/',
      summary:
        "Senior Front-End Engineer with 9+ years of experience architecting mission-critical software for businesses that can't afford downtime: banks like Santander, Itaú Unibanco, and C6 Bank, healthcare at SulAmérica and AmorSaúde, and e-commerce for Grupo Boticário. I have strong expertise in Front-End architecture and scalable systems, focused on performance, componentization, and design systems, and I work closely with Product Owners, UX/UI, Back-End, QA, and DevOps in Agile teams. I've also mentored 10+ developers and taken part in dozens of technical interviews.",
    },
    stats: [
      { value: `${YEARS_OF_EXPERIENCE}+`, label: 'years of experience' },
      { value: '6', label: 'enterprise companies & projects' },
      { value: '4', label: 'industries served' },
      { value: '10+', label: 'engineers mentored' },
    ],
    highlights: [
      {
        title: 'Front-End architecture',
        description:
          'Architecture decisions, componentization, design systems, and scalability patterns across large Angular and React applications.',
      },
      {
        title: 'Technical leadership',
        description:
          'Mentoring engineers, running 1:1s and code reviews, and taking part in hiring and promotion decisions.',
      },
      {
        title: 'Full-stack range',
        description:
          'Hands-on experience with Node.js, NestJS, and MongoDB — helping me understand the product end to end.',
      },
      {
        title: 'Enterprise impact',
        description:
          'Contributions to projects for Santander, Itaú Unibanco, C6 Bank, SulAmérica, and Grupo Boticário.',
      },
    ],
    experiences: [
      {
        company: 'AmorSaúde',
        role: 'Tech Lead',
        period: 'Oct 2025 — Aug 2026 · 11 months',
        location: 'São Paulo, Brazil',
        highlights: [
          'Provided technical leadership to Front-End (Angular) and Back-End (NestJS) engineers, owning architecture, technical decisions, and delivery to production.',
          'Led the implementation of a new SSO solution using Amazon Cognito (MFA), strengthening security and access control.',
          'Drove architecture and delivery for two major business initiatives — Proposta and Combos — integrating Angular and NestJS.',
          'Mentored engineers through 1:1s, growth plans, and participation in promotion decisions.',
          'Took part in hiring processes, conducting technical interviews.',
        ],
        stack: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'Signals', 'NestJS', 'AWS Cognito', 'GitHub Actions'],
      },
      {
        company: 'SulAmérica Seguros Saúde',
        role: 'Senior Front-End Software Engineer',
        period: 'May 2024 — Sep 2025 · 1 yr 5 mos',
        location: 'São Paulo, Brazil',
        highlights: [
          'Built the Limit Management and Rule Exception Registration modules, supporting critical operational processes.',
          'Designed and maintained Angular (v9+) applications focused on scalability, performance, and quality.',
          'Created interactive prototypes in Figma for early validation with business stakeholders.',
          'Served as a technical reference for the team through code review, mentoring, and best practices.',
        ],
        stack: ['Angular 9+', 'TypeScript', 'SCSS', 'RxJS', 'Angular Material', 'Figma'],
      },
      {
        company: 'Keyrus',
        role: 'Senior Front-End Software Engineer',
        period: 'Oct 2023 — Apr 2024 · 7 months',
        location: 'São Paulo, Brazil',
        highlights: [
          'Built reusable components and responsive interfaces following Front-End architecture best practices.',
          'Integrated REST APIs with reactive programming using RxJS.',
          'Wrote automated tests and took an active role in code review and troubleshooting.',
          'Worked within Agile/Scrum routines: refinement, estimation, and sprint planning.',
        ],
        stack: ['Angular 2–20', 'TypeScript', 'NgRx', 'Signals', 'Storybook', 'Jest', 'AWS'],
      },
      {
        company: 'Avanade',
        role: 'Senior Front-End Software Engineer',
        period: 'Feb 2020 — Aug 2023 · 3 yrs 7 mos',
        location: 'São Paulo, Brazil',
        highlights: [
          'Built enterprise applications for Santander, Itaú Unibanco, and C6 Bank within complex financial-sector environments.',
          'Delivered modular, reusable Front-End solutions focused on scalability and performance.',
          'Applied architecture best practices, componentization, state management, and separation of concerns.',
          'Optimized performance, load times, and usability across devices.',
        ],
        stack: ['Angular', 'React', 'TypeScript', 'Node.js', 'RxJS', 'Azure DevOps', 'Jest'],
      },
      {
        company: 'CoreBiz',
        role: 'Front-End Developer',
        period: 'Nov 2018 — Feb 2020 · 1 yr 4 mos',
        location: 'Greater São Paulo, Brazil',
        highlights: [
          'Worked on-site with Grupo Boticário, including the Eudora brand, on VTEX e-commerce experiences.',
          'Built landing pages and campaigns aligned with marketing initiatives and product launches.',
          'Integrated payment, catalog, and product detail page (PDP) APIs.',
          'Improved performance, responsiveness, and usability across desktop and mobile.',
        ],
        stack: ['VTEX', 'JavaScript', 'HTML5', 'SCSS', 'E-commerce'],
      },
      {
        company: 'UNINOVE',
        role: 'Trainee Service Desk',
        period: 'May 2017 — Jun 2018 · 1 yr 2 months',
        location: 'Greater São Paulo, Brazil',
        highlights: [
          'Triaged and prioritized tickets by urgency and business impact.',
          'Supported users by phone, email, and ticketing system.',
          'Troubleshot issues using documentation and knowledge bases.',
        ],
        stack: ['Windows', 'Microsoft 365', 'Remote Desktop'],
      },
    ],
    skillGroups: [
      { label: 'Front-End', items: ['Angular', 'React', 'TypeScript', 'JavaScript (ES6+)', 'RxJS', 'NgRx', 'Signals'] },
      { label: 'Architecture', items: ['Microfrontends', 'Design Systems', 'Storybook', 'Reactive Forms', 'Scalable architecture'] },
      { label: 'Back-End', items: ['Node.js', 'NestJS', 'MongoDB', 'REST APIs'] },
      { label: 'Cloud & DevOps', items: ['AWS', 'Amazon Cognito', 'S3', 'Serverless', 'Terraform', 'Docker', 'GitHub Actions', 'CI/CD'] },
      { label: 'Quality', items: ['Jest', 'Jasmine', 'Karma', 'Sonar', 'ESLint'] },
    ],
    education: [
      {
        school: 'Uninove — Universidade Nove de Julho',
        degree: 'B.Sc. in Information Systems, Information Technology',
        period: 'Aug 2015 — Dec 2019',
      },
      {
        school: 'UNINOVE',
        degree: 'Information Security, Network & Systems Management',
        period: 'Aug 2016 — Dec 2018',
      },
    ],
  },
};
