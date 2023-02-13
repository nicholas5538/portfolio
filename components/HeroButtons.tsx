import React from 'react';
import { externalLinks } from '../constants/global';
import { useThemeContext } from '@/hooks/useThemeContext';

const HeroButtons = () => {
  const { darkMode } = useThemeContext() ?? false;

  const anchorElements = Object.entries(externalLinks).map(
    ([name, { Icon, url }], index) => {
      return (
        <div
          key={index}
          className="tooltip tooltip-bottom tooltip-info ml-2 dark:tooltip-warning md:tooltip-top md:ml-0"
          data-tip={name}
        >
          <a href={url} rel="noreferrer" target="_blank">
            <Icon
              size={40}
              color={`${darkMode ? '#DEE2E6' : '#343434'}`}
              className="cursor-pointer"
            />
          </a>
        </div>
      );
    }
  );

  return (
    <div className="flex flex-row items-center justify-start gap-x-6">
      {anchorElements}
      <button
        type="button"
        className="rounded-2xl bg-aqua px-4 py-2 transition-colors duration-300 ease-out hover:bg-dark-aqua dark:bg-light-orange dark:hover:bg-orange-red"
      >
        <a
          href="#"
          rel="noreferrer"
          target="_blank"
          className="h-full w-full text-lg tracking-widest text-white-400 no-underline hover:no-underline dark:text-black-300 md:text-2xl"
        >
          Resume
        </a>
      </button>
    </div>
  );
};

export default HeroButtons;
