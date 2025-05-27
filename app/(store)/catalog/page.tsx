import Bounded from '@/components/Bounded';
import ProductCard from '@/components/ProductCard';
import Title from '@/components/Title';
import { ALL_PRODUCTS_QUERY } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/live';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

const CatalogPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) => {
  const { page } = await searchParams;
  const { data: allProducts } = await sanityFetch({
    query: ALL_PRODUCTS_QUERY,
  });

  const currentPage = parseInt(page || '1', 10);
  const productsPerPage = 8;
  const totalProducts = allProducts.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const products = allProducts.slice(startIndex, endIndex);

  return (
    <Bounded>
      <div className="text-center">
        <Title as="h1" size="md" className="uppercase">
          catalog
        </Title>
      </div>

      {/* filter */}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5">
        {products.map((product) => (
          <ProductCard key={product.slug?.current} {...product} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex gap-3 items-center justify-center">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (pageNumber) => (
              <Link
                href={{
                  pathname: '/catalog',
                  query: {
                    page: pageNumber,
                  },
                }}
                key={pageNumber}
                className={clsx(pageNumber == currentPage && 'text-orange-800')}
              >
                {pageNumber}
              </Link>
            ),
          )}
        </div>
      )}
    </Bounded>
  );
};

export default CatalogPage;
