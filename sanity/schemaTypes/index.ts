import { type SchemaTypeDefinition } from 'sanity';
import { productType } from './productType';
import { colorType } from './utilTypes/colorType';
import { sizeType } from './utilTypes/sizeType';
import { blockContentType } from './utilTypes/blockContent';
import { categoryType } from './utilTypes/categoryType';
import { brandType } from './utilTypes/brandType';
import { newsletterType } from './newsletterType';
import { historyType } from './historyType';
import { lookbookType } from './lookbookType';
import { carouselType } from './utilTypes/carouselType';
import { authorType } from './utilTypes/authorType';
import { contactType } from './contactType';
import { termsType } from './termsType';
import { faqType } from './faqType';
import { userType } from './userType';
import { orderType } from './orderType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    productType,
    colorType,
    sizeType,
    blockContentType,
    categoryType,
    brandType,
    newsletterType,
    historyType,
    lookbookType,
    carouselType,
    authorType,
    contactType,
    termsType,
    faqType,
    userType,
    orderType,
  ],
};
