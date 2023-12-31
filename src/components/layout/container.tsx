import clsx from 'clsx';
import React, { ReactNode } from 'react';

interface IContainer {
  children: ReactNode;
  className?: string;
}

const Container = ({ className = '', children }: IContainer) => {
  return (
    <section
      className={clsx('px-4 sm:px-6 lg:px-8 mx-auto lg:max-w-7xl', {
        [className]: !!className,
      })}
    >
      {children}
    </section>
  );
};

export default React.memo(Container);
