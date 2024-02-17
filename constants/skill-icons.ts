import {
  SiAdobelightroom,
  SiAdobephotoshop,
  SiBootstrap,
  SiC,
  SiCss3,
  SiCypress,
  SiDjango,
  SiDocker,
  SiExpress,
  SiFigma,
  SiFramer,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from '@icons-pack/react-simple-icons';

export type TIcons = {
  heading: string;
  icons: typeof goodCodingIcons;
};

export const goodCodingIcons = new Map([
  [
    'python',
    {
      Icon: SiPython,
      tooltipText: 'Python',
    },
  ],
  [
    'django',
    {
      Icon: SiDjango,
      tooltipText: 'Django',
    },
  ],
  [
    'html',
    {
      Icon: SiHtml5,
      tooltipText: 'HTML',
    },
  ],
  [
    'css',
    {
      Icon: SiCss3,
      tooltipText: 'CSS',
    },
  ],
  [
    'js',
    {
      Icon: SiJavascript,
      tooltipText: 'JavaScript',
    },
  ],
  [
    'ts',
    {
      Icon: SiTypescript,
      tooltipText: 'TypeScript',
    },
  ],
  [
    'node',
    {
      Icon: SiNodedotjs,
      tooltipText: 'Node.js',
    },
  ],
  [
    'express',
    {
      Icon: SiExpress,
      tooltipText: 'Express.js',
    },
  ],
  [
    'prisma',
    {
      Icon: SiPrisma,
      tooltipText: 'Prisma ORM',
    },
  ],
  [
    'react',
    {
      Icon: SiReact,
      tooltipText: 'React',
    },
  ],
  [
    'tailwind',
    {
      Icon: SiTailwindcss,
      tooltipText: 'Tailwind CSS',
    },
  ],
  [
    'bootstrap',
    {
      Icon: SiBootstrap,
      tooltipText: 'Bootstrap',
    },
  ],
]);

export const goodDesignIcons = new Map([
  ['ps', { Icon: SiAdobephotoshop, tooltipText: 'Photoshop' }],
  ['lightroom', { Icon: SiAdobelightroom, tooltipText: 'Lightroom' }],
]);

export const averageCodingIcons = new Map([
  ['next', { Icon: SiNextdotjs, tooltipText: 'Next.js' }],
  ['spring', { Icon: SiSpringboot, tooltipText: 'Spring Boot' }],
  ['docker', { Icon: SiDocker, tooltipText: 'Docker' }],
  ['mongoDB', { Icon: SiMongodb, tooltipText: 'MongoDB' }],
  ['mySQL', { Icon: SiMysql, tooltipText: 'MySQL' }],
  ['postgreSQL', { Icon: SiPostgresql, tooltipText: 'PostgreSQL' }],
  ['framer', { Icon: SiFramer, tooltipText: 'Framer Motion' }],
  ['cypress', { Icon: SiCypress, tooltipText: 'Cypress' }],
  ['vite', { Icon: SiVite, tooltipText: 'Vite & Vitest' }],
  ['c', { Icon: SiC, tooltipText: 'C' }],
]);

export const averageDesignIcons = new Map([
  ['figma', { Icon: SiFigma, tooltipText: 'Figma' }],
]);
