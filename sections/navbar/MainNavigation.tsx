'use client';

import React from 'react';
import { clsx } from 'clsx';
import DropdownMenu from './DropdownMenu';
import { motion } from 'framer-motion';
import NavbarLinks from './NavbarLinks';
import { Root } from '@radix-ui/react-toggle';
import type { Tanimation } from '@/constants/typeInterface';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFaceLaughBeam,
  faMoon,
  faSun,
} from '@fortawesome/free-solid-svg-icons';
import { useMotionContext } from '@/hooks/useMotionContext';
import { useThemeContext } from '@/hooks/useThemeContext';
import useScrollDirection from '@/hooks/useScrollDirection';

const MainNavigation = () => {
  const { darkMode, toggleThemeHandler } = useThemeContext() ?? false;
  const { prefersReducedMotion } = useMotionContext() ?? false;
  const scrollDirection = useScrollDirection();
  const themeIcon = darkMode ? faMoon : faSun;

  const childAnimation: Tanimation = {
    hidden: {
      y: prefersReducedMotion ? 0 : -50,
    },
    show: {
      y: 0,
      transition: {
        type: 'spring',
        duration: 1,
        bounce: 0.4,
      },
    },
  };

  const containerAnimation: Tanimation = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0,
        staggerChildren: prefersReducedMotion ? 0 : 0.05,
      },
    },
  };

  return (
    <motion.header
      variants={containerAnimation}
      initial="hidden"
      animate="show"
      className={clsx(
        'fixed z-50 grid h-16 w-screen place-items-center bg-white-400 shadow-xl transition-top duration-300 dark:bg-midnight-city',
        {
          '-top-[30rem] ease-in lg:-top-16': scrollDirection === 'down',
          '-top-0 ease-out': scrollDirection !== 'down',
        }
      )}
    >
      <nav className="relative mx-auto my-auto flex w-11/12 max-w-7xl flex-row items-center justify-between">
        <motion.div
          variants={childAnimation}
          className="order-2 flex flex-row items-center gap-x-2 lg:order-1"
        >
          <h1 className="navbar-text">NICHOLAS</h1>
          <FontAwesomeIcon
            icon={faFaceLaughBeam}
            className="hidden h-6 w-6 text-black-200 dark:text-white-400 sm:block"
          />
        </motion.div>
        <div className="order-first lg:order-2">
          <DropdownMenu />
          <NavbarLinks childAnimation={childAnimation} />
        </div>
        <motion.div
          variants={childAnimation}
          className="order-last"
          data-testid="darkModeSwitch"
        >
          <Root
            aria-label="Toggle theme"
            className={clsx(
              'text-2xl text-aqua hover:text-dark-aqua dark:text-light-orange dark:hover:text-orange-red',
              'flex h-[35px] w-[35px] items-center justify-center rounded leading-4',
              'transition-colors duration-300 ease-out'
            )}
            pressed={darkMode}
            onPressedChange={toggleThemeHandler}
            data-testid="sun-moon"
          >
            <FontAwesomeIcon icon={themeIcon} />
          </Root>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default MainNavigation;
