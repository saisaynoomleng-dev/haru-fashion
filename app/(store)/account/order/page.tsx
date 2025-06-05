import { getAllOrder } from '@/lib/queries/getAllOrder';
import Bounded from '@/components/Bounded';
import RemoveBag from '@/components/RemoveBag';
import SanityImage from '@/components/SanityImage';
import Title from '@/components/Title';
import { Button } from '@/components/ui/button';
import { formatCurrency } from '@/lib/utils';
import { auth } from '@clerk/nextjs/server';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';

const OrderPage = async () => {
  const { userId } = await auth();

  if (!userId) redirect('/sign-in');
  const bags = await getAllOrder(userId);

  const productTotal = bags?.reduce((acc, bag) => {
    const price =
      typeof bag?.product?.price === 'number' ? bag?.product?.price : 0;
    acc += price;
    return acc;
  }, 0);

  let TAX = 0;
  if (productTotal) {
    TAX = (productTotal * 0.07) as number;
  }

  const TOTAL_PRICE = productTotal && productTotal + TAX;

  return (
    <Bounded className="add-padding">
      <Title as="h1" size="sm">
        Bag
      </Title>

      <div className="flex flex-col gap-2 divide-y-2 divide-brand-black/20">
        {bags?.map((bag) => {
          const mainImage = bag.product?.mainImage?.[0];
          const imageUrl = mainImage?.asset?.url as string;
          const altText = mainImage?.alt as string;

          return (
            <div
              className="grid grid-cols-[auto_1fr_auto] gap-3 md:gap-5 p-2 pb-5"
              key={bag.product?.slug?.current}
            >
              {imageUrl && (
                <SanityImage
                  imageUrl={imageUrl}
                  alt={altText}
                  className="max-w-[100px]"
                />
              )}

              <div className="flex flex-col gap-3">
                <p className="font-semibold capitalize">{bag.product?.name}</p>
                <p>${bag.product?.price?.toLocaleString()}</p>
              </div>

              <div className="flex flex-col gap-2 justify-end">
                <Link
                  href={`/catalog/${bag.product?.slug?.current}`}
                  className="bg-blue-400 text-brand-white rounded-sm"
                >
                  <Button>Check Product</Button>
                </Link>

                <RemoveBag
                  userId={userId as string}
                  productKey={bag._key as string}
                />
              </div>
            </div>
          );
        })}

        <div className="flex justify-between py-2">
          <p className="font-semibold">Products Total</p>
          <p className="font-semibold text-brand-black/70">
            {formatCurrency(productTotal ?? 0)}
          </p>
        </div>

        <div className="flex justify-between py-2">
          <p className="font-semibold">Tax</p>
          <p className="font-semibold text-brand-black/70">
            {formatCurrency(TAX)}
          </p>
        </div>

        <div className="flex justify-between py-2">
          <p className="font-semibold">Total Price</p>
          <p className="font-semibold">{formatCurrency(TOTAL_PRICE ?? 0)}</p>
        </div>
      </div>
    </Bounded>
  );
};

export default OrderPage;
