'use client';
import { ROUTES } from '@/constants/routes';
import { IBook } from '@/models/book-models';
import Image from 'next/image';
import Link from 'next/link';
import React, { useMemo } from 'react';
import BookButton from './book-button';

interface IBookCard extends IBook {
  index: number;
}

const BookCard = ({
  name,
  category,
  price,
  slug,
  image,
  id,
  index,
}: IBookCard) => {
  const route = useMemo(() => `${ROUTES.BOOKS}/${slug}`, [slug]);
  // priority is used to load images on the first screen
  const isPriority = useMemo(() => index < 6, [index]);

  return (
    <div className="group relative">
      <div className="relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none h-80">
        <Image
          src={image}
          alt={name}
          className="object-cover w-full h-full"
          width={600}
          height={400}
          priority={isPriority}
        />
        <BookButton id={id} />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700 hover:text-secondary transition-all">
            <Link href={route}>{name}</Link>
          </h3>
          <p className="mt-1 text-sm text-category">{category}</p>
        </div>
        <p className="text-sm font-medium">${price}</p>
      </div>
    </div>
  );
};

export default React.memo(BookCard);
