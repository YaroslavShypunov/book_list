import React, { ReactNode } from 'react';
import Label from './label';
import Error from './error';

interface IFieldGroup {
  id: string;
  label: string;
  children: ReactNode;
}

const FieldGroup = ({ label, id, children }: IFieldGroup) => {
  return (
    <div className="mb-2">
      <Label id={id}>{label}</Label>
      {children}
      <Error id={id} />
    </div>
  );
};

export default React.memo(FieldGroup);
