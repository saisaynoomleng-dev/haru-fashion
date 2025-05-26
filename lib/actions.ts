'use server';

import { client } from '@/sanity/lib/client';
import { PrevFormStateProps } from './types';

export const submitNewsletter = async (
  prevState: PrevFormStateProps,
  formData: FormData,
): Promise<{ state: string; message: string }> => {
  const email = formData.get('email')?.toString().trim() as string;
  const reg_email = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;

  if (!email) {
    return {
      state: 'error',
      message: `Email can't be empty`,
    };
  }

  if (!reg_email.test(email)) {
    return {
      state: 'error',
      message: `Must be a valid email address`,
    };
  }

  try {
    await client.create({
      _type: 'newsletter',
      email,
    });

    return {
      state: 'success',
      message: 'Thank you for your subscription',
    };
  } catch (err) {
    return {
      state: 'error',
      message: 'Something went Wrong! Try again later!',
    };
  }
};
