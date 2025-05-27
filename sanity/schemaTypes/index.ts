import { type SchemaTypeDefinition } from 'sanity';
import { productType } from './productType';
import { colorType } from './utilTypes/colorType';
import { sizeType } from './utilTypes/sizeType';
import { blockContentType } from './utilTypes/blockContent';
import { categoryType } from './utilTypes/categoryType';
import { brandType } from './utilTypes/brandType';
import { newsletterType } from './newsletterType';
import { historyType } from './historyType';

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
  ],
};
