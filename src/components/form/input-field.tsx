'use client';
import { FormikProps, FormikValues, useFormikContext } from 'formik';
import React, { useMemo } from 'react';
import FieldGroup from './field-group';
import { IInitialField } from '@/models/form-models';

interface IInputField extends IInitialField {
  placeholder?: string;
  type?: string;
}

const InputField = ({ id, label, placeholder, type }: IInputField) => {
  const { values, handleChange, handleBlur }: FormikProps<FormikValues> =
    useFormikContext();
  const value = useMemo(() => values[id], [values, id]);

  return (
    <FieldGroup id={id} label={label}>
      <input
        type={type}
        id={id}
        className="field"
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
      />
    </FieldGroup>
  );
};

export default React.memo(InputField);
