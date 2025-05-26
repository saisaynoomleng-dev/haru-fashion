'use client';

import { PRODUCT_QUERYResult } from '@/sanity/types';
import React, { useState } from 'react';
import SanityImage from './SanityImage';
import clsx from 'clsx';

const ProductImages = ({
  images,
}: {
  images: NonNullable<PRODUCT_QUERYResult>['mainImage'];
}) => {
  const [currentImage, setCurrentImage] = useState<number>(0);

  if (!images || images.length === 0) return null;

  return (
    <div className="grid md:grid-cols-[1fr_100px] gap-2  max-md:max-w-[300px] max-md:mx-auto ">
      <div className="relative max-w-[300px]">
        <div className="absolute flex gap-3 bottom-1 px-2 w-full z-10">
          {Array.from({ length: images.length }).map((_, i) => (
            <button
              key={i}
              className={clsx(
                'h-2 rounded-sm flex-1 cursor-pointer transition-colors duration-300 ease',
                currentImage == i ? 'bg-blue-500' : 'bg-blue-500/30',
              )}
              onClick={() => setCurrentImage(i)}
            ></button>
          ))}
        </div>

        {images && (
          <SanityImage
            imageUrl={images[currentImage].asset?.url as string}
            alt={images[currentImage].alt || ''}
            className="relative w-[320px] "
          />
        )}
      </div>

      <div className="flex flex-row md:flex-col gap-2 overflow-auto scroll-smooth hide-scrollbar">
        {images?.map((image, i) => (
          <button
            key={i}
            onClick={() => setCurrentImage(i)}
            className={clsx(
              'cursor-pointer transition-opacity duration-300 ease rounded-sm',
              currentImage == i
                ? 'opacity-100 border-2 border-blue-300'
                : 'opacity-50',
            )}
            aria-label={`View Image: ${image.alt || `image ${i + 1}`}`}
          >
            <SanityImage
              imageUrl={image.asset?.url as string}
              alt={image.alt || `Product Image ${currentImage + 1}`}
              className="max-w-[100px]"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
