'use client';

import React from 'react';
import { clsx } from 'clsx';
import { m } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Animation from '@/components/Animation';
import Button from '@/components/button';
import Tooltip from '@/components/Tooltip';
import { resumeButtonProps, externalLinks } from '@/constants/global';
import type { Tanimation } from '@/constants/typeInterface';
import { useMotionContext } from '@/hooks/useMotionContext';
import { useViewContext } from '@/hooks/useViewContext';
import profilePic from '@/images/profile.webp';
import { Provider } from '@radix-ui/react-tooltip';

const Hero = () => {
  const { prefersReducedMotion } = useMotionContext() ?? false;
  const { viewAmount } = useViewContext() ?? 0.65;
  const childAnimation: Tanimation = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : -50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', duration: 0.9, bounce: 0.4 },
    },
  };

  const containerAnimation: Tanimation = {
    ...childAnimation,
    show: {
      ...childAnimation.show,
      transition: {
        duration: 0.3,
        delayChildren: 0.7,
        staggerChildren: 0.3,
      },
    },
  };

  const anchorElements = Array.from(externalLinks).map(
    ([key, { Icon, url }]) => {
      return (
        <Tooltip key={key} side="top" tooltipText={key}>
          <Link aria-label={key} href={url} rel="noreferrer" target="_blank">
            <Icon className="icon cursor-pointer" size={30} data-testid={key} />
          </Link>
        </Tooltip>
      );
    }
  );

  return (
    <Animation
      animation={containerAnimation}
      viewAmount={viewAmount}
      className="mx-auto mb-28 grid w-11/12 max-w-7xl grid-cols-1 pt-32 md:grid-cols-3 md:grid-rows-3 md:items-center md:justify-evenly md:gap-x-8 md:pt-60 lg:mb-60 xl:grid-cols-4"
    >
      <m.aside
        variants={childAnimation}
        className={clsx(
          'z-10 mx-auto mb-8 h-72 w-48 overflow-hidden rounded-3xl shadow-dropdown dark:shadow-none',
          'md:order-last md:col-span-1 md:mb-0 md:mr-0 md:h-min md:w-full',
          'md:row-start-1 md:row-end-4 xl:col-span-2 xl:w-9/12'
        )}
      >
        <Image
          src={profilePic}
          alt="Profile Picture"
          placeholder="blur"
          priority
          className="z-20 transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </m.aside>
      <m.h1
        variants={childAnimation}
        className="mb-4 md:col-span-2 md:row-start-1 md:row-end-2 md:mb-0 md:text-4xl xl:text-5xl"
      >
        <span
          className={clsx('inline-block text-4xl xl:text-5xl', {
            'animate-none': prefersReducedMotion,
            'origin-wave animate-wave': !prefersReducedMotion,
          })}
        >
          👋
        </span>
        &nbsp;&nbsp;Hi there! I&apos;m{' '}
        <span className="bg-transparent bg-gradient-to-b from-aqua to-aqua bg-clip-text font-bold text-transparent transition-bgi duration-300 ease-out dark:bg-orange-gradient dark:text-transparent md:text-black-200">
          Nicholas
        </span>
        , I love to design and code beautifully simple things.
      </m.h1>
      <m.h2
        variants={childAnimation}
        className="mb-4 md:col-span-2 md:row-start-2 md:row-end-2 md:mb-0 md:text-2xl xl:text-3xl"
      >
        Nothing excites me more than learning something new and starting a new
        adventure.
      </m.h2>
      <m.div
        variants={childAnimation}
        className="md:col-span-2 md:row-start-3 md:row-end-4 xl:gap-y-10"
      >
        <h2 className="mb-4 md:mb-8 md:text-2xl xl:text-3xl">
          Currently looking out for opportunities.
        </h2>
        <div className="flex flex-row items-center justify-start gap-x-6">
          <Provider delayDuration={400}>{anchorElements}</Provider>
          <Button linkClass="md:text-2xl" {...resumeButtonProps} />
        </div>
      </m.div>
    </Animation>
  );
};

export default Hero;
