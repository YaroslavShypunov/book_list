'use client';
import Button from '@/components/form/button';
import { VARIANT } from '@/constants/button-parameters';
import { useAppDispatch } from '@/store/hooks';
import { GET_BOOK_BY_ID_REDUCER } from '@/store/reducers/home-page-reducer';
import React, { useCallback } from 'react';

interface IBookButton {
  id: string;
}

const BookButton = ({ id }: IBookButton) => {
  const dispatch = useAppDispatch();

  const handleEdit = useCallback(() => {
    dispatch(GET_BOOK_BY_ID_REDUCER(id));
  }, [dispatch, id]);

  return (
    <section className="opacity-0 pointer-events-none group-hover:pointer-events-auto flex group-hover:opacity-100 absolute bg-white/50 hover:bg-white/75 top-0 left-0 bottom-0 right-0 m-auto transition-all flex-col justify-center items-center">
      <Button onClick={handleEdit} variant={VARIANT.OUTLINED}>
        Edit
      </Button>
    </section>
  );
};

export default React.memo(BookButton);
