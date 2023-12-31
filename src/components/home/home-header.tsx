'use client';
import React, { useCallback } from 'react';
import Button from '../form/button';
import Container from '../layout/container';
import { useAppDispatch } from '@/store/hooks';
import { TOGGLE_BOOK_POPUP_REDUCER } from '@/store/reducers/home-page-reducer';

const HomeHeader = () => {
  const dispatch = useAppDispatch();

  const handleShowBookPopup = useCallback(() => {
    dispatch(TOGGLE_BOOK_POPUP_REDUCER(true));
  }, [dispatch]);

  return (
    <header>
      <Container className="flex gap-4 items-center">
        <h1 className="text-xl">Your list of the books</h1>
        <Button onClick={handleShowBookPopup}>Add new</Button>
      </Container>
    </header>
  );
};

export default React.memo(HomeHeader);
