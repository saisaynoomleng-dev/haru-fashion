'use client';

import { LOOKBOOKS_QUERYResult } from '@/sanity/types';
import Title from './Title';
import Link from 'next/link';
import { SlideInEffect, SlideInGroup } from './Animation';

type LookBookSectionProps = {
  books: LOOKBOOKS_QUERYResult;
};

const LookBookSection = ({ books }: LookBookSectionProps) => {
  return (
    <div className="flex flex-col gap-y-8 md:gap-y-12">
      <SlideInEffect direction="top">
        <Title as="h3" size="md" className="uppercase text-center">
          Look Book
        </Title>
      </SlideInEffect>

      <SlideInGroup
        direction="top"
        className="min-w-full flex justify-center items-center gap-3 overflow-x-hidden"
      >
        {books.map((book) => (
          <Link
            key={book.slug?.current}
            href={`/look-book/${book.slug?.current}`}
            className="vertical-text font-semibold relative z-20"
          >
            {book.title}
          </Link>
        ))}
      </SlideInGroup>
    </div>
  );
};

export default LookBookSection;
