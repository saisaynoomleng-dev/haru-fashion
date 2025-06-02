import { ShoppingCartIcon } from 'lucide-react';
import { defineField, defineType } from 'sanity';

export const orderType = defineType({
  name: 'order',
  title: 'Orders',
  icon: ShoppingCartIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
  ],
});
