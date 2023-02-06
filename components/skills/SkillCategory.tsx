import React from 'react';
import { TIcons } from './common';
import { goodDesignIcons, averageDesignIcons } from './common';

const createButtonElements = (icons: TIcons['icons']) =>
  icons.map(({ Icon, tooltipText: tooltipText }, index) => {
    return (
      <div
        key={index}
        className={`tooltip tooltip-info ${
          icons === goodDesignIcons || icons === averageDesignIcons
            ? 'tooltip-right'
            : 'tooltip-top'
        }`}
        data-tip={tooltipText}
      >
        <button type="button">
          <Icon key={index} size={40} color="#343434" />
        </button>
      </div>
    );
  });

const SkillCategory = ({ heading, icons }: TIcons) => {
  return (
    <div>
      <h3 className="opacity-80 font-medium mb-2 md:text-2xl xl:text-3xl">
        {heading}
      </h3>
      <div className="flex flex-row flex-wrap gap-x-4 mb-2">
        {createButtonElements(icons)}
      </div>
    </div>
  );
};

export default SkillCategory;
