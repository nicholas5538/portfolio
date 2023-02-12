'use client';

import React, { lazy, useEffect, useState } from 'react';
import { childrenNode } from '@/constants/typeInterface';
import LoadingAnimation from '../../public/animations/loading.json';
import { AnimatePresence, motion } from 'framer-motion';
import { Tanimation } from '@/constants/typeInterface';

const Lottie = lazy(() => import('lottie-react'));

const Splash = ({ children }: childrenNode) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let changeLoadingState = setTimeout(() => setLoading(false), 4000);

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
        <AnimatePresence mode="wait">
          <motion.div
            variants={exitSplash}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="grid place-items-center bg-black-300 w-screen h-screen"
          >
            <Lottie
              animationData={LoadingAnimation}
              className="max-w-[300px] max-h-[300px]"
            />
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};

export default Splash;