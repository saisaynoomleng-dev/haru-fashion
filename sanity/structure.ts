import { LucidePhoneIncoming, UserIcon } from 'lucide-react';
import { CiTextAlignJustify } from 'react-icons/ci';
import {
  FaBookOpen,
  FaClock,
  FaHeart,
  FaQuestion,
  FaRegNewspaper,
  FaTshirt,
} from 'react-icons/fa';
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
      S.documentTypeListItem('newsletter')
        .title('Newsletter Subscriptions')
        .icon(FaRegNewspaper),
      S.documentTypeListItem('history').title('Histories').icon(FaClock),
      S.documentTypeListItem('lookbook').title('Lookbooks').icon(FaBookOpen),
      S.documentTypeListItem('contact')
        .title('Contact Lists')
        .icon(LucidePhoneIncoming),
      S.documentTypeListItem('terms').title('Terms').icon(CiTextAlignJustify),
      S.documentTypeListItem('faq').title('FAQs').icon(FaQuestion),
      S.documentTypeListItem('user').title('Users').icon(UserIcon),
    ]);
