'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import type { childrenNode } from '@/constants/typeInterface';

type TViewContext = {
  viewAmount: number;
};

const ViewContext = createContext(null as unknown as TViewContext);

export const useViewContext = () => useContext(ViewContext);

const ViewProvider = ({ children }: childrenNode) => {
  const [viewAmount, setViewAmount] = useState(0.65);

  // Check for window dimensions on first render or when dimensions are changed
  useEffect(() => {
    const handleResize = () =>
      setViewAmount(window.innerWidth <= 500 ? 0.35 : 0.65);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [viewAmount]);

  return (
    <ViewContext.Provider value={{ viewAmount }}>
      {children}
    </ViewContext.Provider>
  );
};

export default ViewProvider;
