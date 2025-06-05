import { sanityFetch } from '@/sanity/lib/live';
import { LATEST_PRODUCTS_QUERY } from '@/sanity/lib/queries';
import React from 'react';
import ProductCard from './ProductCard';
import Title from './Title';
import Link from 'next/link';
import { Button } from './ui/button';
import { SlideInEffect } from './Animation';

const LatestProduct = async () => {
  const { data: products } = await sanityFetch({
    query: LATEST_PRODUCTS_QUERY,
  });

  return (
    <div className="grid grid-cols-2 grid- md:grid-cols-4 p-3 md:p-5 gap-3">
      <SlideInEffect
        direction="bottom"
        className="col-span-full text-center uppercase"
      >
        <Title as="h3" size="md">
          new in catalog
        </Title>
      </SlideInEffect>

      <SlideInEffect direction="left" className="col-start-1 col-end-2">
        <ProductCard {...products[0]} />
      </SlideInEffect>

      <SlideInEffect
        direction="right"
        className="col-start-2 col-end-3 place-self-center"
      >
        <Button variant="link">
          <Link
            href="/catalog"
            className="flex gap-2 text-fs-200 items-center hover:scale-[1.03] transition-transform duration-200"
          >
            See Catalog
          </Link>
        </Button>
      </SlideInEffect>

      <SlideInEffect
        direction="left"
        className="col-start-1 col-end-2 md:col-start-3 md:col-end-3 "
      >
        <ProductCard {...products[1]} className="h-[80%]" />
      </SlideInEffect>

      <SlideInEffect
        direction="right"
        className="col-start-2 col-end-2 md:col-start-4 md:col-end-5 "
      >
        <ProductCard {...products[2]} className="h-[80%]" />
      </SlideInEffect>
    </div>
  );
};

export default LatestProduct;
