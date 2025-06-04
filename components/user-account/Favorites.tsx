import { sanityFetch } from '@/sanity/lib/live';
import { FAVORITE_QUERY, USER_QUERY } from '@/sanity/lib/queries';
import { auth } from '@clerk/nextjs/server';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import SanityImage from '../SanityImage';
import { formatDate } from '@/lib/utils';
import DeleteFav from '../DeleteFav';
import { Button } from '../ui/button';

const Favorites = async () => {
  const { userId } = await auth();

  if (!userId) redirect('/sign-in');

  const params = {
    userId,
  };

  const { data: fav } = await sanityFetch({
    query: FAVORITE_QUERY,
    params,
  });

  if (!fav) notFound();

  return (
    <div className="flex flex-col gap-2">
      {fav.favorites?.map((fav) => {
        const product = fav.product;
        const mainImage = product?.mainImage?.[0];
        const imageUrl = mainImage?.asset?.url as string;
        const altText = mainImage?.alt as string;

        return (
          <div
            key={fav.product?.slug?.current}
            className="border p-2 border-brand-black/10 rounded-sm grid grid-cols-[100px_1fr_auto] gap-x-2"
          >
            {mainImage && (
              <SanityImage
                imageUrl={imageUrl}
                alt={altText}
                className="max-w-[100px]"
              />
            )}

            <div className="flex flex-col justify-around gap-2">
              <p className="font-semibold text-fs-200 capitalize">
                {product?.name}
              </p>
              <p>$ {product?.price?.toLocaleString()}</p>
              <p className="text-sm">
                Added on {formatDate(fav.addedAt as string)}
              </p>
            </div>

            <div className="flex flex-col justify-end gap-2">
              <Link
                href={`catalog/${fav.product?.slug?.current}`}
                className="bg-blue-400 text-brand-white rounded-sm"
              >
                <Button>Check Product</Button>
              </Link>
              <DeleteFav userId={userId} productKey={fav._key} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Favorites;
