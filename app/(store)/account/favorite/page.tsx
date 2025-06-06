import AddBag from '@/components/AddBag';
import Bounded from '@/components/Bounded';
import DeleteFav from '@/components/DeleteFav';
import SanityImage from '@/components/SanityImage';
import Title from '@/components/Title';
import { Button } from '@/components/ui/button';
import { formatDate } from '@/lib/utils';
import { sanityFetch } from '@/sanity/lib/live';
import { FAVORITE_QUERY } from '@/sanity/lib/queries';
import { auth } from '@clerk/nextjs/server';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const FavoritePage = async () => {
  const { userId } = await auth();

  if (!userId) redirect('/sign-in');

  const params = {
    userId,
  };

  const { data: fav } = await sanityFetch({
    query: FAVORITE_QUERY,
    params,
  });

  return (
    <Bounded className="add-padding">
      <Title as="h1" size="md">
        Favorite Products
      </Title>

      <div className="flex flex-col gap-3">
        {fav?.favorites?.map((fav) => {
          const product = fav.product;
          const mainImage = product?.mainImage?.[0];
          const imageUrl = mainImage?.asset?.url as string;
          const altText = mainImage?.alt as string;

          return (
            <div
              key={product?.slug?.current}
              className="border border-brand-black/10 rounded-sm p-2 grid grid-cols-2 md:grid-cols-[auto_1fr_auto] gap-x-2 md:gap-x-4 gap-y-3"
            >
              {imageUrl && (
                <SanityImage
                  imageUrl={imageUrl}
                  alt={altText}
                  className="row-start-1 row-end-3 place-self-center"
                />
              )}

              <div className="flex flex-col justify-around">
                <Title as="h3" className="text-fs-400 capitalize font-medium">
                  {product?.name}
                </Title>
                <p>${product?.price?.toLocaleString()}</p>
                <p className="text-sm font-medium">
                  Added on {formatDate(fav.addedAt as string)}
                </p>
              </div>

              <div className="flex flex-col gap-2 justify-end col-span-full place-self-end md:col-start-3">
                <Link
                  href={`/catalog/${product?.slug?.current}`}
                  className="bg-blue-400 text-brand-white rounded-sm"
                >
                  <Button>Check Product</Button>
                </Link>

                <div className="flex gap-2">
                  <AddBag userId={userId} productId={fav.product?._id || ''} />
                  <DeleteFav userId={userId} productKey={fav._key} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Bounded>
  );
};

export default FavoritePage;
