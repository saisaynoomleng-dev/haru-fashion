import { defineField, defineType } from 'sanity';

export const brandType = defineType({
  name: 'brand',
  type: 'document',
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
