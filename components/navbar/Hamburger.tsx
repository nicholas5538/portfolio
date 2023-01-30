import React from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';

type HamburgerProps = {
  isMenuClicked: boolean;
  setMenuClicked: React.Dispatch<React.SetStateAction<boolean>>;
};

const Hamburger = ({ isMenuClicked, setMenuClicked }: HamburgerProps) => {
  const clickHandler = () => {
    setMenuClicked((prevState) => !prevState);
  };

  const variant = isMenuClicked ? 'click' : 'unclick';
  const variantType = {
    top: {
      unclick: {
        rotate: 0,
        translateY: 0,
      },
      click: {
        rotate: 45,
        translateY: 10,
      },
    },
    center: {
      unclick: {
        x: 0,
      },
      click: {
        x: -100,
      },
    },
    bottom: {
      unclick: {
        rotate: 0,
        translateY: 0,
      },
      click: {
        rotate: -45,
        translateY: -10,
      },
    },
  };
  const transitionType = { type: 'spring', duration: 0.4, bounce: 0.5 };

  return (
    <div className="cursor-pointer h-full" onClick={clickHandler}>
      <LazyMotion features={domAnimation}>
        <m.div
          animate={variant}
          variants={variantType.top}
          transition={transitionType}
          className="w-8 h-[2px] bg-white-100"
        />
        <m.div
          animate={variant}
          variants={variantType.center}
          transition={transitionType}
          className="my-2 w-8 h-[2px] bg-white-100"
        />
        <m.div
          animate={variant}
          variants={variantType.bottom}
          transition={transitionType}
          className="w-8 h-[2px] bg-white-100"
        />
      </LazyMotion>
    </div>
  );
};

export default Hamburger;
