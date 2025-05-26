import { FaTshirt } from 'react-icons/fa';
import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('HARU E-commerce')
    .items([
      S.documentTypeListItem('product').title('Products').icon(FaTshirt),
    ]);
