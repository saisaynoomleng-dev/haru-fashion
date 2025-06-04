import Bounded from '@/components/Bounded';
import ProductCard from '@/components/ProductCard';
import { sanityFetch } from '@/sanity/lib/live';
import { SEARCH_QUERY } from '@/sanity/lib/queries';
import clsx from 'clsx';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const SearchPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string; query: string }>;
}) => {
  const { page, query } = await searchParams;

  const params = {
    search: query + '*' || null,
  };

  const { data: allProducts } = await sanityFetch({
    query: SEARCH_QUERY,
    params,
  });

  const currentPage = parseInt(page || '1', 10);
  const totalProducts = allProducts.length;
  const pageSize = 12;
  const totalPages = Math.ceil(totalProducts / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const products = allProducts.slice(startIndex, endIndex);

  return (
    <Bounded className="add-padding">
      <p className="font-bold">Search Results for &apos;{query}&apos;</p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-4">
        {products.map((product) => (
          <ProductCard key={product?.slug?.current} {...product} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex gap-3 ">
          <Link
            href={{
              pathname: '/search',
              query: {
                ...(query && { query }),
                page: currentPage - 1,
              },
            }}
            className={clsx(
              currentPage === 1
                ? 'pointer-events-none text-brand-black/30'
                : 'text-brand-black/100 pointer-events-auto',
            )}
          >
            <ArrowLeft />
          </Link>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (pageNumber) => (
              <button key={pageNumber}>
                <Link
                  href={{
                    pathname: '/search',
                    query: {
                      ...(query && { query }),
                      page: pageNumber,
                    },
                  }}
                >
                  {pageNumber}
                </Link>
              </button>
            ),
          )}
          <Link
            href={{
              pathname: '/search',
              query: {
                ...(query && { query }),
                page: currentPage + 1,
              },
            }}
            className={clsx(
              currentPage === totalPages
                ? 'pointer-events-none text-brand-black/30'
                : 'text-brand-black/100 pointer-events-auto',
            )}
          >
            <ArrowRight />
          </Link>
        </div>
      )}
    </Bounded>
  );
};

export default SearchPage;
