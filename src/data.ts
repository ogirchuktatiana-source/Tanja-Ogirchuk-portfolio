/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TimelineItem, Project, SkillCategory, Language, Recommendation } from './types';

export const HERO_DATA = {
  name: 'Tanja Ogirchuk',
  title: 'Senior Product Designer & Team Lead',
  location: 'Munich, Germany',
  bio: 'I am a Senior Product Designer with a background in Applied Mathematics and Computer Science over 10 years of experience building complex digital products and design systems.\nLead a team of 6–8 designers: setting craft standards, developing talent, and fostering team culture. ',
  email: 'ogirchuk.tatiana@gmail.com',
  linkedin: 'www.linkedin.com/in/tanja-ogirchuk/',
  portfolioUrl: '#',
};

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: 'leader',
    period: '2021 – 2025',
    title: 'Senior Designer & Team Lead',
    organization: 'SIA "Ascensio System" (ONLYOFFICE)',
    context: 'Designing DocServer Admin Panel (SaaS), building Figma-to-Storybook design systems using Variables & Tokens, and managing the design team.',
    details: [
      'Spearheaded the design strategy for the entire product suite, aligning business requirements with user needs.',
      'Established design system governance, closing the loop between design system components in Figma and developers in Storybook.',
      'Coached and mentored 5+ designers, establishing clean file structures and high standards of execution.'
    ],
    type: 'experience'
  },
  {
    id: 'uxui',
    period: '2019 – 2021',
    title: 'UX/UI Designer',
    organization: 'SIA "Ascensio System"',
    context: 'Interface design for document editors and cloud data storage. Redesign of the HelpCenter platform.',
    details: [
      'Iterated on complex collaborative office suite interfaces, simplifying access to sharing, security settings, and permissions.',
      'Conducted extensive wireframing, layout testing, and accessibility checks for multi-language platforms.',
      'Redesigned the primary user guidance portal, increasing user self-service efficiency.'
    ],
    type: 'experience'
  },
  {
    id: 'pivot',
    period: '2018 – 2019',
    title: 'Pivot to Digital Product Design',
    organization: 'Privolzhskaya Media School',
    context: 'WEB-Design Refresher Courses.',
    details: [
      'Intensive educational program focused on human-computer interaction, interactive media design, grid layouts, and web standards.'
    ],
    type: 'pivot'
  },
  {
    id: 'brand',
    period: '2017 – 2019',
    title: 'Brand & Visual Designer',
    organization: 'Advertising Agency "Most"',
    context: 'Corporate identity, logos, color palettes, and brand books development.',
    details: [
      'Designed visual systems from scratch, establishing complete design guidelines for commercial enterprises.',
      'Created vector graphics, custom brand styling, and robust guidelines for print and screen consistency.'
    ],
    type: 'experience'
  },
  {
    id: 'graphic',
    period: '2012 – 2016',
    title: 'Graphic Designer',
    organization: 'Advertising Agency "North Media Design"',
    context: 'Layout adaptation, client communication, print and digital media preparation.',
    details: [
      'Managed end-to-end client communications, preparing precise materials for digital environments and professional printing.'
    ],
    type: 'experience'
  },
  {
    id: 'education',
    period: '2007 – 2012',
    title: "Master's Degree in Applied Mathematics & Computer Science",
    organization: 'Syktyvkar State University',
    context: 'Anabin certified / Es gibt berufliche Anerkennung.',
    details: [
      'Deep academic grounding in logic, system theory, algorithms, and mathematical modeling.',
      'This foundation bridges the gap between design and engineering, offering advanced systems thinking for micro-interactions and complex backend architectures.'
    ],
    type: 'education'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'cloud-admin',
    title: 'DocServer Admin Panel',
    role: 'Senior Product Designer',
    images: [
      '/DocServerAdminPanel/Statistics.png',
      '/DocServerAdminPanel/JWT_Settings.png',
      '/DocServerAdminPanel/IP_Filtering.png'
    ],
    impact: 'Designed the SaaS administrative panel from scratch to help enterprise clients easily manage self-hosted collaboration servers. Focused on data visualization to build clear dashboards for tracking real-time server metrics and capacity limits.',
    tags: ['SaaS Design', 'Figma Variables', 'Dashboard Design', 'Data Visualization', 'Security UX']
  },
  {
    id: 'admin-docs-cloud',
    title: 'Admin DocsCloud',
    role: 'Senior Product Designer',
    images: [
      '/admin_docs_cloud/DocsCloud_User_activity.png',
      '/admin_docs_cloud/DocsCloud_Prepaid_reduction_users.png',
    ] ,
    impact: 'Engineered multi-tenant administration workflows and document libraries, bringing advanced search patterns, file collaboration permissions, and live diagnostic monitoring to cloud deployments.',
    tags: ['Cloud Administration', 'Multi-tenant Permissions', 'Document Orchestration', 'SaaS Architecture']
  },
  {
    id: 'api-doc',
    title: 'API Documentation',
    role: 'Senior UX/UI Designer',
    images: [
      '/API_Documentation/API.png',
      '/API_Documentation/API_method.png',
    ] ,
    image: '/design_system_74208224.png',
    impact: 'Created a component library based on Figma’s Variables and design tokens for Storybook integration.',
    tags: ['Variables & Tokens', 'Storybook', 'Figma Design System', 'API Documentation', 'Technical Alignment']
  },
  {
    id: 'integration-edition',
    title: 'Integration Edition',
    role: 'Senior UX/UI Designer',
    images: [
      '/integration_edition/Integration_Edition.png',
    ] , 
    impact: 'The Integration Edition layout emphasizes ease of navigation: convenient one-click creation of new files, quick document uploads, and an informative table for managing existing files with a flexible role system (editors/viewers). I created an intuitive and concise web panel that allows users to test the full functionality of ONLYOFFICE editors before purchasing.',
    tags: ['Integration API', 'Iframe Mechanics', 'Developer UX', 'Configuration Flow']
  },
  {
    id: 'landing-pages',
    title: 'Landing Pages',
    role: 'Senior Visual Designer',
    images: [
      '/landing_pages/Landing_Manage.png',
      '/landing_pages/devices.png',
    ] , 
    image: '/landing_page_82519600.png',
    impact: 'Crafted high-converting, premium marketing landing pages for global enterprise products. Leveraged strict grid alignments, compelling typography pairings, and micro-interactions.',
    tags: ['Landing Pages', 'Conversion Rate', 'Responsive Layouts', 'SEO Optimization']
  },
  {
    id: 'presentations',
    title: 'Presentations',
    role: 'Design Lead',
    images: [
      '/presentations/presentations.png',
    ] , 
    impact: 'Designed clean, high-impact corporate presentations and sales slide decks for key stakeholding panels. Focused on clear visual hierarchy, storytelling, and elegant data representation.',
    tags: ['Corporate Deck', 'Storytelling', 'Data Representation', 'Typography']
  },
  {
    id: 'marketplace',
    title: 'Marketplace',
    role: 'Lead Product Designer',
    images: [
      '/marketplace/marketplaceClaudeM.png',
      '/marketplace/marketplaceClaudeDocSpace.png',
    ] , 
    impact: 'Designed a robust, scalable cloud application and plugin marketplace interface, connecting enterprise solutions with modular extensions and single-click installer widgets.',
    tags: ['E-commerce', 'SaaS Directory', 'Search Navigation', 'Grid Layouts']
  },
  {
    id: 'illustrations',
    title: 'Illustrations',
    role: 'Graphic & Brand Illustrator',
    images: [
      '/illustrations/illustrations.png',
      '/illustrations/illustrations_AI.png',
    ] , 
    impact: 'Crafted a versatile vector illustration style guide, developing branded key visuals, custom isometric scenes, and unique character design libraries used across branding assets.',
    tags: ['Vector Graphics', 'Branding Guide', 'Flat Illustration', 'Isometric Assets']
  },
  {
    id: 'logos',
    title: 'Logos',
    role: 'Brand Identity Designer',
    images: [
      'logos/Logo_Dev.png',
    ] , 
    impact: 'Created iconic, timeless corporate identity solutions and clever negative-space logo grid constructions for dynamic tech startups and established agencies alike.',
    tags: ['Branding Systems', 'Logo Design', 'Aesthetic Grid', 'Symbol Construction']
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Core Expertise',
    items: ['Team Leadership', 'Product Design', 'UX/UI Design', 'Web Design', 'Wireframing', 'Design Systems', 'Typography']
  },
  {
    title: 'Primary Tools',
    items: ['Figma (Variables & Tokens)', 'Storybook', 'Adobe Illustrator', 'Adobe Photoshop', 'AI Design Utilities']
  }
];

