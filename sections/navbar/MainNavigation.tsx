'use client';

import React from 'react';
import { useMotionContext } from '@/hooks/useMotionContext';
import { useThemeContext } from '@/hooks/useThemeContext';
import useScrollDirection from '@/hooks/useScrollDirection';
import DropdownMenu from './DropdownMenu';
import NavbarLinks from './NavbarLinks';
import { IconMoodSmileBeam } from '@tabler/icons-react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { motion } from 'framer-motion';
import { Tanimation } from '@/constants/typeInterface';

const MainNavigation = () => {
  const { darkMode, setDarkMode, toggleThemeHandler } =
    useThemeContext() ?? false;
  const { prefersReducedMotion } = useMotionContext() ?? false;
  const scrollDirection = useScrollDirection();

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
      className={`fixed z-50 grid h-16 w-screen place-items-center bg-white-400 shadow-xl transition-top duration-300 dark:bg-midnight-city ${
        scrollDirection === 'down'
          ? '-top-[30rem] ease-in lg:-top-16'
          : 'top-0 ease-out'
      }`}
    >
      <nav className="relative mx-auto my-auto flex w-11/12 max-w-7xl flex-row items-center justify-between">
        <motion.div
          variants={childAnimation}
          className="order-2 flex flex-row items-center gap-x-2 lg:order-1"
        >
          <h1 className="navbar-text">NICHOLAS</h1>
          <IconMoodSmileBeam
            size={24}
            color={`${darkMode ? '#E9ECEF' : '#343434'}`}
            className="hidden sm:block"
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
          <DarkModeSwitch
            checked={darkMode}
            onChange={(checked: boolean) => setDarkMode(checked)}
            onClick={toggleThemeHandler}
            sunColor={'#343434'}
            moonColor={'#FFB26B'}
            data-testid="sun-moon"
          />
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default MainNavigation;
