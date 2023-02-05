'use client';

import React from 'react';
import Lottie from 'lottie-react';
import AboutMeLight from '../../public/animations/aboutme-light.json';

const AboutMe = () => {
  return (
    <section className="relative z-0 bg-dark-blue">
      <div className="aboutmeContainer">
        <div className="md:col-span-2 md:justify-self-start lg:col-span-1">
          <h2 className="text-blue text-xl font-bold mb-5 md:mb-0 md:text-3xl xl:text-4xl">
            👨 About Me
          </h2>
          <h1 className="text-white-300 font-bold mb-5 md:mb-0">
            Never too late to learn
          </h1>
        </div>
        <h4 className="aboutmeText">
          I always thought my dream was to be a licensed aircraft engineer, it
          seemed like an appropriate dream given my education path, but I always
          felt mundane.
        </h4>
        <h4 className="aboutmeText">
          It all changed when I had my first and only programming module in
          university, the fascination it produced when I wrote my 1st Hello
          World program on Python.
        </h4>
        <h4 className="aboutmeText">
          Since then, I have taken a liking in web development which comprises
          of problem-solving skills and creativity.
        </h4>
        <h4 className="aboutmeText font-semibold m-0">
          Graduated B.Eng. with Honours in Aircraft Systems Engineering, from{' '}
          <a className="cursor-pointer text-light-blue no-underline hover:underline hover:underline-offset-4">
            SIT
          </a>
          .
        </h4>
        <aside className="aboutmeAnimation">
          <Lottie animationData={AboutMeLight} />
        </aside>
      </div>
      <div className="dark-blue-gradient"></div>
    </section>
  );
};

export default AboutMe;
