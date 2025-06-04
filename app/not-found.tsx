import Bounded from '@/components/Bounded';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <Bounded className="add-padding flex flex-col justify-center items-center">
      <p className="text-[4rem] md:text-[5rem] lg:text-[6rem] uppercase font-bold">
        Not found
      </p>
      <p>URL you are looking for cannot be found.</p>
      <Button>
        <Link href="/">Back to Home Page</Link>
      </Button>
    </Bounded>
  );
};

export default NotFound;
