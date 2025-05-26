'use client';

import Form from 'next/form';
import React, { useActionState, useEffect } from 'react';
import { Button } from './ui/button';
import { submitNewsletter } from '@/lib/actions';
import clsx from 'clsx';
import { toast } from 'sonner';

const initialFormState = {
  state: '',
  message: '',
};

const Newsletter = () => {
  const [formState, actionFunction, isPending] = useActionState(
    submitNewsletter,
    initialFormState,
  );

  useEffect(() => {
    if (formState.state === 'success') {
      toast(formState.message, {
        action: {
          label: 'X',
          onClick: () => console.log('x'),
        },
      });
    } else if (formState.state === 'error') {
      toast.error(formState.message);
    }
  }, [formState.state, formState.message]);

  return (
    <div className="flex flex-col gap-3">
      <p>Subscribe to receive new releases, exclusive deals and more.</p>

      <Form
        action={actionFunction}
        className="relative w-full flex gap-3 items-center"
      >
        <label htmlFor="email" className="sr-only">
          Yout Email
        </label>
        <input
          type="email"
          required
          name="email"
          placeholder="Email Address"
          className="border-b outline-none focus-visible:ring-[3px] focus-visible:ring-blue-500"
        />

        {formState.state === 'error' && (
          <p className="text-fs-200 text-red-500">{formState.message}</p>
        )}

        <Button
          variant="submit"
          className={clsx(
            'bg-brand-white text-brand-black',
            isPending ? 'bg-muted' : 'bg-brand-white',
          )}
          disabled={isPending}
        >
          <span className="sr-only">Submit</span>
        </Button>
      </Form>
    </div>
  );
};

export default Newsletter;
