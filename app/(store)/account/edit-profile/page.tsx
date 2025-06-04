'use client';

import Bounded from '@/components/Bounded';
import Title from '@/components/Title';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { editProfile } from '@/lib/actions';
import { useUser } from '@clerk/nextjs';
import clsx from 'clsx';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { useActionState, useState } from 'react';

const EditProfile = () => {
  const { user } = useUser();
  const [userData, setUserData] = useState({
    firstname: user?.firstName,
    lastname: user?.lastName,
  });

  if (!user) redirect('/sign-in');

  const initialFormState = {
    state: '',
    message: '',
    field: '',
    userId: user?.id,
  };

  const [state, actionFunction, isPending] = useActionState(
    editProfile,
    initialFormState,
  );

  const LABEL_CLASS = 'after:content-["*"] after:ml-1 after:text-red-500 block';

  return (
    <Bounded className="add-padding">
      <Link href="/account">&larr; Back to Account</Link>
      <Title as="h1" size="md" className="text-center">
        Update Your Profile
      </Title>

      <form
        action={actionFunction}
        className="grid md:grid-cols-2 gap-4 md:gap-8"
      >
        <div className="space-y-5">
          <label htmlFor="firstname" className={LABEL_CLASS}>
            First Name
          </label>
          <Input
            id="firstname"
            name="firstname"
            type="text"
            required
            value={userData.firstname as string}
            onChange={(e) =>
              setUserData((prevData) => ({
                ...prevData,
                firstname: e.target.value,
              }))
            }
          />
          {state.state === 'error' && state.field === 'firstname' && (
            <p className="italic text-fs-200 text-red-500">{state.message}</p>
          )}
        </div>

        <div className="space-y-5">
          <label htmlFor="lastname" className={LABEL_CLASS}>
            Last Name
          </label>
          <Input
            id="lastname"
            name="lastname"
            type="text"
            required
            value={userData.lastname as string}
            onChange={(e) =>
              setUserData((prevData) => ({
                ...prevData,
                lastname: e.target.value,
              }))
            }
          />
          {state.state === 'error' && state.field === 'lastname' && (
            <p className="italic text-fs-200 text-red-500">{state.message}</p>
          )}
        </div>

        <div className="space-y-5 col-span-full">
          <label htmlFor="phone" className={LABEL_CLASS}>
            Phone
          </label>
          <Input id="phone" name="phone" type="text" required />
          {state.state === 'error' && state.field === 'phone' && (
            <p className="italic text-fs-200 text-red-500">{state.message}</p>
          )}
        </div>

        <div className="space-y-5">
          <label htmlFor="Address1" className={LABEL_CLASS}>
            Address 1
          </label>
          <Input id="address1" name="address1" type="text" required />
          {state.state === 'error' && state.field === 'address1' && (
            <p className="italic text-fs-200 text-red-500">{state.message}</p>
          )}
        </div>

        <div className="space-y-5">
          <label htmlFor="address2" className={LABEL_CLASS}>
            Address 2
          </label>
          <Input id="address2" name="address2" type="text" required />
          {state.state === 'error' && state.field === 'address2' && (
            <p className="italic text-fs-200 text-red-500">{state.message}</p>
          )}
        </div>

        <div className="space-y-5">
          <label htmlFor="city" className={LABEL_CLASS}>
            City
          </label>
          <Input id="city" name="city" type="text" required />
          {state.state === 'error' && state.field === 'city' && (
            <p className="italic text-fs-200 text-red-500">{state.message}</p>
          )}
        </div>

        <div className="space-y-5">
          <label htmlFor="state" className={LABEL_CLASS}>
            State
          </label>
          <Input id="state" name="state" type="text" required />
          {state.state === 'error' && state.field === 'state' && (
            <p className="italic text-fs-200 text-red-500">{state.message}</p>
          )}
        </div>

        <div className="space-y-5">
          <label htmlFor="zip" className={LABEL_CLASS}>
            Zip Code
          </label>
          <Input id="zip" name="zip" type="text" required />
          {state.state === 'error' && state.field === 'zip' && (
            <p className="italic text-fs-200 text-red-500">{state.message}</p>
          )}
        </div>

        <div className="space-y-5">
          <label htmlFor="country" className={LABEL_CLASS}>
            Country
          </label>
          <Input id="country" name="country" type="text" required />
          {state.state === 'error' && state.field === 'country' && (
            <p className="italic text-fs-200 text-red-500">{state.message}</p>
          )}
        </div>

        <Button
          type="submit"
          variant="submit"
          className={clsx(
            'bg-brand-black text-brand-white',
            isPending && 'bg-brand-black/20 pointer-events-none',
          )}
        >
          Update Changes
        </Button>
      </form>
    </Bounded>
  );
};

export default EditProfile;
