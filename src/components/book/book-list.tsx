'use client';
import React from 'react';
import Container from '../layout/container';
import { useAppSelector } from '@/store/hooks';
import BookCard from './card/book-card';

const BookList = () => {
  const { data } = useAppSelector(state => state.HomePageReducer);

  if (!data?.books?.length) {
    return null;
  }

  return (
    <Container>
      <section className="mt-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {data.books.map(({ name, category, image, price, slug, id }, key) => (
          <BookCard
            key={id}
            name={name}
            category={category}
            image={image}
            slug={slug}
            price={price}
            id={id}
            index={key}
          />
        ))}
      </section>
    </Container>
  );
};

export default React.memo(BookList);
