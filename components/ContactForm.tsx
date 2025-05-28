'use client';

import Form from 'next/form';
import React, { useActionState, useEffect, useState } from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import Link from 'next/link';
import { submitContactForm } from '@/lib/actions';
import clsx from 'clsx';
import { toast } from 'sonner';

const LABEL_CLASS = 'block after:content-["*"] after:text-red-500 after:ml-0.5';
const initialFormState = {
  state: '',
  message: '',
  field: '',
};

const ContactForm = () => {
  const [hasChecked, setHasChecked] = useState<boolean>(false);
  const [state, actionFunction] = useActionState(
    submitContactForm,
    initialFormState,
  );

  useEffect(() => {
    if (state.state === 'success') {
      toast(state.message, {
        action: {
          label: 'x',
          onClick: () => console.log('x'),
        },
      });
    } else if (state.state === 'error') {
      toast.error(state.message);
    }
  }, [state.state, state.message]);

  return (
    <Form
      action={actionFunction}
      className="flex flex-col gap-y-3 md:gap-y-5"
      noValidate
    >
      <div className="space-y-3 md:space-y-5">
        <label htmlFor="firstname" className={LABEL_CLASS}>
          First Name
        </label>
        <Input
          name="firstname"
          id="firstname"
          type="text"
          autoComplete="firstname"
          required
        />
        {state.state === 'error' && state.field === 'firstname' && (
          <p className="text-red-500 text-fs-200 italic">{state.message}</p>
        )}
      </div>

      <div className="space-y-3 md:space-y-5">
        <label htmlFor="lastname" className={LABEL_CLASS}>
          Last Name
        </label>
        <Input
          type="text"
          name="lastname"
          id="lastname"
          autoComplete="lastname"
          required
        />
        {state.state === 'error' && state.field === 'lastname' && (
          <p className="text-red-500 text-fs-200 italic">{state.message}</p>
        )}
      </div>

      <div className="space-y-3 md:space-y-5">
        <label htmlFor="email" className={LABEL_CLASS}>
          Email Address
        </label>
        <Input
          name="email"
          id="email"
          type="email"
          autoComplete="username"
          required
        />
        {state.state === 'error' && state.field === 'email' && (
          <p className="text-red-500 text-fs-200 italic">{state.message}</p>
        )}
      </div>

      <div className="space-y-3 md:space-y-5">
        <label htmlFor="phone" className={LABEL_CLASS}>
          Phone Number
        </label>
        <Input
          type="text"
          name="phone"
          id="phone"
          autoComplete="phone"
          required
        />
        {state.state === 'error' && state.field === 'phone' && (
          <p className="text-red-500 text-fs-200 italic">{state.message}</p>
        )}
      </div>

      <div className="space-y-3 md:space-y-5">
        <label htmlFor="message" className={LABEL_CLASS}>
          Message
        </label>
        <Textarea name="message" id="message" />
        {state.state === 'error' && state.field === 'message' && (
          <p className="text-red-500 text-fs-200 italic">{state.message}</p>
        )}
      </div>

      <div className="flex items-center gap-2">
        <Checkbox
          id="checkbox"
          name="hasReadPolicy"
          required
          onCheckedChange={() => setHasChecked((prev) => !prev)}
        />
        <label htmlFor="checkbox" className={'block'}>
          Have read and understand the{' '}
          <Link href="/privacy-policy" className="underline">
            Privacy Policy
          </Link>
        </label>
      </div>

      <Button
        disabled={!hasChecked}
        variant="submit"
        type="submit"
        className={clsx(
          ' text-brand-white max-w-[200px]',
          hasChecked ? 'bg-brand-black' : 'bg-brand-black/40',
        )}
      >
        Send Message
      </Button>
    </Form>
  );
};

export default ContactForm;
