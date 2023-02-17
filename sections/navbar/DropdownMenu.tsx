import React, { useState } from 'react';
import Hamburger from './Hamburger';
import DropdownUl from './DropdownUl';
import { TscrollDirection } from '@/constants/typeInterface';

const DropdownMenu = ({ scrollDirection }: TscrollDirection) => {
  const [isMenuClicked, setMenuClicked] = useState<boolean>(false);

  return (
    <div className="lg:hidden">
      <Hamburger
        isMenuClicked={isMenuClicked}
        setMenuClicked={setMenuClicked}
      />
      <DropdownUl
        isMenuClicked={isMenuClicked}
        setMenuClicked={setMenuClicked}
        scrollDirection={scrollDirection}
      />
    </div>
  );
};

export default DropdownMenu;
