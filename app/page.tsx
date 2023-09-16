import React from 'react';
import dynamic from 'next/dynamic';
import AboutMe from '@/sections/about-me/AboutMe';
import MainNavigation from '@/sections/navbar/MainNavigation';
import Splash from '@/sections/splash/Splash';

const Hero = dynamic(() => import('@/sections/hero/Hero'));
const ScrollToTop = dynamic(() => import('@/components/ScrollToTop'));
const Skills = dynamic(() => import('@/sections/skills/Skills'));
const Experience = dynamic(() => import('@/sections/experience/Experience'));
const Projects = dynamic(() => import('@/sections/projects/Projects'));
const Contact = dynamic(() => import('@/sections/contact/Contact'));
const Footer = dynamic(() => import('@/sections/footer/Footer'));

const Page = () => {
  return (
    <Splash>
      <div className="relative z-0">
        <div className="navbar-gradient"></div>
        <MainNavigation />
        <Hero />
        <AboutMe />
        <ScrollToTop />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </Splash>
  );
};

export default Page;
