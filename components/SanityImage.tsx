import { urlFor } from '@/sanity/lib/image';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

const SanityImage = ({
  imageUrl,
  alt,
  className,
}: {
  imageUrl: string;
  alt: string;
  className?: string;
}) => {
  return (
    <div className="overflow-hidden max-w-fit">
      <Image
        src={urlFor(imageUrl).width(400).height(400).format('webp').url()}
        width={300}
        height={300}
        alt={alt}
        className={clsx(
          'w-full group-hover:scale-[1.03] transition-transform duration-300 ease-in-out rounded-sm',
          className,
        )}
        priority
      />
    </div>
  );
};

export default SanityImage;
