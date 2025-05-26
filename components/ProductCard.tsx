import { ALL_PRODUCTS_QUERYResult } from '@/sanity/types';
import Link from 'next/link';
import SanityImage from './SanityImage';
import clsx from 'clsx';

const ProductCard = ({
  className,
  ...props
}: NonNullable<ALL_PRODUCTS_QUERYResult>[number] & { className?: string }) => {
  const { name, mainImage, slug, price, colors } = props;

  if (!mainImage) return <p>Loading Image...</p>;

  const previewImage = mainImage[0];

  return (
    <Link
      href={`/catalog/${slug?.current}`}
      className={clsx('flex flex-col gap-4 group rounded-sm', className)}
    >
      {previewImage?.asset?.url && (
        <SanityImage
          alt={previewImage.alt || ''}
          imageUrl={previewImage.asset.url}
        />
      )}

      <div className="flex flex-col gap-2 text-center">
        <div className="flex gap-2 items-center justify-center">
          {colors?.map((color) => (
            <div
              key={color.colorName}
              style={{ backgroundColor: color.colorName as string }}
              className="border w-[20px] h-[20px] rounded-full  "
            />
          ))}
        </div>

        <p className="uppercase text-fs-200 ">{name}</p>
        <p>$ {price?.toLocaleString()}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
