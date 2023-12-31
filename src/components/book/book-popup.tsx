'use client';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import React, { useCallback, useMemo } from 'react';
import Popup from '../popup';
import InputField from '../form/input-field';
import { Form, Formik, FormikValues } from 'formik';
import * as Yup from 'yup';
import Button from '../form/button';
import { COLOR, VARIANT } from '@/constants/button-parameters';
import SelectorField from '../form/selector-field';
import categories from '@/data/categories';
import {
  CREATE_BOOK_REDUCER,
  REMOVE_BOOK_REDUCER,
  TOGGLE_BOOK_POPUP_REDUCER,
  UPDATE_BOOK_REDUCER,
} from '@/store/reducers/home-page-reducer';
import { MOCK_IMAGE } from '@/data/books';

const requiredTitle = 'Field is required';
const BookSchema = () =>
  Yup.object().shape({
    name: Yup.string().required(requiredTitle),
    price: Yup.number().required(requiredTitle),
    description: Yup.string().required(requiredTitle),
    category: Yup.string().required(requiredTitle),
  });

const BookPopup = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector(state => state.HomePageReducer);
  const selectedBook = useMemo(() => data.selectedBook, [data]);
  const initialValues = useMemo(() => {
    const {
      name = '',
      price = 0,
      description = '',
      category = '',
      id = '',
    } = selectedBook || {};

    return {
      name,
      price,
      description,
      category,
      id,
    };
  }, [selectedBook]);
  const showRemoveButton = useMemo(() => !!selectedBook?.id, [selectedBook]);

  const handleSubmit = useCallback(
    (values: FormikValues) => {
      if (values.id) {
        dispatch(UPDATE_BOOK_REDUCER(values));
        return;
      }

      const newBook = {
        ...values,
        id: new Date().toISOString(),
        image: MOCK_IMAGE,
      };

      dispatch(CREATE_BOOK_REDUCER(newBook));
    },
    [dispatch],
  );

  const handleRemove = useCallback(() => {
    if (showRemoveButton) {
      dispatch(REMOVE_BOOK_REDUCER(initialValues.id));
    }
  }, [dispatch, initialValues, showRemoveButton]);

  const handleClose = useCallback(() => {
    dispatch(TOGGLE_BOOK_POPUP_REDUCER(false));
  }, [dispatch]);

  return (
    <Popup open={data.showBookPopup} title="Edit book" onClose={handleClose}>
      <div className="w-full mt-6">
        <Formik
          validationSchema={BookSchema()}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          <Form>
            <InputField id="name" label="Name" />
            <InputField id="price" label="Price" type="number" />
            <InputField id="description" label="Description" />
            <SelectorField
              id="category"
              label="Category"
              options={categories}
            />
            <section className="mt-8 gap-3 flex items-center">
              <Button type="submit">Save</Button>
              {showRemoveButton && (
                <Button
                  onClick={handleRemove}
                  variant={VARIANT.OUTLINED}
                  color={COLOR.WARNING}
                >
                  Remove
                </Button>
              )}
            </section>
          </Form>
        </Formik>
      </div>
    </Popup>
  );
};

export default React.memo(BookPopup);
