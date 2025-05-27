import { FaBookOpen } from 'react-icons/fa';
import { defineField, defineType } from 'sanity';

export const lookbookType = defineType({
  name: 'lookbook',
  icon: FaBookOpen,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) =>
        rule.required().min(10).info(`Title must have at least 10 characters`),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (rule) =>
        rule.required().info(`Required to generate a page on the website`),
    }),
    defineField({
      name: 'subtitle',
      title: 'Sub Title',
      type: 'string',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'date',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
    }),
    defineField({
      name: 'mainImage',
      title: 'Cover Image',
      type: 'image',
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'desc',
      title: 'Look book Description',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      image: 'mainImage',
      category: 'category',
    },
    prepare({ title, publishedAt, image, category }) {
      const dateFormatted =
        publishedAt &&
        new Date(publishedAt).toLocaleDateString('en-US', {
          month: 'short',
          year: '2-digit',
          day: '2-digit',
        });
      return {
        title: `${title}`,
        subtitle: `${publishedAt} ${dateFormatted}`,
        media: image || FaBookOpen,
      };
    },
  },
});
