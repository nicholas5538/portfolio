'use client';

import type { childrenNode } from '@/constants/typeInterface';
import { useReducedMotion } from 'framer-motion';
import { createContext, useContext, useEffect, useState } from 'react';

type TreducedMotion = {
  prefersReducedMotion: boolean | null;
  windowWidth: number;
};

const MotionContext = createContext(null as unknown as TreducedMotion);

export const useMotionContext = () => {
  return useContext(MotionContext);
};

const MotionProvider = ({ children }: childrenNode) => {
  const prefersReducedMotion = useReducedMotion();
  const [windowWidth, setWindowWidth] = useState(0);

  // Check for window dimensions on first render or when dimensions are changed
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [windowWidth]);

  return (
    <MotionContext.Provider value={{ prefersReducedMotion, windowWidth }}>
      {children}
    </MotionContext.Provider>
  );
};

export default MotionProvider;
