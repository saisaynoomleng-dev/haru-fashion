import { LucidePhoneIncoming } from 'lucide-react';
import { defineField, defineType } from 'sanity';

export const contactType = defineType({
  name: 'contact',
  title: 'Contact lists',
  type: 'document',
  icon: LucidePhoneIncoming,
  fields: [
    defineField({
      name: 'firstname',
      title: 'First Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'lastname',
      title: 'Last Nmae',
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
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
      validation: (rule) => rule.required().min(10),
    }),
  ],
  preview: {
    select: {
      firstname: 'firstname',
      lastname: 'lastname',
      email: 'email',
    },
    prepare({ firstname, lastname, email }) {
      const fullName = `${firstname} ${lastname}`;
      return {
        title: fullName,
        subtitle: email,
        media: LucidePhoneIncoming,
      };
    },
  },
});
