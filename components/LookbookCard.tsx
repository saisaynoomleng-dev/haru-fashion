import { LOOKBOOKS_QUERYResult } from '@/sanity/types';
import clsx from 'clsx';
import Link from 'next/link';
import SanityImage from './SanityImage';
import { formatDate } from '@/lib/utils';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

const LookbookCard = ({
  className,
  ...props
}: { className?: string } & NonNullable<LOOKBOOKS_QUERYResult>[number]) => {
  const { slug, title, subtitle, category, mainImage, publishedAt } = props;
  return (
    <Link
      href={`/look-book/${slug?.current}`}
      className={clsx('grid grid-cols-2 gap-3 group', className)}
    >
      {mainImage?.asset?.url && (
        <div className="overflow-hidden">
          <Image
            src={urlFor(mainImage?.asset?.url)
              .width(1200)
              .height(800)
              .format('webp')
              .url()}
            width={1200}
            height={800}
            alt={mainImage?.alt as string}
            className={clsx(
              'w-full group-hover:scale-[1.03] transition-transform duration-300 ease-in-out rounded-sm group-hover:opacity-90',
            )}
            priority
          />
        </div>
      )}

      <div className="flex flex-col gap-5">
        <p>{category?.name}</p>
        <p className="uppercase text-fs-400">{title}</p>
        <p className="text-brand-black/50">
          {publishedAt && formatDate(publishedAt)}
        </p>
        <p className="text-fs-200">{subtitle}</p>
      </div>
    </Link>
  );
};

export default LookbookCard;
