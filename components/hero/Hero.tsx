'use client';

import React from 'react';
import Image from 'next/image';
import profilePic from '../../public/profile-light.webp';
import HeroButtons from './HeroButtons';
import { LazyMotion, domAnimation, m } from 'framer-motion';

const Hero = () => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ type: 'spring', duration: 1, bounce: 0.4 }}
        variants={{
          visible: { x: 0, opacity: 1 },
          hidden: { x: '-100%', opacity: 0 },
        }}
        className="heroSection"
      >
        <Image src={profilePic} alt="Profile Picture" className="profilePic" />
        <h1 className="mb-4 md:mb-8 md:text-4xl md:col-span-2 md:row-start-1 md:row-end-2 xl:text-5xl">
          <span className="waving">👋</span>
          &nbsp;&nbsp;Hi there! I&apos;m{' '}
          <span className="text-aqua font-bold md:text-black-200">
            Nicholas
          </span>
          , I love to design and code beautifully simple things
        </h1>
        <h3 className="mb-4 md:text-2xl md:col-span-2 md:row-start-2 md:row-end-2 xl:text-3xl">
          Nothing excites me more than learning something new and starting a new
          adventure.
        </h3>
        <div className="flex flex-col justify-start gap-y-6 xl:gap-y-10">
          <h3 className="md:-mt-8 md:text-2xl md:col-span-2 md:row-start-3 md:row-end-4 xl:text-3xl">
            Currently working as a SWE Trainee @{' '}
            <a
              href="https://www.foodpanda.com"
              rel="noreferrer"
              target="_blank"
            >
              foodpanda
            </a>
          </h3>
          <HeroButtons />
        </div>
      </m.div>
    </LazyMotion>
  );
};

export default Hero;
