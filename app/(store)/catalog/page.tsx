import Bounded from '@/components/Bounded';
import ProductCard from '@/components/ProductCard';
import Title from '@/components/Title';
import { ALL_PRODUCTS_QUERY } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/live';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import CatalogFilter from '@/components/CatalogFilter';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const CatalogPage = async ({
  searchParams,
}: {
  searchParams: Promise<{
    page?: string;
    filter?: string;
    color?: string;
    size?: string;
    minPrice?: number;
    maxPrice?: number;
  }>;
}) => {
  const { page, filter, color, size, minPrice, maxPrice } = await searchParams;

  const params = {
    filter: filter || null,
    color: color || null,
    size: size || null,
    minPrice: Number(minPrice) || null,
    maxPrice: Number(maxPrice) || null,
  };
  console.log('GROQ filter params:', params);
  const { data: allProducts } = await sanityFetch({
    query: ALL_PRODUCTS_QUERY,
    params,
  });

  const currentPage = parseInt(page || '1', 10);
  const productsPerPage = 12;
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
      <CatalogFilter
        color={color}
        size={size}
        filter={filter}
        minPrice={minPrice}
        maxPrice={maxPrice}
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5 add-padding">
        {products.map((product) => (
          <ProductCard key={product.slug?.current} {...product} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex gap-3 items-center justify-center">
          <Link
            href={{
              pathname: '/catalog',
              query: {
                ...(filter && { filter }),
                ...(color && { color }),
                ...(size && { size }),
                ...(minPrice && { minPrice }),
                ...(maxPrice && { maxPrice }),
                page: currentPage - 1,
              },
            }}
            className={
              currentPage === 1
                ? 'pointer-events-none text-brand-black/20'
                : 'pointer-events-auto text-brand-black/100'
            }
          >
            <FaChevronLeft />
          </Link>

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

          <Link
            href={{
              pathname: '/catalog',
              query: {
                ...(filter && { filter }),
                ...(color && { color }),
                ...(size && { size }),
                ...(minPrice && { minPrice }),
                ...(maxPrice && { maxPrice }),
                page: currentPage + 1,
              },
            }}
            className={
              currentPage === totalPages
                ? 'pointer-events-none text-brand-black/20'
                : 'pointer-events-auto text-brand-black/100'
            }
          >
            <FaChevronRight />
          </Link>
        </div>
      )}
    </Bounded>
  );
};

export default CatalogPage;
