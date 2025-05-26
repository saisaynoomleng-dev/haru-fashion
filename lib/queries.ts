import { defineQuery } from 'next-sanity';

export const ALL_PRODUCTS_QUERY = defineQuery(`*[_type == 'product'
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

export const PRODUCT_QUERY = defineQuery(`*[_type == 'product'
  && slug.current == $slug][0]{
     name,
     mainImage[]{
       asset->{url},
       alt
     },
     slug,
     _id,
     price,
     colors[]->{
       colorName
     },
     sizes[]->{
      name
     },
     desc,
     categories[]->{
      name,
      _id,
     },
}`);

export const RELATED_PRODUCTS_QUERY = defineQuery(`*[_type == 'product'
  && defined(slug.current)
  && _id != $currentProductId
  && count(categories[@._ref in $categoryIds]) > 0 ]
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
