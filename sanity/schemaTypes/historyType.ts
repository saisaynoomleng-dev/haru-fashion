import { FaClock } from 'react-icons/fa';
import { defineArrayMember, defineField, defineType } from 'sanity';

export const historyType = defineType({
  name: 'history',
  type: 'document',
  icon: FaClock,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'histories',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
            }),
            defineField({
              name: 'desc',
              type: 'text',
            }),
            defineField({
              name: 'year',
              type: 'number',
            }),
            defineField({
              name: 'mainImage',
              type: 'image',
              options: {
                hotspot: true,
              },
              fields: [
                defineField({
                  name: 'alt',
                  title: 'Alternative Text',
                  type: 'string',
                  validation: (rule) => rule.required(),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
});
