import React, { useState } from 'react';
import Hamburger from './Hamburger';
import DropdownUl from './DropdownUl';

const DropdownMenu = () => {
  const [isMenuClicked, setMenuClicked] = useState<boolean>(false);

  return (
    <>
      <Hamburger
        isMenuClicked={isMenuClicked}
        setMenuClicked={setMenuClicked}
      />
      <DropdownUl
        isMenuClicked={isMenuClicked}
        setMenuClicked={setMenuClicked}
      />
    </>
  );
};

export default DropdownMenu;
