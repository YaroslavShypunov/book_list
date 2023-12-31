import React, { ReactNode } from 'react';

interface IModal {
  children: ReactNode;
}

const Modal = ({ children }: IModal) => {
  return (
    <section className="relative z-10">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        {children}
      </div>
    </section>
  );
};

export default React.memo(Modal);
