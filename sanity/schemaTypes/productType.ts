import { FaTshirt } from 'react-icons/fa';
import { defineField, defineType } from 'sanity';

export const productType = defineType({
  name: 'product',
  title: 'Products',
  icon: FaTshirt,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (rule) =>
        rule
          .required()
          .min(10)
          .info(`Product name should be at least 10 characters`),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'sizes',
      title: 'Size',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'size' }] }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'colors',
      title: 'Colors',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'color' }] }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Product Price',
      type: 'number',
      initialValue: 50,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'desc',
      title: 'Product Description',
      type: 'blockContent',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'dateAdded',
      title: 'Date Added to Stock',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Product Images',
      type: 'array',
      of: [
        {
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
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'stock',
      title: 'Number in Stock',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      name: 'name',
      price: 'price',
      image: 'mainImage.0.asset',
    },
    prepare({ name, price, image }) {
      return {
        title: `${name}`,
        subtitle: `Price: $${price}`,
        media: image,
      };
    },
  },
});
