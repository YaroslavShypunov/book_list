'use client';
import { FormikProps, FormikValues, useFormikContext } from 'formik';
import React, { useMemo } from 'react';

interface IError {
  id: string;
}

const Error = ({ id }: IError) => {
  const { errors, touched }: FormikProps<FormikValues> = useFormikContext();
  const isTouched = useMemo(() => touched[id], [touched, id]);
  const error = useMemo(
    () => (isTouched && errors[id]) as string,
    [isTouched, errors, id],
  );

  if (!error) {
    return null;
  }

  return <p className="text-error text-xs mt-1">{error}</p>;
};

export default Error;
