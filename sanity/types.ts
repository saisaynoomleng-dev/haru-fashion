/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: 'sanity.imagePaletteSwatch';
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: 'sanity.imagePalette';
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: 'sanity.imageDimensions';
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: 'sanity.fileAsset';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: 'geopoint';
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Order = {
  _id: string;
  _type: 'order';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
};

export type User = {
  _id: string;
  _type: 'user';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  firstname?: string;
  lastname?: string;
  clerkUserId?: string;
  email?: string;
  shippingAddress?: {
    address1?: string;
    address2?: string;
    city?: string;
    state?: string;
    country?: string;
    zip?: string;
  };
  mainImage?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: 'image';
  };
  favorites?: Array<{
    product?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'product';
    };
    addedAt?: string;
    _key: string;
  }>;
  orders?: Array<{
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: 'order';
  }>;
  bags?: Array<{
    product?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'product';
    };
    _key: string;
  }>;
  phone?: string;
};

export type Faq = {
  _id: string;
  _type: 'faq';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  faqs?: Array<{
    question?: string;
    answer?: string;
    _type: 'faq';
    _key: string;
  }>;
};

export type Terms = {
  _id: string;
  _type: 'terms';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  desc?: Array<
    | {
        children?: Array<{
          marks?: Array<string>;
          text?: string;
          _type: 'span';
          _key: string;
        }>;
        style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote';
        listItem?: 'bullet';
        markDefs?: Array<{
          href?: string;
          _type: 'link';
          _key: string;
        }>;
        level?: number;
        _type: 'block';
        _key: string;
      }
    | {
        asset?: {
          _ref: string;
          _type: 'reference';
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
        };
        media?: unknown;
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        alt?: string;
        _type: 'image';
        _key: string;
      }
    | ({
        _key: string;
      } & Carousel)
  >;
};

export type Contact = {
  _id: string;
  _type: 'contact';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  phone?: string;
  message?: string;
};

export type Carousel = {
  _type: 'carousel';
  images?: Array<{
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: 'image';
    _key: string;
  }>;
};

export type Lookbook = {
  _id: string;
  _type: 'lookbook';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  subtitle?: string;
  publishedAt?: string;
  author?: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'author';
  };
  category?: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'category';
  };
  mainImage?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: 'image';
  };
  desc?: Array<
    | {
        children?: Array<{
          marks?: Array<string>;
          text?: string;
          _type: 'span';
          _key: string;
        }>;
        style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote';
        listItem?: 'bullet';
        markDefs?: Array<{
          href?: string;
          _type: 'link';
          _key: string;
        }>;
        level?: number;
        _type: 'block';
        _key: string;
      }
    | {
        asset?: {
          _ref: string;
          _type: 'reference';
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
        };
        media?: unknown;
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        alt?: string;
        _type: 'image';
        _key: string;
      }
    | ({
        _key: string;
      } & Carousel)
  >;
};

export type Author = {
  _id: string;
  _type: 'author';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
  desc?: string;
  mainImage?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: 'image';
  };
};

export type History = {
  _id: string;
  _type: 'history';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  histories?: Array<{
    title?: string;
    desc?: string;
    year?: number;
    mainImage?: {
      asset?: {
        _ref: string;
        _type: 'reference';
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
      };
      media?: unknown;
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: 'image';
    };
    _key: string;
  }>;
};

export type Newsletter = {
  _id: string;
  _type: 'newsletter';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  email?: string;
};

export type Brand = {
  _id: string;
  _type: 'brand';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
};

export type Category = {
  _id: string;
  _type: 'category';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
};

export type BlockContent = Array<
  | {
      children?: Array<{
        marks?: Array<string>;
        text?: string;
        _type: 'span';
        _key: string;
      }>;
      style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote';
      listItem?: 'bullet';
      markDefs?: Array<{
        href?: string;
        _type: 'link';
        _key: string;
      }>;
      level?: number;
      _type: 'block';
      _key: string;
    }
  | {
      asset?: {
        _ref: string;
        _type: 'reference';
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
      };
      media?: unknown;
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: 'image';
      _key: string;
    }
  | ({
      _key: string;
    } & Carousel)
