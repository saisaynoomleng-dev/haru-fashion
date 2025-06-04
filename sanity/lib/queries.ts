import { defineQuery } from 'next-sanity';

export const ALL_PRODUCTS_QUERY = defineQuery(`*[_type == 'product'
    && defined(slug.current)
    && (
      (!defined($filter)) ||
      $filter == null ||
      $filter in categories[]->slug.current
    )
    && (
      (!defined($color)) ||
      $color == null ||
      $color in colors[]->slug.current
    )
    && (
      (!defined($minPrice) || $minPrice == null || price >= $minPrice) &&
      (!defined($maxPrice) || $maxPrice == null || price <= $maxPrice)
    )
    && (
      (!defined($size)) ||
      $size == null ||
      $size in sizes[]->slug.current
    )
      ]| order(dateAdded desc){
       name,
       mainImage[]{
         asset->{url},
         alt
       },
       slug,
       price,
       colors[]->{
         colorName
       },
       
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

export const HISTORY_QUERY = defineQuery(`*[_type == 'history'
  && defined(slug.current)][0]{
   title,
   slug,
   histories[]{
     title,
     desc,
     year,
     mainImage{
       asset->{url},
     alt
     }
   }
  }`);

export const LOOKBOOKS_QUERY = defineQuery(`*[_type == 'lookbook'
  && defined(slug.current)]
 | order(publishedAt desc){
   title,
     slug,
     subtitle,
     publishedAt,
     category->{
       name
     },
     mainImage{
     asset->{url},
       alt
     }
  }`);

export const LOOKBOOK_QUERY = defineQuery(`*[_type == 'lookbook'
  && slug.current == $slug][0]{
   title,
     slug,
     subtitle,
     author->{
      name,
      desc,
      mainImage{
        asset->{url},
        alt
      }
     },
     publishedAt,
     category->{
       name
     },
     mainImage{
     asset->{url},
       alt
     },
     desc
  }`);

export const TERMS_AND_CONDITIONS_QUERY = defineQuery(`*[_type == 'terms' &&
  slug.current == 'users-terms-and-conditions'][0]{
   title,
   slug,
   desc
  }`);

export const PRIVACY_POLICY_QUERY = defineQuery(`*[_type == 'terms' &&
  slug.current == 'privacy-policy'][0]{
   title,
   slug,
   desc
  }`);

export const RETURN_POLICY_QUERY = defineQuery(`*[_type == 'terms' &&
  slug.current == 'return-policy'][0]{
   title,
   slug,
   desc
  }`);

export const COOKIE_POLICY_QUERY = defineQuery(`*[_type == 'terms' &&
  slug.current == 'cookie-policy'][0]{
   title,
   slug,
   desc
  }`);

export const MAIN_FAQ_QUERY = defineQuery(`*[_type == 'faq'
  && slug.current == 'main-faqs'][0]{
   faqs[]{
     question,
     answer
   }
  }`);

export const SEARCH_QUERY = defineQuery(`*[_type == 'product'
  && defined(slug.current)
  && (
    (!defined($search)) || 
    name match $search || 
    categories[]->name match $search ||
    colors[]->colorName match $search
  )
  ] | order(dateAdded desc){
    name,
    slug,
    _id,
    mainImage[]{
      asset->{url},
      alt
    },
    price,
    colors[]->{
      colorName
    },
    category[]{
      name
    }
  }`);

export const LATEST_PRODUCTS_QUERY = defineQuery(`*[_type == 'product'
  && defined(slug.current)][0...3] 
   | order(dateAdded desc){
     name,
     slug,
     mainImage[]{
       alt,
       asset->{url}
     },
     price,
     colors[]->{
       colorName
     }
   }`);

export const USER_QUERY = defineQuery(`*[_type == 'user'
  && defined(clerkUserId)
  && clerkUserId == $userId][0]{
   firstname,
   lastname,
   email,
   phone,
   shippingAddress{
    address1,
    address2,
    city,
    state,
    country,
    zip
   },
   mainImage{
     alt,
     asset->{url}
   },
   favorites[]->{
     product,
   },
   orders[]->{
     name,  
   }
  }`);

export const FAVORITE_QUERY = defineQuery(`*[_type == 'user'
  && defined(clerkUserId)][0]{
    favorites[]{
      product->{
        name,
        price,
        mainImage[]{
          alt,
          asset->{url}
        },
        slug,
      },
      addedAt,
      _key
    }
  }`);