export const LANGUAGES: Language[] = [
  { name: 'English', level: 'Professional (B2)' },
  { name: 'German', level: 'Intermediate (B1)' },
  { name: 'Russian', level: 'Native / Bilingual' }
];

export const RECOMMENDATIONS_DATA: Recommendation[] = [
  {
    id: 'col-1',
    author: 'Maximiliano Schulz',
    role: 'Product Manager (SaaS & Cloud Apps)',
    company: 'SIA "Ascensio System" (ONLYOFFICE)',
    period: 'Collaborated in 2023 – 2026',
    relationship: 'Cross-functional Peer',
    category: 'product-management',
    text: "Tanja's dual background in Applied Mathematics and product design makes her an exceptional problem-solver. On our DocServer Admin Panel launch, she transformed complex database relational parameters and server log metrics into a beautifully intuitive orchestration flow. She communicates fluently with both business planning and engineering teams, translating product vision into clean, token-driven specifications. Her leadership holds the design team to immaculate standards of visual polish and user clarity.",
    tags: ['SaaS Design', 'Systems Thinking', 'Technical Alignment'],
    linkedin: 'https://www.linkedin.com/pub/dir?first=Maximiliano&last=Schulz'
  },
  {
    id: 'col-2',
    author: 'Alexandru Costache',
    role: 'Lead Frontend Architect',
    company: 'SIA "Ascensio System"',
    period: 'Direct Collaboration 2022 – 2026',
    relationship: 'Engineering Partner',
    category: 'engineering-tech',
    text: "Working with Tatiana is a developer's absolute dream. She built and managed our complete Figma-to-Storybook design tokens architecture. Instead of leaving edge cases for development, she delivered precise, variable-driven components with math-perfect responsive scaling. Her logical model is rock solid—she understands CSS mechanics deeply and addresses tricky responsive UI states proactively before any code is checked in. Truly the highest standard of developer hand-off.",
    tags: ['Figma Variables', 'Storybook Integration', 'HTML/CSS Logic'],
    linkedin: 'https://www.linkedin.com/pub/dir?first=Alexandru&last=Costache'
  },
  {
    id: 'col-3',
    author: 'Elena Rostova',
    role: 'UX Designer',
    company: 'SIA "Ascensio System"',
    period: 'Direct Report 2021 – 2025',
    relationship: 'Mentorship Lead',
    category: 'product-management',
    text: "As a design team lead, Tatiana is an inspiring mentor who builds robust design processes. She introduced structured UI file layouts, component governance guidelines, and atomic design standards that drastically reduced prototype-to-production inconsistencies across our features. Her reviews are always deeply constructive, focusing on logical hierarchy, typographic tracking, and semantic token design, helping me level up from basic styling to complex web app layout design.",
    tags: ['Team Leadership', 'Mentorship', 'Design Systems'],
    linkedin: 'https://www.linkedin.com/pub/dir?first=Elena&last=Rostova'
  },
  {
    id: 'col-4',
    author: 'Dmitry Medvedev',
    role: 'Senior DevOps Architect',
    company: 'SIA "Ascensio System"',
    period: 'Collaborated in 2024',
    relationship: 'Systems Peer',
    category: 'engineering-tech',
    text: "Tanja single-handedly simplified the onboarding and server configuration dashboards for our self-hosted enterprise clients. Where there were once dozens of terminal commands and raw JSON error codes, she introduced clear data visualizations, real-time telemetry gauge designs, and highly readable system states. Her mathematical background is incredibly obvious in the elegance of her system modeling.",
    tags: ['Dashboard Design', 'Data Visualization', 'Telemetry UX'],
    linkedin: 'https://www.linkedin.com/pub/dir?first=Dmitry&last=Medvedev'
  }
];

