import { goodCodingIcons, averageCodingIcons } from '@/constants/skill-icons';
import {
  SiArduino,
  SiGithub,
  SiJupyter,
  SiWebauthn,
  SiYoutube,
} from '@icons-pack/react-simple-icons';

import type { StaticImageData } from 'next/image';
import handSanitizerImage from '@/images/handsanitizer.webp';
import pepsiImage from '@/images/pepsi-corporate.webp';
import stockImage from '@/images/stocks-portfolio.webp';
import voucherImage from '@/images/voucher_management.webp';

export type Tproject = {
  id: number;
  image: StaticImageData;
  projectTitle: string;
  projectDesc: string;
  stack: {
    Icon: typeof SiArduino;
    tooltipText: string;
    url?: string;
  }[];
  links: {
    Icon: typeof SiArduino;
    tooltipText: 'YouTube' | 'GitHub' | 'Website';
    url: string;
  }[];
};

const voucherManagementCard: Tproject = {
  id: 0,
  image: voucherImage,
  projectTitle: 'Voucher Management',
  projectDesc:
    'This is a web-based program that enables users to carry out CRUD operations on vouchers. It also provides a data table for convenient access to all information related to the vouchers.',
  stack: [
    goodCodingIcons.ts,
    goodCodingIcons.node,
    goodCodingIcons.express,
    goodCodingIcons.react,
    goodCodingIcons.tailwind,
    averageCodingIcons.mongoDB,
    averageCodingIcons.docker,
    { ...averageCodingIcons.vite, tooltipText: 'Vite' },
  ],
  links: [
    {
      Icon: SiGithub,
      tooltipText: 'GitHub',
      url: 'https://github.com/nicholas5538/fp-voucher-FE',
    },
    {
      Icon: SiWebauthn,
      tooltipText: 'Website',
      url: 'https://fp-voucher-portal.onrender.com',
    },
  ],
};

const stockProjectCard: Tproject = {
  id: 1,
  image: stockImage,
  projectTitle: 'Stockstracker',
  projectDesc:
    'This is a web-based program that enables users to quickly analyze the performance of their stock portfolio. It also allows users to save and make changes to their transaction history, which can be easily accessed on a single page.',
  stack: [
    goodCodingIcons.python,
    goodCodingIcons.django,
    goodCodingIcons.html,
    goodCodingIcons.css,
    goodCodingIcons.js,
    goodCodingIcons.bootstrap,
    averageCodingIcons.postgreSQL,
  ],
  links: [
    {
      Icon: SiGithub,
      tooltipText: 'GitHub',
      url: 'https://github.com/nicholas5538/StocksTracker',
    },
    {
      Icon: SiYoutube,
      tooltipText: 'YouTube',
      url: 'https://youtu.be/T_cgG668pf4',
    },
  ],
};

const ioTProjectCard: Tproject = {
  id: 2,
  image: handSanitizerImage,
  projectTitle: 'IoT Hand Sanitizer',
  projectDesc:
    'A hand sanitizer product that incorporates data analytics and simple machine learning techniques to forecast certain data points, such as the number of times the sanitizer dispenser needs to be used before it runs out.',
  stack: [
    goodCodingIcons.python,
    { Icon: SiJupyter, tooltipText: 'Jupyter Notebook' },
    { Icon: SiArduino, tooltipText: 'Arduino' },
  ],
  links: [
    {
      Icon: SiGithub,
      tooltipText: 'GitHub',
      url: 'https://github.com/nicholas5538/sanitizer-IoT',
    },
    {
      Icon: SiYoutube,
      tooltipText: 'YouTube',
      url: 'https://www.youtube.com/watch?v=G4GZ-QFubOY',
    },
  ],
};

const pepsiProjectCard: Tproject = {
  id: 3,
  image: pepsiImage,
  projectTitle: 'Pepsi corporate SPA',
  projectDesc:
    'Creating a new React-based single-page application from the beginning, in order to gain familiarity with various tools, including Typescript, React Router, framer motion, and the vitest unit testing framework.',
  stack: [
    goodCodingIcons.ts,
    goodCodingIcons.react,
    averageCodingIcons.framer,
    averageCodingIcons.vite,
  ],
  links: [
    {
      Icon: SiGithub,
      tooltipText: 'GitHub',
      url: 'https://github.com/nicholas5538/fp-mini-project',
    },
  ],
};

export const projectCards: Tproject[] = [
  voucherManagementCard,
  stockProjectCard,
  ioTProjectCard,
  pepsiProjectCard,
];
