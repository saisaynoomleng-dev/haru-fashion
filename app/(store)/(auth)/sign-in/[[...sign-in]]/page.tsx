'use client';

import Bounded from '@/components/Bounded';
import { useSignIn } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { OAuthStrategy } from '@clerk/types';
import Image from 'next/image';
import Title from '@/components/Title';
import { Input } from '@/components/ui/input';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { FaApple, FaFacebook, FaGoogle } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import clsx from 'clsx';

const SignInPage = () => {
  const { signIn, isLoaded, setActive } = useSignIn();
  const router = useRouter();

  const [identifier, setIdentifier] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  if (!isLoaded) return null;

  const handleSignIn = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');

    if (!isLoaded) return;

    try {
      const completeSignIn = await signIn.create({
        identifier,
        password,
      });

      if (completeSignIn.status !== 'complete') {
        console.log(JSON.stringify(completeSignIn, null, 2));
      }

      if (completeSignIn.status === 'complete') {
        await setActive({ session: completeSignIn.createdSessionId });
        router.push('/');
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
      setError(err.errors[0].message);
    }
  };

  const handleOAuth = async (strategy: OAuthStrategy) => {
    if (!isLoaded) return;
    setError('');

    try {
      await signIn.authenticateWithRedirect({
        strategy,
        redirectUrl: '/sso-callback',
        redirectUrlComplete: '/',
      });
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
      setError(err.errors[0].message);
    }
  };

  const LABEL_CLASS = 'after:content-["*"] after:ml-1 after:text-red-500';

  return (
    <Bounded className="grid md:grid-cols-2 gap-y-5 md:gap-x-8 add-padding">
      <form
        onSubmit={handleSignIn}
        className="flex flex-col gap-y-3 md:gap-y-5 justify-around"
      >
        <Title as="h2" size="sm" className="font-libre uppercase text-center">
          Sign In
        </Title>

        <div className="space-y-3">
          <label htmlFor="identifier" className={LABEL_CLASS}>
            Email
          </label>
          <Input
            type="email"
            id="identifier"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
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
          Sign In
        </Button>

        <hr className="bg-brand-black/10 w-1/2 mx-auto" />

        <p className="text-fs-200">
          New to our app?{' '}
          <Link href="/sign-up" className="underline text-blue-500">
            Sign Up
          </Link>
        </p>
      </form>

      <div>
        <Image
          src="/signin.jpg"
          alt=""
          priority
          width={600}
          height={800}
          className="mx-auto"
        />
      </div>
    </Bounded>
  );
};

export default SignInPage;
