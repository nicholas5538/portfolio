import {
  SiAdobe,
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
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from '@icons-pack/react-simple-icons';

export type TIcons = {
  heading: string;
  icons:
    | typeof goodCodingIcons
    | typeof goodDesignIcons
    | typeof averageCodingIcons
    | typeof averageDesignIcons;
};

export const goodCodingIcons = {
  python: {
    Icon: SiPython,
    tooltipText: 'Python',
  },
  django: {
    Icon: SiDjango,
    tooltipText: 'Django',
  },
  html: {
    Icon: SiHtml5,
    tooltipText: 'HTML',
  },
  css: {
    Icon: SiCss3,
    tooltipText: 'CSS',
  },
  js: {
    Icon: SiJavascript,
    tooltipText: 'JavaScript',
  },
  ts: {
    Icon: SiTypescript,
    tooltipText: 'TypeScript',
  },
  node: {
    Icon: SiNodedotjs,
    tooltipText: 'node.js',
  },
  express: {
    Icon: SiExpress,
    tooltipText: 'Express',
  },
  react: {
    Icon: SiReact,
    tooltipText: 'React',
  },
  tailwind: {
    Icon: SiTailwindcss,
    tooltipText: 'Tailwind CSS',
  },
  bootstrap: {
    Icon: SiBootstrap,
    tooltipText: 'Bootstrap',
  },
};

export const goodDesignIcons = {
  ps: { Icon: SiAdobe, tooltipText: 'Photoshop & Lightroom' },
};

export const averageCodingIcons = {
  next: { Icon: SiNextdotjs, tooltipText: 'Next.js' },
  mongoDB: { Icon: SiMongodb, tooltipText: 'MongoDB' },
  docker: { Icon: SiDocker, tooltipText: 'Docker' },
  mySQL: { Icon: SiMysql, tooltipText: 'MySQL' },
  postgreSQL: { Icon: SiPostgresql, tooltipText: 'PostgreSQL' },
  framer: { Icon: SiFramer, tooltipText: 'Framer Motion' },
  cypress: { Icon: SiCypress, tooltipText: 'Cypress' },
  vite: { Icon: SiVite, tooltipText: 'Vite & Vitest' },
  c: { Icon: SiC, tooltipText: 'C' },
};

export const averageDesignIcons = {
  figma: { Icon: SiFigma, tooltipText: 'Figma' },
};
