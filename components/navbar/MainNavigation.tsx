'use client';

import React, { useState } from 'react';
import DropdownMenu from './DropdownMenu';
import { IconMoodSmileBeam } from '@tabler/icons-react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const MainNavigation = () => {
  const [isDarkMode, setDarkMode] = useState<boolean>(false);

  return (
    <nav className="relative w-screen">
      <div className="relative flex flex-row justify-between items-center mx-auto py-8 w-11/12">
        <DropdownMenu />
        <div className="flex flex-row items-center gap-x-2">
          <h1 className="font-mont text-white-300 font-bold tracking-widest">
            NICHOLAS
          </h1>
          <IconMoodSmileBeam
            size={24}
            color="#F8F8F8"
            className="hidden sm:block"
          />
        </div>
        <DarkModeSwitch
          checked={isDarkMode}
          onChange={(checked: boolean) => setDarkMode(checked)}
          sunColor={'#F8F8F8'}
          moonColor={'#EB7F13'}
        />
      </div>
      <div className="absolute -z-10 -top-12 -left-12 -rotate-12 bg-gradient-to-b from-blue-gradient-1 to-blue-gradient-2 w-[calc(100%+5rem)] h-80"></div>
    </nav>
  );
};

export default MainNavigation;
