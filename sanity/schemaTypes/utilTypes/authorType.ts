import { defineField } from 'sanity';
import { FaPenNib } from 'react-icons/fa';

export const authorType = defineField({
  name: 'author',
  icon: FaPenNib,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Author Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    }),
    defineField({
      name: 'desc',
      title: 'Author bio',
      type: 'text',
    }),
    defineField({
      name: 'mainImage',
      title: 'Author Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
        }),
      ],
    }),
  ],
});
