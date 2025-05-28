import { defineField, defineType } from 'sanity';
import { CiTextAlignJustify } from 'react-icons/ci';
import { title } from 'process';

export const termsType = defineType({
  name: 'terms',
  icon: CiTextAlignJustify,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'desc',
      title: 'desc',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title,
        media: CiTextAlignJustify,
      };
    },
  },
});
