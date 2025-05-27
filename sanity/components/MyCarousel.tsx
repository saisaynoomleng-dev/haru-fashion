'use client';

import Image from 'next/image';
import { urlFor } from '../lib/image';
import { useState } from 'react';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import clsx from 'clsx';

interface CarouselImage {
  asset: {
    _ref: string;
    url?: string;
  };
  alt?: string;
}

interface MyCarouselProps {
  images: CarouselImage[];
}

const MyCarousel: React.FC<MyCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const previous = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="relative px-3 md:px-5">
        <button
          onClick={previous}
          className="absolute left-3 top-[50%] translate-y-[-50%]"
        >
          <MdNavigateBefore className="size-10" />
        </button>
        <Image
          src={urlFor(images[currentIndex].asset._ref).format('webp').url()}
          alt={images[currentIndex].alt as string}
          width={200}
          height={400}
          priority
          className="mx-auto rounded-sm"
        />
        <button
          onClick={next}
          className="absolute right-3 top-[50%] translate-y-[-50%]"
        >
          <MdNavigateNext className="size-10" />
        </button>
      </div>

      <div className="flex gap-2 overflow-x-scroll hide-scrollbar">
        {images.map((img, i) => (
          <button key={i} onClick={() => setCurrentIndex(i)}>
            <Image
              src={urlFor(img.asset._ref)
                .width(100)
                .height(200)
                .format('webp')
                .url()}
              alt={img.alt as string}
              width={300}
              height={500}
              priority
              className={clsx(
                'rounded-sm',
                currentIndex === i && 'border-red-500 border',
              )}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default MyCarousel;
