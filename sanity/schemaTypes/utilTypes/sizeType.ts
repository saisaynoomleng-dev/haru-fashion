import { IoMdResize } from 'react-icons/io';
import { defineField } from 'sanity';

export const sizeType = defineField({
  name: 'size',
  icon: IoMdResize,
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
