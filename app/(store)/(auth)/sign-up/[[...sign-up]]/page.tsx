'use client';

import Bounded from '@/components/Bounded';
import Title from '@/components/Title';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useSignIn, useSignUp } from '@clerk/nextjs';
import { OAuthStrategy } from '@clerk/types';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaApple, FaFacebook, FaGoogle } from 'react-icons/fa';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';

const SignUpPage = () => {
  const { signUp, setActive, isLoaded: signUpLoaded } = useSignUp();
  const { signIn, isLoaded: signInLoaded } = useSignIn();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [pendingVerification, setPendingVerification] =
    useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');

  if (!signUpLoaded) return null;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');

    if (!signUpLoaded) return;

    try {
      await signUp.create({
        emailAddress,
        password,
        firstName,
        lastName,
      });

      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });

      setPendingVerification(true);
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
      setError(err.errors[0].message);
    }
  };

  const handleVerification = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!signUpLoaded) return;

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (completeSignUp.status !== 'complete') {
        console.log(JSON.stringify(completeSignUp, null, 2));
      }

      if (completeSignUp.status === 'complete') {
        await setActive({ session: completeSignUp.createdSessionId });
        router.push('/');
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));

      setError(err.errors[0].message);
    }
  };

  const handleOAuth = async (strategy: OAuthStrategy) => {
    if (!signInLoaded) return;
    setError('');

    try {
      await signIn.authenticateWithRedirect({
        strategy,
        redirectUrl: '/sso-callback',
        redirectUrlComplete: '/account',
      });
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
      setError(err.errors[0].message);
    }
  };

  const LABEL_CLASS = 'after:content-["*"] after:ml-1 after:text-red-500 block';

  return (
    <Bounded className="grid md:grid-cols-2 gap-y-5 md:gap-x-8 add-padding">
      {!pendingVerification ? (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-y-3 md:gap-y-5 justify-around"
        >
          <Title as="h2" size="sm" className="font-libre uppercase text-center">
            Sign Up
          </Title>

          <div className="space-y-3">
            <label htmlFor="firstname" className={LABEL_CLASS}>
              First Name
            </label>
            <Input
              type="text"
              id="firstname"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              autoComplete="firstname"
            />
          </div>

          <div className="space-y-3">
            <label htmlFor="lastname" className={LABEL_CLASS}>
              Last Name
            </label>
            <Input
              type="text"
              id="lastname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              autoComplete="lastname"
            />
          </div>

          <div className="space-y-3">
            <label htmlFor="email" className={LABEL_CLASS}>
              Email
            </label>
            <Input
              type="email"
              id="email"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              autoComplete="email"
            />
          </div>

          <div className="space-y-3 relative">
            <label htmlFor="password" className={LABEL_CLASS}>
              Password
            </label>
            <Input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
            />
            <button
              onClick={() => setShowPassword((prevOn) => !prevOn)}
              type="button"
              className="absolute top-[50%] right-2 cursor-pointer"
            >
              {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
            </button>
          </div>

          {error && <p className="text-fs-200 text-red-500 italic">{error}</p>}

          <div className="text-center my-5">
            <p
              className={clsx(
                'before:absolute before:content-[""] before:w-1/3 before:h-[1px] before:bg-brand-black/10 relative before:left-0 before:top-[50%]',
                'after:absolute after:content-[""] after:w-1/3 after:h-[1px] after:bg-brand-black/10 relative after:right-0 after:top-[50%]',
              )}
            >
              OR
            </p>
          </div>

          <div className="grid grid-cols-3 place-items-center">
            <button
              type="button"
              onClick={() => handleOAuth('oauth_facebook')}
              className="border p-2 rounded-lg cursor-pointer hover:text-blue-500 hover:scale-[1.03] transition-all duration-300"
              aria-label="Sign In with Facebook"
            >
              <FaFacebook />
            </button>

            <button
              type="button"
              onClick={() => handleOAuth('oauth_google')}
              className="border p-2 rounded-lg cursor-pointer hover:text-blue-500 hover:scale-[1.03] transition-all duration-300"
              aria-label="Sign In with Google"
            >
              <FaGoogle />
            </button>

            <button
              type="button"
              onClick={() => handleOAuth('oauth_apple')}
              className="border p-2 rounded-lg cursor-pointer hover:text-blue-500 hover:scale-[1.03] transition-all duration-300"
              aria-label="Sign In with Facebook"
            >
              <FaApple />
            </button>
          </div>

          <div id="clerk-captcha" />

          <Button
            variant="submit"
            type="submit"
            className="bg-brand-black text-brand-white"
          >
            Sign Up
          </Button>

          <hr className="bg-brand-black/10 w-1/2 mx-auto" />

          <p className="text-fs-200">
            Already has an account with us?{' '}
            <Link href="/sign-in" className="underline text-blue-500">
              Sign In
            </Link>
          </p>
        </form>
      ) : (
        <form
          onSubmit={handleVerification}
          className="flex flex-col gap-3 md:gap-5"
        >
          <Title as="h2" size="sm" className="font-libre uppercase text-center">
            Verify
          </Title>

          <div className="space-y-3">
            <label htmlFor="code">Verification Code</label>
            <Input
              type="text"
              id="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>

          {error && <p className="text-fs-200 italic text-red-500">{error}</p>}

          <Button variant="submit" type="submit">
            Verify
          </Button>
        </form>
      )}
      <div>
        <Image
          src="/signup.jpg"
          alt=""
          priority
          width={600}
          height={800}
          className=""
        />
      </div>
    </Bounded>
  );
};

export default SignUpPage;
