'use client';

import React from 'react';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
import { addBag } from '@/lib/actions';

const AddBag = ({
  userId,
  productId,
}: {
  userId: string;
  productId: string;
}) => {
  const router = useRouter();
  const handleClick = async () => {
    if (!userId) router.push('/sign-in');

    try {
      await addBag(userId, productId);
    } catch (err: any) {
      console.error(err.message);
    }
  };
  return (
    <Button className="border" onClick={handleClick}>
      Add to Bag
    </Button>
  );
};

export default AddBag;
