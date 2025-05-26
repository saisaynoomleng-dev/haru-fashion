import { sanityFetch } from '@/sanity/lib/live';
import { defineQuery } from 'next-sanity';

export const getAllProduct = async () => {
  const ALL_PRODUCTS_QUERY = defineQuery(`*[_type == 'product'
        && defined(slug.current)]
         | order(dateAdded desc){
           name,
           mainImage[]{
             asset->{url},
             alt
           },
           slug,
           price,
           colors[]->{
             colorName
           }
         }`);

  try {
    const allProducts = await sanityFetch({ query: ALL_PRODUCTS_QUERY });
    if (!allProducts) throw new Error('Error Fetching Products');
    return allProducts.data || [];
  } catch (err) {
    console.error(err);
    return [];
  }
};
