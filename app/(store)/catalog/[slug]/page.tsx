import Bounded from '@/components/Bounded';
import ProductCard from '@/components/ProductCard';
import ProductImages from '@/components/ProductImages';
import Title from '@/components/Title';
import { PRODUCT_QUERY, RELATED_PRODUCTS_QUERY } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/live';
import { PortableText } from 'next-sanity';
import Link from 'next/link';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

const ProductDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { data: product } = await sanityFetch({
    query: PRODUCT_QUERY,
    params: await params,
  });

  const categoryIds = product?.categories?.map((cat) => cat._id) || [];

  const { data: relatedProducts } = await sanityFetch({
    query: RELATED_PRODUCTS_QUERY,
    params: {
      categoryIds,
      currentProductId: product?._id,
    },
  });

  return (
    <Bounded className="grid sm:grid-cols-[auto_1fr] gap-3 md:gap-5">
      {product?.mainImage && <ProductImages images={product.mainImage} />}

      <div className="flex flex-col gap-2 md:max-w-[85%] lg:max-w-[80%] px-6 md:px-8">
        <Link
          href="/catalog"
          className="text-fs-200 uppercase flex gap-2 group items-center"
        >
          <FaArrowLeft className="size-3 ml-2 group-hover:ml-0 transition-all duration-300 ease" />
          <span className="ml-2 group-hover:ml-4 transition-all duration-300">
            Back to catalog
          </span>
        </Link>

        <Title as="h2" size="sm" className="uppercase">
          {product?.name}
        </Title>

        <p className="text-fs-400">$ {product?.price}</p>

        <div className="grid grid-cols-2 gap-2">
          <p>Size: </p>
          <div className="flex gap-3">
            {product?.sizes?.map((size) => <p key={size.name}>{size.name}</p>)}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <p>Available Colors: </p>
          <div className="flex gap-3 items-center">
            {product?.colors?.map((color) => (
              <div
                key={color.colorName}
                style={{
                  backgroundColor: color.colorName?.toLowerCase() as string,
                }}
                className="w-[20px] h-[20px] rounded-full border border-black/50"
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <p>Category: </p>

          <p className="capitalize">
            {product?.categories?.map((category) => category.name).join(', ')}
          </p>
        </div>

        {/* add to cart and fav */}
      </div>

      {product?.desc && (
        <div className="prose md:prose-lg lg:prose-2xl col-span-full max-w-full">
          <PortableText value={product.desc} />
        </div>
      )}

      <div className="space-y-3 md:space-y-5 col-span-full">
        <Title as="h3" size="sm" className="underline underline-offset-2 ">
          Related Products
        </Title>
        <div className="flex gap-2 overflow-x-scroll max-w-screen">
          {relatedProducts.map((product) => (
            <ProductCard
              key={product.slug?.current}
              {...product}
              className="min-w-[200px]"
            />
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default ProductDetailPage;
