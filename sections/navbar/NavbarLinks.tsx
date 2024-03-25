import React from 'react';
import { m } from 'framer-motion';
import Button from '@/components/button';
import {
  resumeButtonProps,
  listElements,
  scrollToRef,
} from '@/constants/global';
import type { Tvariants } from '@/constants/typeInterface';
import { useMotionContext } from '@/hooks/useMotionContext';
import { useRefsContext } from '@/hooks/useRefsContext';

const NavbarLinks = ({ childAnimation }: Pick<Tvariants, 'childAnimation'>) => {
  const { prefersReducedMotion } = useMotionContext() ?? false;
  const refsArray = Object.values(useRefsContext() ?? {});

  const liElements = listElements.map((element, index) => {
    return (
      <m.li
        variants={childAnimation}
        key={index.toString()}
        onClick={() =>
          scrollToRef(refsArray[index], prefersReducedMotion ?? false)
        }
        className="navbar-text cursor-pointer hover:underline hover:decoration-white-400 hover:decoration-2 hover:underline-offset-8"
      >
        {index === listElements.length - 1 ? (
          <Button linkClass="xl:text-xl" {...resumeButtonProps} />
        ) : (
          element
        )}
      </m.li>
    );
  });

  return (
    <ul className="hidden flex-row items-center justify-between gap-x-6 lg:order-2 lg:flex 2xl:gap-x-10">
      {liElements}
    </ul>
  );
};

export default NavbarLinks;
