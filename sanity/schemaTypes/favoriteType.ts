import { FaHeart } from 'react-icons/fa';
import { defineArrayMember, defineField, defineType } from 'sanity';

export const favoriteType = defineType({
  name: 'favorite',
  title: 'Favorites',
  icon: FaHeart,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Favorite List Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'product',
              title: 'Favorite Product',
              type: 'reference',
              to: [{ type: 'product' }],
            }),
          ],
        }),
      ],
    }),
  ],
});
