export const listElements = [
  'About Me',
  'Skills',
  'Experience',
  'Projects',
  'Contact',
];

export const externalLinks = {
  LinkedIn: 'https://www.linkedin.com/in/nicholas-yjy/',
  GitHub: 'https://github.com/nicholas5538',
  Instagram: 'https://www.instagram.com/friviolousnicholas',
};

export const childAnimation: {
  [key: string]: { opacity: number; x: string | number };
} = {
  hidden: { opacity: 0, x: '-100%' },
  show: { opacity: 1, x: 0 },
};

export const parentAnimation = {
  ...childAnimation,
  show: {
    ...childAnimation.show,
    transition: { type: 'spring', duration: 1, staggerChildren: 0.2 },
  },
};
