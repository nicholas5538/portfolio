'use client';

import React from 'react';
import { m } from 'framer-motion';
import { DotLottiePlayer } from '@dotlottie/react-player';
import SkillCategory from './SkillCategory';
import SkillsLight from '@/animations/skills-light.json';
import SkillsDark from '@/animations/skills-dark.json';
import Animation from '@/components/Animation';
import {
  goodCodingIcons,
  goodDesignIcons,
  averageCodingIcons,
  averageDesignIcons,
} from '@/constants/skill-icons';
import type { Tanimation } from '@/constants/typeInterface';
import { useMotionContext } from '@/hooks/useMotionContext';
import { useRefsContext } from '@/hooks/useRefsContext';
import { useThemeContext } from '@/hooks/useThemeContext';
import { Provider } from '@radix-ui/react-tooltip';

const Skills = () => {
  const { prefersReducedMotion } = useMotionContext() ?? false;
  const { skillsRef } = useRefsContext() ?? {};
  const { darkMode } = useThemeContext() ?? false;

  const animationData = darkMode ? SkillsDark : SkillsLight;

  const childAnimation: Tanimation = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : -20 },
    show: { opacity: 1, y: 0 },
  };

  const containerAnimation: Tanimation = {
    ...childAnimation,
    show: {
      ...childAnimation.show,
      transition: {
        type: 'spring',
        duration: 1,
        bounce: 0.4,
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
      },
    },
  };

  const lottieAnimation: Tanimation = {
    hidden: { opacity: 0, x: prefersReducedMotion ? 0 : 100 },
    show: { opacity: 1, x: 0 },
  };

  const animationProps = { containerAnimation, childAnimation };

  return (
    <section>
      <Animation
        animation={containerAnimation}
        className="relative mx-auto mb-12 flex w-11/12 max-w-7xl flex-col items-start justify-center gap-y-6 2xl:mb-24"
        viewAmount={0.65}
      >
        <m.h2
          ref={skillsRef}
          variants={childAnimation}
          className="white-bg-heading"
        >
          💪
          <span className="span-heading from-black-200 to-black-200">
            Skills
          </span>
        </m.h2>
        <Provider delayDuration={400}>
          <m.div variants={containerAnimation}>
            <h3 className="white-sub-heading font-semibold dark:text-[#FFA54E]">
              I am not that bad with:
            </h3>
            <SkillCategory
              heading="coding"
              icons={goodCodingIcons}
              {...animationProps}
            />
            <SkillCategory
              heading="design"
              icons={goodDesignIcons}
              {...animationProps}
            />
          </m.div>
          <m.div variants={containerAnimation}>
            <h3 className="white-sub-heading font-semibold dark:text-[#FFA54E]">
              I have played around with:
            </h3>
            <SkillCategory
              heading="coding"
              icons={averageCodingIcons}
              {...animationProps}
            />
            <SkillCategory
              heading="design"
              icons={averageDesignIcons}
              {...animationProps}
            />
          </m.div>
        </Provider>
        <m.aside
          variants={lottieAnimation}
          className="hidden h-56 w-56 md:absolute md:bottom-20 md:right-28 md:block dark:md:right-10 lg:bottom-40 lg:right-5 lg:h-[22rem] lg:w-[22rem] dark:lg:h-[17rem] dark:lg:w-[17rem] xl:h-[28rem] xl:w-[28rem] dark:xl:h-[23rem] dark:xl:w-[23rem]"
        >
          <DotLottiePlayer
            autoplay={true}
            loop={!prefersReducedMotion}
            src={animationData}
          />
        </m.aside>
      </Animation>
    </section>
  );
};

export default Skills;
