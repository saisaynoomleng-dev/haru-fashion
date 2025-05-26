import { FaTshirt } from 'react-icons/fa';
import { IoPricetagOutline } from 'react-icons/io5';
import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('HARU E-commerce')
    .items([
      S.documentTypeListItem('product').title('Products').icon(FaTshirt),
      S.documentTypeListItem('category')
        .title('Categories')
        .icon(IoPricetagOutline),
    ]);
