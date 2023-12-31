import React, { ReactNode } from 'react';

interface ILabel {
  id: string;
  children: ReactNode;
}

const Label = ({ id, children }: ILabel) => {
  return (
    <label htmlFor={id} className="block mb-2 text-sm font-medium">
      {children}
    </label>
  );
};

export default React.memo(Label);
