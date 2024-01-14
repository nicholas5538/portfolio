import React, { useRef, useState } from 'react';
import { useOutsideAlerter } from '@/hooks/useOutsideAlerter';
import Hamburger from './Hamburger';
import DropdownUl from './DropdownUl';

const DropdownMenu = () => {
  const [isMenuClicked, setMenuClicked] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const props = { isMenuClicked, setMenuClicked };
  useOutsideAlerter(dropdownRef, () => setMenuClicked(false));

  return (
    <div ref={dropdownRef} className="lg:hidden">
      <Hamburger {...props} />
      <DropdownUl {...props} />
    </div>
  );
};

export default DropdownMenu;
