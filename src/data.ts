/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TimelineItem, Project, SkillCategory, Language, Recommendation } from './types';

export const HERO_DATA = {
  name: 'Tanja Ogirchuk',
  title: 'Senior Product Designer & Team Lead',
  location: 'Munich, Germany',
  bio: 'I am a Senior Product Designer with a background in Applied Mathematics and Computer Science over 10 years of experience building complex digital products and design systems.\nLed a team of 6–8 designers: set craft standards, developed talent, and fostered team culture. ',
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
      '/admin_docs_cloud/DocsCloud_User_activity.svg',
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
    author: 'Tatiana Kochedykova',
    role: 'Head of Marketing and Communications',
    company: 'ONLYOFFICE',
    period: 'Collaborated in 2019 – 2026',
    relationship: 'Marketing & Communications Partner',
    category: 'product-management',
    text: "I truly value our time working together. I always knew that whatever you took on, you would deliver it brilliantly. Having you lead the design team gave me absolute peace of mind; I never had to spend time over-explaining things or dealing with excuses. I was completely confident that everything on your end would be handled perfectly. Thank you for that reassurance and for making our collaboration so seamless. You are incredibly talented, and I sincerely wish you find an amazing next step where you can fully shine and achieve everything you dream of.",
    tags: ['Creative Direction', 'Web & Digital Design', 'Visual Identity'],
    linkedin: 'https://www.linkedin.com/in/tatiana-kochedykova-0832324a/'
  },
  {
    id: 'col-2',
    author: 'Sergey Linnik',
    role: 'Senior Programmer',
    company: 'ONLYOFFICE',
    period: 'Collaborated in 2019 – 2026',
    relationship: 'Engineering Partner',
    category: 'engineering-tech',
    text: "Working with Tanja was a great experience. On our complex Admin DocsCloud and API Documentation projects, no matter how difficult or chaotic the architecture got, Tanja stepped up and managed it completely. She is a designer who genuinely understands the engineering perspective, never backs down from technical challenges, and always delivers.",
    tags: ['SaaS Design','Developer Experience (DX)', 'Admin Workflows'],
    linkedin: 'https://www.linkedin.com/in/linney/'
  },
  {
    id: 'col-3',
    author: 'Anna Medvedeva',
    role: 'Head of Product Engineering Department',
    company:'ONLYOFFICE',
    period: 'Collaborated in 2019 – 2026',
    relationship: 'Design Manager',
    category: 'engineering-tech',
    text: "Tanja brought incredible value to both our product development and our team dynamics. Having her in our design department was a wonderful experience. She is a remarkably inspiring professional with undeniable talent and passion for her craft. I truly believe she has a stellar future ahead of her and will succeed in any challenge she tackles.",
    tags: ['Product Design', 'Design Culture'],
    linkedin: 'https://www.linkedin.com/in/anna-medvedeva-137931a2/?locale=en'
  },
  {
    id: 'col-4',
    author: 'Richard White',
    role: 'Web Development Team Lead',
    company: 'ONLYOFFICE',
    period: 'Collaborated in 2019 – 2026',
    relationship: 'Frontend & Web Partner',
    category: 'product-management',
    text: "Working with Tanja has been an absolute privilege. She brings a rare combination of exceptional design expertise, a strong professional character, and genuine human warmth to the team. As a web development lead, I deeply appreciated her resilience, her constructive approach to challenges, and how effortless she made the design-to-dev workflow. Tanja fosters a supportive, incredibly positive environment around her. She is a phenomenal professional and an amazing teammate.",
    tags: ['Design-to-Dev Synergy', 'Web & Interactive Design'],
    //linkedin: 'https://www.linkedin.com/pub/dir?first=Elena&last=Rostova'
  }
  
];

