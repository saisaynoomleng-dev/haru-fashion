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

export const submitContactForm = async (
  prevState: PrevFormStateProps,
  formData: FormData,
): Promise<{ state: string; message: string; field?: string }> => {
  const firstname = formData.get('firstname')?.toString().trim() || '';
  const lastname = formData.get('lastname')?.toString().trim() || '';
  const email = formData.get('email')?.toString().trim() || '';
  const phone = formData.get('phone')?.toString().trim() || '';
  const message = formData.get('message')?.toString().trim() || '';

  const reg_email = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;

  if (!firstname) {
    return {
      state: 'error',
      message: 'First name field cannot be empty',
      field: 'firstname',
    };
  }

  if (!lastname) {
    return {
      state: 'error',
      message: 'Last name field cannot be empty',
      field: 'lastname',
    };
  }

  if (!email) {
    return {
      state: 'error',
      message: 'Email field cannot be empty',
      field: 'email',
    };
  }

  if (!phone) {
    return {
      state: 'error',
      message: 'Phone Number field cannot be empty',
      field: 'phone',
    };
  }

  if (!message) {
    return {
      state: 'error',
      message:
        'Message field cannot be empty && message should have at least 10 characters',
      field: 'message',
    };
  }

  if (!reg_email.test(email)) {
    return {
      state: 'error',
      message: 'Must be a valid email address',
      field: 'email',
    };
  }

  try {
    await client.create({
      _type: 'contact',
      firstname,
      lastname,
      email,
      phone,
      message,
    });

    return {
      state: 'success',
      message: `Thank you for your message, we'll be in touch in a short time!`,
    };
  } catch (err) {
    console.error(err);
    return {
      state: 'error',
      message: 'Something went wrong! Try again later!',
    };
  }
};

export const editProfile = async (
  prevState: {
    state?: string;
    message?: string;
    field?: string;
    userId: string;
  },
  formData: FormData,
): Promise<{
  state?: string;
  message?: string;
  field?: string;
  userId: string;
}> => {
  const firstname = formData.get('firstname')?.toString().trim() || '';
  const lastname = formData.get('lastname')?.toString().trim() || '';
  const phone = formData.get('phone')?.toString().trim() || '';
  const address1 = formData.get('address1')?.toString().trim() || '';
  const address2 = formData.get('address2')?.toString().trim() || '';
  const city = formData.get('city')?.toString().trim() || '';
  const state = formData.get('state')?.toString().trim() || '';
  const country = formData.get('country')?.toString().trim() || '';
  const zip = formData.get('zip')?.toString().trim() || '';

  try {
    await client
      .patch(prevState.userId)
      .set({
        firstname,
        lastname,
        phone,
        shippingAddress: {
          address1,
          address2,
          city,
          state,
          country,
          zip,
        },
      })
      .commit();

    return {
      state: 'success',
      message: 'Edit Successful',
      userId: prevState.userId || '',
    };
  } catch (err) {
    console.error(err);
    return {
      state: 'error',
      message: 'Something went wrong!',
      userId: prevState.userId || '',
    };
  }
};

export async function deleteFavorite(userId: string, productKey: string) {
  try {
    await client
      .patch(userId)
      .unset([`favorites[_key=="${productKey}"]`])
      .commit();
  } catch (error: any) {
    console.error('Sanity error:', error.message);
    throw new Error('Failed to delete favorite');
  }
}

export async function addFavorite(userId: string, productId: string) {
  const now = new Date().toISOString();
  try {
    await client
      .patch(userId)
      .setIfMissing({ favorites: [] })
      .append('favorites', [
        {
          _type: 'object',
          product: { _type: 'reference', _ref: productId },
          addedAt: now,
        },
      ])
      .commit({ autoGenerateArrayKeys: true });
  } catch (error: any) {
    console.error(error.message);
  }
}
