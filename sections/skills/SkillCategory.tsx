import React from 'react';
import { m } from 'framer-motion';
import Tooltip from '@/components/Tooltip';
import type { TIcons } from '@/constants/skill-icons';
import type { Tvariants } from '@/constants/typeInterface';

const SkillCategory = ({
  heading,
  icons,
  containerAnimation,
  childAnimation,
}: TIcons & Tvariants) => {
  const tooltipSide = icons.has('ps') || icons.has('figma') ? 'right' : 'top';

  return (
    <>
      <h3 className="white-sub-heading font-medium opacity-80 dark:text-white-100 dark:opacity-100">
        {heading}
      </h3>
      <m.div
        variants={containerAnimation}
        className="mb-2 flex flex-row flex-wrap gap-x-4 gap-y-4 ipad-mini:gap-y-0 lg:mb-4"
      >
        {Array.from(icons).map(([key, { Icon, tooltipText }]) => {
          return (
            <m.div variants={childAnimation} key={key}>
              <Tooltip side={tooltipSide} tooltipText={tooltipText}>
                <i>
                  <Icon size={30} className="icon" />
                </i>
              </Tooltip>
            </m.div>
          );
        })}
      </m.div>
    </>
  );
};

export default SkillCategory;
