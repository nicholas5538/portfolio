'use client';

import React, { lazy } from 'react';
import AboutMeLight from '../../public/animations/aboutme-light.json';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import {
  childAnimation as aboutMeBody,
  parentAnimation as aboutMeMain,
} from '@/constants/global';

const Lottie = lazy(() => import('lottie-react'));

const AboutMe = () => {
  return (
    <section className="relative z-0 bg-dark-blue">
      <LazyMotion features={domAnimation}>
        <m.div
          variants={aboutMeMain}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.025 }}
          className="aboutmeContainer"
        >
          <m.div
            variants={aboutMeBody}
            className="md:col-span-2 md:justify-self-start"
          >
            <h2 className="text-blue text-xl font-bold mb-5 md:mb-0 md:text-3xl xl:text-4xl">
              👨 About Me
            </h2>
            <h2 className="text-white-300 font-bold mb-5 md:mb-0 md:text-3xl xl:text-4xl">
              Never too late to learn
            </h2>
          </m.div>
          <m.h4 variants={aboutMeBody} className="aboutmeText">
            I always thought my dream was to be a licensed aircraft engineer, it
            seemed like an appropriate dream given my education path, but I
            always felt mundane.
          </m.h4>
          <m.h4 variants={aboutMeBody} className="aboutmeText">
            It all changed when I had my first and only programming module in
            university, the fascination it produced when I wrote my 1st Hello
            World program on Python.
          </m.h4>
          <m.h4 variants={aboutMeBody} className="aboutmeText">
            Since then, I have taken a liking in web development which comprises
            of problem-solving skills and creativity.
          </m.h4>
          <m.h4
            variants={aboutMeBody}
            className="aboutmeText font-semibold m-0"
          >
            Graduated B.Eng. with Honours in Aircraft Systems Engineering, from{' '}
            <a className="cursor-pointer text-light-blue no-underline hover:underline hover:underline-offset-4">
              SIT
            </a>
            .
          </m.h4>
          <m.aside variants={aboutMeBody} className="aboutmeAnimation">
            <Lottie animationData={AboutMeLight} />
          </m.aside>
        </m.div>
      </LazyMotion>
      <div className="dark-blue-gradient"></div>
    </section>
  );
};

export default AboutMe;
