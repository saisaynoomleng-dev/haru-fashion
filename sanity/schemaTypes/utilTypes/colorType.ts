import { defineField, defineType } from 'sanity';
import { IoIosColorPalette } from 'react-icons/io';

export const colorType = defineType({
  name: 'color',
  icon: IoIosColorPalette,
  type: 'document',
  fields: [
    defineField({
      name: 'colorName',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'colorName',
      },
    }),
  ],
});
