import { defineArrayMember, defineField, defineType } from 'sanity';
import { MdViewCarousel } from 'react-icons/md';

export const carouselType = defineType({
  name: 'carousel',
  icon: MdViewCarousel,
  type: 'object',
  fields: [
    defineField({
      name: 'images',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
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
});
