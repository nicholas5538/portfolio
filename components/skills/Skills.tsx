'use client';

import React, { lazy } from 'react';
import {
  goodCodingIcons,
  goodDesignIcons,
  averageCodingIcons,
  averageDesignIcons,
} from './common';
import SkillCategory from './SkillCategory';
import SkillsLight from '../../public/animations/skills-light.json';

const Lottie = lazy(() => import('lottie-react'));

const Skills = () => {
  return (
    <section>
      <div className="skillsContainer">
        <h2 className="skillsHeading">💪 Skills</h2>
        <div>
          <h3 className="skillsSubHeading">I am not that bad with:</h3>
          <SkillCategory heading="coding" icons={goodCodingIcons} />
          <SkillCategory heading="design" icons={goodDesignIcons} />
        </div>
        <div>
          <h3 className="skillsSubHeading">I have played around with</h3>
          <SkillCategory heading="coding" icons={averageCodingIcons} />
          <SkillCategory heading="design" icons={averageDesignIcons} />
        </div>
        <aside className="skillsAnimation">
          <Lottie animationData={SkillsLight} />
        </aside>
      </div>
    </section>
  );
};

export default Skills;
