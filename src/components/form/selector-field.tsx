'use client';
import React, { useMemo } from 'react';
import FieldGroup from './field-group';
import { FormikProps, FormikValues, useFormikContext } from 'formik';
import { IInitialField } from '@/models/form-models';

interface ISelector extends IInitialField {
  options: string[];
}

const Selector = ({ id, label, options = [] }: ISelector) => {
  const { values, handleChange, handleBlur }: FormikProps<FormikValues> =
    useFormikContext();
  const value = useMemo(() => values[id], [values, id]);

  return (
    <FieldGroup id={id} label={label}>
      <select
        id={id}
        value={value}
        onBlur={handleBlur}
        onChange={handleChange}
        className="field"
      >
        <option value={''}>Nothing</option>
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </FieldGroup>
  );
};

export default React.memo(Selector);
