import Container from '@/components/layout/container';
import Image from 'next/image';
import React from 'react';
import books from '@/data/books';
import { notFound } from 'next/navigation';

interface IBookDetailsPage {
  params: {
    slug: string;
  };
}

const getBook = (slug: string) => {
  const book = books.find(book => book.slug === slug);

  if (!book) {
    notFound();
  }

  return book;
};

// generateMetadata is a next.js function that allows you to generate metadata for a page
export const generateMetadata = async ({ params }: IBookDetailsPage) => {
  const book = getBook(params.slug);

  return {
    title: book.name,
    description: 'Here is the lorem ipsum',
  };
};

const BookDetailsPage = ({ params }: IBookDetailsPage) => {
  const book = getBook(params.slug);
  const { name, image, description, price, category } = book;

  return (
    <>
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="relative h-[50vh] overflow-hidden rounded-md">
          <Image
            src={image}
            alt={name}
            className="object-cover w-full h-full"
            width={1200}
            height={800}
          />
        </div>
        <div>
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-lg">{name}</h1>
              <p className="text-sm text-category">Category: {category}</p>
            </div>
            <p className="text-xl font-medium">${price}</p>
          </div>
          <hr className="my-6 bg-secondary border-none h-px" />
          <div>
            <h2 className="text-sm font-bold mb-2">Description</h2>
            <p className="text-sm text-category">{description}</p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default React.memo(BookDetailsPage);
