import { IoPricetagOutline } from 'react-icons/io5';
import { defineField, defineType } from 'sanity';

export const categoryType = defineType({
  name: 'category',
  type: 'document',
  icon: IoPricetagOutline,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    }),
  ],
});
