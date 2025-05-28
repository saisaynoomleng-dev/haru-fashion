import { FaQuestion } from 'react-icons/fa';
import { defineArrayMember, defineField, defineType } from 'sanity';

export const faqType = defineType({
  name: 'faq',
  title: 'FAQs',
  type: 'document',
  icon: FaQuestion,
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
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'faq',
          title: 'FAQ',
          type: 'object',
          fields: [
            defineField({
              name: 'question',
              type: 'text',
            }),
            defineField({
              name: 'answer',
              type: 'text',
            }),
          ],
        }),
      ],
    }),
  ],
});
