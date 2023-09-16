'use client';

import React, { lazy, useEffect, useState } from 'react';
import type { childrenNode } from '@/constants/typeInterface';
import LoadingAnimation from '../../public/animations/loading.json';
import { AnimatePresence, LazyMotion, m } from 'framer-motion';
import type { Tanimation } from '@/constants/typeInterface';

const loadFeatures = () =>
  import('../../constants/features').then((res) => res.default);
const Lottie = lazy(() => import('lottie-light-react'));

const Splash = ({ children }: childrenNode) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let changeLoadingState = setTimeout(() => setLoading(false), 3000);

    return () => clearTimeout(changeLoadingState);
  }, []);

  const exitSplash: Tanimation = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <>
      {!loading ? (
        children
      ) : (
        <LazyMotion features={loadFeatures} strict>
          <AnimatePresence mode="wait">
            <m.div
              variants={exitSplash}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="grid h-screen w-screen place-items-center bg-white-400 dark:bg-black-300"
            >
              <Lottie
                animationData={LoadingAnimation}
                className="max-h-[300px] max-w-[300px]"
              />
            </m.div>
          </AnimatePresence>
        </LazyMotion>
      )}
    </>
  );
};

export default Splash;