>;

export type Size = {
  _id: string;
  _type: 'size';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
};

export type Color = {
  _id: string;
  _type: 'color';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  colorName?: string;
  slug?: Slug;
};

export type Product = {
  _id: string;
  _type: 'product';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
  sizes?: Array<{
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: 'size';
  }>;
  colors?: Array<{
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: 'color';
  }>;
  price?: number;
  desc?: BlockContent;
  dateAdded?: string;
  mainImage?: Array<{
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: 'image';
    _key: string;
  }>;
  categories?: Array<{
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: 'category';
  }>;
  stock?: number;
};

export type SanityImageCrop = {
  _type: 'sanity.imageCrop';
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: 'sanity.imageHotspot';
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: 'sanity.imageAsset';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: 'sanity.assetSourceData';
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: 'sanity.imageMetadata';
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type Slug = {
  _type: 'slug';
  current?: string;
  source?: string;
};

export type AllSanitySchemaTypes =
  | SanityImagePaletteSwatch
  | SanityImagePalette
  | SanityImageDimensions
  | SanityFileAsset
  | Geopoint
  | Order
  | User
  | Faq
  | Terms
  | Contact
  | Carousel
  | Lookbook
  | Author
  | History
  | Newsletter
  | Brand
  | Category
  | BlockContent
  | Size
  | Color
  | Product
  | SanityImageCrop
  | SanityImageHotspot
  | SanityImageAsset
  | SanityAssetSourceData
  | SanityImageMetadata
  | Slug;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: sanity/lib/queries.ts
// Variable: ALL_PRODUCTS_QUERY
// Query: *[_type == 'product'    && defined(slug.current)    && (      (!defined($filter)) ||      $filter == null ||      $filter in categories[]->slug.current    )    && (      (!defined($color)) ||      $color == null ||      $color in colors[]->slug.current    )    && (      (!defined($minPrice) || $minPrice == null || price >= $minPrice) &&      (!defined($maxPrice) || $maxPrice == null || price <= $maxPrice)    )    && (      (!defined($size)) ||      $size == null ||      $size in sizes[]->slug.current    )      ]| order(dateAdded desc){       name,       mainImage[]{         asset->{url},         alt       },       slug,       price,       colors[]->{         colorName       },       }
export type ALL_PRODUCTS_QUERYResult = Array<{
  name: string | null;
  mainImage: Array<{
    asset: {
      url: string | null;
    } | null;
    alt: string | null;
  }> | null;
  slug: Slug | null;
  price: number | null;
  colors: Array<{
    colorName: string | null;
  }> | null;
}>;
// Variable: PRODUCT_QUERY
// Query: *[_type == 'product'  && slug.current == $slug][0]{     name,     mainImage[]{       asset->{url},       alt     },     slug,     _id,     price,     colors[]->{       colorName     },     sizes[]->{      name     },     desc,     categories[]->{      name,      _id,     },}
export type PRODUCT_QUERYResult = {
  name: string | null;
  mainImage: Array<{
    asset: {
      url: string | null;
    } | null;
    alt: string | null;
  }> | null;
  slug: Slug | null;
  _id: string;
  price: number | null;
  colors: Array<{
    colorName: string | null;
  }> | null;
  sizes: Array<{
    name: string | null;
  }> | null;
  desc: BlockContent | null;
  categories: Array<{
    name: string | null;
    _id: string;
  }> | null;
} | null;
// Variable: RELATED_PRODUCTS_QUERY
// Query: *[_type == 'product'  && defined(slug.current)  && _id != $currentProductId  && count(categories[@._ref in $categoryIds]) > 0 ]   | order(dateAdded desc){     name,     mainImage[]{       asset->{url},       alt     },     slug,     price,     colors[]->{       colorName     }}
export type RELATED_PRODUCTS_QUERYResult = Array<{
  name: string | null;
  mainImage: Array<{
    asset: {
      url: string | null;
    } | null;
    alt: string | null;
  }> | null;
  slug: Slug | null;
  price: number | null;
  colors: Array<{
    colorName: string | null;
  }> | null;
}>;
// Variable: HISTORY_QUERY
// Query: *[_type == 'history'  && defined(slug.current)][0]{   title,   slug,   histories[]{     title,     desc,     year,     mainImage{       asset->{url},     alt     }   }  }
export type HISTORY_QUERYResult = {
  title: string | null;
  slug: Slug | null;
  histories: Array<{
    title: string | null;
    desc: string | null;
    year: number | null;
    mainImage: {
      asset: {
        url: string | null;
      } | null;
      alt: string | null;
    } | null;
  }> | null;
} | null;
// Variable: LOOKBOOKS_QUERY
// Query: *[_type == 'lookbook'  && defined(slug.current)] | order(publishedAt desc){   title,     slug,     subtitle,     publishedAt,     category->{       name     },     mainImage{     asset->{url},       alt     }  }
export type LOOKBOOKS_QUERYResult = Array<{
  title: string | null;
  slug: Slug | null;
  subtitle: string | null;
  publishedAt: string | null;
  category: {
    name: string | null;
  } | null;
  mainImage: {
    asset: {
      url: string | null;
    } | null;
    alt: string | null;
  } | null;
}>;
// Variable: LOOKBOOK_QUERY
// Query: *[_type == 'lookbook'  && slug.current == $slug][0]{   title,     slug,     subtitle,     author->{      name,      desc,      mainImage{        asset->{url},        alt      }     },     publishedAt,     category->{       name     },     mainImage{     asset->{url},       alt     },     desc  }
export type LOOKBOOK_QUERYResult = {
  title: string | null;
  slug: Slug | null;
  subtitle: string | null;
  author: {
    name: string | null;
    desc: string | null;
    mainImage: {
      asset: {
        url: string | null;
      } | null;
      alt: string | null;
    } | null;
  } | null;
  publishedAt: string | null;
  category: {
    name: string | null;
  } | null;
  mainImage: {
    asset: {
      url: string | null;
    } | null;
    alt: string | null;
  } | null;
  desc: Array<
    | ({
        _key: string;
      } & Carousel)
    | {
        children?: Array<{
          marks?: Array<string>;
          text?: string;
          _type: 'span';
          _key: string;
        }>;
        style?: 'blockquote' | 'h1' | 'h2' | 'h3' | 'h4' | 'normal';
        listItem?: 'bullet';
        markDefs?: Array<{
          href?: string;
          _type: 'link';
          _key: string;
        }>;
        level?: number;
        _type: 'block';
        _key: string;
      }
    | {
        asset?: {
          _ref: string;
          _type: 'reference';
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
        };
        media?: unknown;
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        alt?: string;
        _type: 'image';
        _key: string;
      }
  > | null;
} | null;
// Variable: TERMS_AND_CONDITIONS_QUERY
// Query: *[_type == 'terms' &&  slug.current == 'users-terms-and-conditions'][0]{   title,   slug,   desc  }
export type TERMS_AND_CONDITIONS_QUERYResult = {
  title: string | null;
  slug: Slug | null;
  desc: Array<
    | ({
        _key: string;
      } & Carousel)
    | {
        children?: Array<{
          marks?: Array<string>;
          text?: string;
          _type: 'span';
          _key: string;
        }>;
        style?: 'blockquote' | 'h1' | 'h2' | 'h3' | 'h4' | 'normal';
        listItem?: 'bullet';
        markDefs?: Array<{
          href?: string;
          _type: 'link';
          _key: string;
        }>;
        level?: number;
        _type: 'block';
        _key: string;
      }
    | {
        asset?: {
          _ref: string;
          _type: 'reference';
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
        };
        media?: unknown;
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        alt?: string;
        _type: 'image';
        _key: string;
      }
  > | null;
} | null;
// Variable: PRIVACY_POLICY_QUERY
// Query: *[_type == 'terms' &&  slug.current == 'privacy-policy'][0]{   title,   slug,   desc  }
export type PRIVACY_POLICY_QUERYResult = {
  title: string | null;
  slug: Slug | null;
  desc: Array<
    | ({
        _key: string;
      } & Carousel)
    | {
        children?: Array<{
          marks?: Array<string>;
          text?: string;
          _type: 'span';
          _key: string;
        }>;
        style?: 'blockquote' | 'h1' | 'h2' | 'h3' | 'h4' | 'normal';
        listItem?: 'bullet';
        markDefs?: Array<{
          href?: string;
          _type: 'link';
          _key: string;
        }>;
        level?: number;
        _type: 'block';
        _key: string;
      }
    | {
        asset?: {
          _ref: string;
          _type: 'reference';
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
        };
        media?: unknown;
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        alt?: string;
        _type: 'image';
        _key: string;
      }
  > | null;
} | null;
// Variable: RETURN_POLICY_QUERY
// Query: *[_type == 'terms' &&  slug.current == 'return-policy'][0]{   title,   slug,   desc  }
export type RETURN_POLICY_QUERYResult = {
  title: string | null;
  slug: Slug | null;
  desc: Array<
    | ({
        _key: string;
      } & Carousel)
    | {
        children?: Array<{
          marks?: Array<string>;
          text?: string;
          _type: 'span';
          _key: string;
        }>;
        style?: 'blockquote' | 'h1' | 'h2' | 'h3' | 'h4' | 'normal';
        listItem?: 'bullet';
        markDefs?: Array<{
          href?: string;
          _type: 'link';
          _key: string;
        }>;
        level?: number;
        _type: 'block';
        _key: string;
      }
    | {
        asset?: {
          _ref: string;
          _type: 'reference';
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
        };
        media?: unknown;
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        alt?: string;
        _type: 'image';
        _key: string;
      }
  > | null;
} | null;
// Variable: COOKIE_POLICY_QUERY
// Query: *[_type == 'terms' &&  slug.current == 'cookie-policy'][0]{   title,   slug,   desc  }
export type COOKIE_POLICY_QUERYResult = {
  title: string | null;
  slug: Slug | null;
  desc: Array<
    | ({
        _key: string;
      } & Carousel)
    | {
        children?: Array<{
          marks?: Array<string>;
          text?: string;
          _type: 'span';
          _key: string;
        }>;
        style?: 'blockquote' | 'h1' | 'h2' | 'h3' | 'h4' | 'normal';
        listItem?: 'bullet';
        markDefs?: Array<{
          href?: string;
          _type: 'link';
          _key: string;
        }>;
        level?: number;
        _type: 'block';
        _key: string;
      }
    | {
        asset?: {
          _ref: string;
          _type: 'reference';
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
        };
        media?: unknown;
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        alt?: string;
        _type: 'image';
        _key: string;
      }
  > | null;
} | null;
// Variable: MAIN_FAQ_QUERY
// Query: *[_type == 'faq'  && slug.current == 'main-faqs'][0]{   faqs[]{     question,     answer   }  }
export type MAIN_FAQ_QUERYResult = {
  faqs: Array<{
    question: string | null;
    answer: string | null;
  }> | null;
} | null;
// Variable: SEARCH_QUERY
// Query: *[_type == 'product'  && defined(slug.current)  && (    (!defined($search)) ||     name match $search ||     categories[]->name match $search ||    colors[]->colorName match $search  )  ] | order(dateAdded desc){    name,    slug,    _id,    mainImage[]{      asset->{url},      alt    },    price,    colors[]->{      colorName    },    category[]{      name    }  }
export type SEARCH_QUERYResult = Array<{
  name: string | null;
  slug: Slug | null;
  _id: string;
  mainImage: Array<{
    asset: {
      url: string | null;
    } | null;
    alt: string | null;
  }> | null;
  price: number | null;
  colors: Array<{
    colorName: string | null;
  }> | null;
  category: null;
}>;
// Variable: LATEST_PRODUCTS_QUERY
// Query: *[_type == 'product'  && defined(slug.current)][0...3]    | order(dateAdded desc){     name,     slug,     mainImage[]{       alt,       asset->{url}     },     price,     colors[]->{       colorName     }   }
export type LATEST_PRODUCTS_QUERYResult = Array<{
  name: string | null;
  slug: Slug | null;
  mainImage: Array<{
    alt: string | null;
    asset: {
      url: string | null;
    } | null;
  }> | null;
  price: number | null;
  colors: Array<{
    colorName: string | null;
  }> | null;
}>;
// Variable: USER_QUERY
// Query: *[_type == 'user'  && defined(clerkUserId)  && clerkUserId == $userId][0]{   firstname,   lastname,   email,   phone,   shippingAddress{    address1,    address2,    city,    state,    country,    zip   },   mainImage{     alt,     asset->{url}   },   favorites[]->{     product,   },   orders[]->{     name,     }  }
export type USER_QUERYResult = {
  firstname: string | null;
  lastname: string | null;
  email: string | null;
  phone: string | null;
  shippingAddress: {
    address1: string | null;
    address2: string | null;
    city: string | null;
    state: string | null;
    country: string | null;
    zip: string | null;
  } | null;
  mainImage: {
    alt: string | null;
    asset: {
      url: string | null;
    } | null;
  } | null;
  favorites: Array<null> | null;
  orders: Array<{
    name: string | null;
  }> | null;
} | null;
// Variable: FAVORITE_QUERY
// Query: *[_type == 'user'  && defined(clerkUserId)  && clerkUserId == $userId][0]{    favorites[]{      product->{        name,        price,        mainImage[]{          alt,          asset->{url}        },        slug,        _id      },      addedAt,      _key    }  }
export type FAVORITE_QUERYResult = {
  favorites: Array<{
    product: {
      name: string | null;
      price: number | null;
      mainImage: Array<{
        alt: string | null;
        asset: {
          url: string | null;
        } | null;
      }> | null;
      slug: Slug | null;
      _id: string;
    } | null;
    addedAt: string | null;
    _key: string;
  }> | null;
} | null;
// Variable: ORDERS_QUERY
// Query: *[_type == 'user'  && defined(clerkUserId)  && clerkUserId == $userId][0]{    bags[]{      product->{        name,        price,        mainImage[]{          alt,          asset->{url}        },        slug,      },      _key    }  }
export type ORDERS_QUERYResult = {
  bags: Array<{
    product: {
      name: string | null;
      price: number | null;
      mainImage: Array<{
        alt: string | null;
        asset: {
          url: string | null;
        } | null;
      }> | null;
      slug: Slug | null;
    } | null;
    _key: string;
  }> | null;
} | null;

// Query TypeMap
import '@sanity/client';
declare module '@sanity/client' {
  interface SanityQueries {
    "*[_type == 'product'\n    && defined(slug.current)\n    && (\n      (!defined($filter)) ||\n      $filter == null ||\n      $filter in categories[]->slug.current\n    )\n    && (\n      (!defined($color)) ||\n      $color == null ||\n      $color in colors[]->slug.current\n    )\n    && (\n      (!defined($minPrice) || $minPrice == null || price >= $minPrice) &&\n      (!defined($maxPrice) || $maxPrice == null || price <= $maxPrice)\n    )\n    && (\n      (!defined($size)) ||\n      $size == null ||\n      $size in sizes[]->slug.current\n    )\n      ]| order(dateAdded desc){\n       name,\n       mainImage[]{\n         asset->{url},\n         alt\n       },\n       slug,\n       price,\n       colors[]->{\n         colorName\n       },\n       \n}": ALL_PRODUCTS_QUERYResult;
    "*[_type == 'product'\n  && slug.current == $slug][0]{\n     name,\n     mainImage[]{\n       asset->{url},\n       alt\n     },\n     slug,\n     _id,\n     price,\n     colors[]->{\n       colorName\n     },\n     sizes[]->{\n      name\n     },\n     desc,\n     categories[]->{\n      name,\n      _id,\n     },\n}": PRODUCT_QUERYResult;
    "*[_type == 'product'\n  && defined(slug.current)\n  && _id != $currentProductId\n  && count(categories[@._ref in $categoryIds]) > 0 ]\n   | order(dateAdded desc){\n     name,\n     mainImage[]{\n       asset->{url},\n       alt\n     },\n     slug,\n     price,\n     colors[]->{\n       colorName\n     }\n}": RELATED_PRODUCTS_QUERYResult;
    "*[_type == 'history'\n  && defined(slug.current)][0]{\n   title,\n   slug,\n   histories[]{\n     title,\n     desc,\n     year,\n     mainImage{\n       asset->{url},\n     alt\n     }\n   }\n  }": HISTORY_QUERYResult;
    "*[_type == 'lookbook'\n  && defined(slug.current)]\n | order(publishedAt desc){\n   title,\n     slug,\n     subtitle,\n     publishedAt,\n     category->{\n       name\n     },\n     mainImage{\n     asset->{url},\n       alt\n     }\n  }": LOOKBOOKS_QUERYResult;
    "*[_type == 'lookbook'\n  && slug.current == $slug][0]{\n   title,\n     slug,\n     subtitle,\n     author->{\n      name,\n      desc,\n      mainImage{\n        asset->{url},\n        alt\n      }\n     },\n     publishedAt,\n     category->{\n       name\n     },\n     mainImage{\n     asset->{url},\n       alt\n     },\n     desc\n  }": LOOKBOOK_QUERYResult;
    "*[_type == 'terms' &&\n  slug.current == 'users-terms-and-conditions'][0]{\n   title,\n   slug,\n   desc\n  }": TERMS_AND_CONDITIONS_QUERYResult;
    "*[_type == 'terms' &&\n  slug.current == 'privacy-policy'][0]{\n   title,\n   slug,\n   desc\n  }": PRIVACY_POLICY_QUERYResult;
    "*[_type == 'terms' &&\n  slug.current == 'return-policy'][0]{\n   title,\n   slug,\n   desc\n  }": RETURN_POLICY_QUERYResult;
    "*[_type == 'terms' &&\n  slug.current == 'cookie-policy'][0]{\n   title,\n   slug,\n   desc\n  }": COOKIE_POLICY_QUERYResult;
    "*[_type == 'faq'\n  && slug.current == 'main-faqs'][0]{\n   faqs[]{\n     question,\n     answer\n   }\n  }": MAIN_FAQ_QUERYResult;
    "*[_type == 'product'\n  && defined(slug.current)\n  && (\n    (!defined($search)) || \n    name match $search || \n    categories[]->name match $search ||\n    colors[]->colorName match $search\n  )\n  ] | order(dateAdded desc){\n    name,\n    slug,\n    _id,\n    mainImage[]{\n      asset->{url},\n      alt\n    },\n    price,\n    colors[]->{\n      colorName\n    },\n    category[]{\n      name\n    }\n  }": SEARCH_QUERYResult;
    "*[_type == 'product'\n  && defined(slug.current)][0...3] \n   | order(dateAdded desc){\n     name,\n     slug,\n     mainImage[]{\n       alt,\n       asset->{url}\n     },\n     price,\n     colors[]->{\n       colorName\n     }\n   }": LATEST_PRODUCTS_QUERYResult;
    "*[_type == 'user'\n  && defined(clerkUserId)\n  && clerkUserId == $userId][0]{\n   firstname,\n   lastname,\n   email,\n   phone,\n   shippingAddress{\n    address1,\n    address2,\n    city,\n    state,\n    country,\n    zip\n   },\n   mainImage{\n     alt,\n     asset->{url}\n   },\n   favorites[]->{\n     product,\n   },\n   orders[]->{\n     name,  \n   }\n  }": USER_QUERYResult;
    "*[_type == 'user'\n  && defined(clerkUserId)\n  && clerkUserId == $userId][0]{\n    favorites[]{\n      product->{\n        name,\n        price,\n        mainImage[]{\n          alt,\n          asset->{url}\n        },\n        slug,\n        _id\n      },\n      addedAt,\n      _key\n    }\n  }": FAVORITE_QUERYResult;
    "*[_type == 'user'\n  && defined(clerkUserId)\n  && clerkUserId == $userId][0]{\n    bags[]{\n      product->{\n        name,\n        price,\n        mainImage[]{\n          alt,\n          asset->{url}\n        },\n        slug,\n      },\n      _key\n    }\n  }": ORDERS_QUERYResult;
  }
}
