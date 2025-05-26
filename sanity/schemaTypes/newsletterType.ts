import { FaRegNewspaper } from 'react-icons/fa';
import { defineField, defineType } from 'sanity';

export const newsletterType = defineType({
  name: 'newsletter',
  icon: FaRegNewspaper,
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      type: 'email',
      validation: (rule) => rule.required(),
    }),
  ],
});
