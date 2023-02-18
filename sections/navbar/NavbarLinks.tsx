import React from 'react';
import { useMotionContext } from '@/hooks/useMotionContext';
import { useRefsContext } from '@/hooks/useRefsContext';
import { listElements } from '@/constants/global';
import { Tvariants } from '@/constants/typeInterface';
import { scrollToRef } from '@/constants/global';
import { motion } from 'framer-motion';

const NavbarLinks = ({ childAnimation }: Pick<Tvariants, 'childAnimation'>) => {
  const { prefersReducedMotion } = useMotionContext() ?? false;
  const refsArray = Object.values(useRefsContext() ?? {});

  const liElements = listElements.map((element, index) => {
    return (
      <motion.li
        variants={childAnimation}
        key={index}
        onClick={() =>
          scrollToRef(refsArray[index], prefersReducedMotion ?? false)
        }
        className="navbar-text cursor-pointer hover:underline hover:decoration-white-400 hover:decoration-2 hover:underline-offset-8"
      >
        {element}
      </motion.li>
    );
  });

  return (
    <ul className="hidden flex-row items-center justify-between gap-x-6 lg:order-2 lg:flex 2xl:gap-x-10">
      {liElements}
    </ul>
  );
};

export default NavbarLinks;
