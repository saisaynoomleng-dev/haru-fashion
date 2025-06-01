'use client';

import { LOOKBOOKS_QUERYResult } from '@/sanity/types';
import Title from './Title';
import Link from 'next/link';

type LookBookSectionProps = {
  books: LOOKBOOKS_QUERYResult;
};

const LookBookSection = ({ books }: LookBookSectionProps) => {
  return (
    <div className="flex flex-col gap-y-8 md:gap-y-12">
      <Title as="h3" size="md" className="uppercase text-center">
        Look Book
      </Title>

      <div className="min-w-full flex justify-center items-center gap-3">
        {books.map((book) => (
          <Link
            key={book.slug?.current}
            href={`/look-book/${book.slug?.current}`}
            className="vertical-text font-semibold"
          >
            {book.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LookBookSection;
