import type { ReactElement } from 'react';
import type { Tanimation } from '@/constants/typeInterface';
import { LazyMotion, m } from 'framer-motion';

const loadFeatures = () =>
  import('@/constants/features').then((res) => res.default);

type staggerProps = {
  className: string;
  children: ReactElement[] | ReactElement;
  viewAmount: number | 'all' | 'some' | undefined;
  animation: Tanimation;
};

const Animation = ({
  animation,
  className,
  viewAmount,
  children,
}: staggerProps) => {
  return (
    <LazyMotion features={loadFeatures} strict>
      <m.div
        variants={animation}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: viewAmount }}
        className={className}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
};

export default Animation;
