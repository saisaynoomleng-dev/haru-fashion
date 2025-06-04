import { UserIcon } from 'lucide-react';
import { defineArrayMember, defineField, defineType } from 'sanity';

export const userType = defineType({
  name: 'user',
  title: 'Users',
  icon: UserIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'firstname',
      title: 'First Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'lastname',
      title: 'Last Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'clerkUserId',
      title: 'Clerk User ID',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'email',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'shippingAddress',
      title: 'Shipping Address',
      type: 'object',
      fields: [
        defineField({
          name: 'address1',
          title: 'Address 1',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'address2',
          title: 'Address 2',
          type: 'string',
        }),
        defineField({
          name: 'city',
          title: 'City',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'state',
          title: 'State',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'country',
          title: 'Country',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'zip',
          title: 'Zip Code',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'mainImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'favorites',
      title: 'Favorite Lists',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'product',
              type: 'reference',
              to: [{ type: 'product' }],
            }),
            defineField({
              name: 'addedAt',
              type: 'date',
              initialValue: new Date().toISOString(),
            }),
          ],
          preview: {
            select: {
              name: 'product.name',
              price: 'product.price',
              image: 'product.mainImage.0.asset',
              addedAt: 'addedAt',
            },
            prepare({ name, price, image, addedAt }) {
              const dateFormatted =
                addedAt &&
                new Date(addedAt).toLocaleDateString('en-US', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric',
                });
              return {
                title: name,
                subtitle: `$${price} | ${dateFormatted}`,
                media: image,
              };
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'orders',
      title: 'Order Lists',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'order' }] }],
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
  ],
});
