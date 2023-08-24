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
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa6';

export type TIcons = {
  heading: string;
  icons: typeof goodCodingIcons;
};

export const goodCodingIcons = [
  { Icon: SiPython, tooltipText: 'Python' },
  { Icon: SiDjango, tooltipText: 'Django' },
  { Icon: SiHtml5, tooltipText: 'HTML' },
  { Icon: SiCss3, tooltipText: 'CSS' },
  { Icon: SiJavascript, tooltipText: 'JavaScript' },
  { Icon: SiTypescript, tooltipText: 'TypeScript' },
  { Icon: FaNodeJs, tooltipText: 'Node.js' },
  { Icon: SiExpress, tooltipText: 'Express' },
  { Icon: SiReact, tooltipText: 'React' },
  { Icon: SiTailwindcss, tooltipText: 'Tailwind CSS' },
  { Icon: SiBootstrap, tooltipText: 'Bootstrap' },
];

export const goodDesignIcons = [
  { Icon: SiAdobe, tooltipText: 'Photoshop & Lightroom' },
];

export const averageCodingIcons = [
  { Icon: SiNextdotjs, tooltipText: 'Next.js' },
  { Icon: SiMongodb, tooltipText: 'MongoDB' },
  { Icon: SiDocker, tooltipText: 'Docker' },
  { Icon: SiMysql, tooltipText: 'MySQL' },
  { Icon: SiPostgresql, tooltipText: 'PostgreSQL' },
  { Icon: SiFramer, tooltipText: 'Framer Motion' },
  { Icon: SiCypress, tooltipText: 'Cypress' },
  { Icon: SiVite, tooltipText: 'Vite & Vitest' },
  { Icon: SiC, tooltipText: 'C' },
];

export const averageDesignIcons = [{ Icon: SiFigma, tooltipText: 'Figma' }];
