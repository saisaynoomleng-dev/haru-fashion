'use client';

import { removeBag } from '@/lib/actions';
import { Button } from './ui/button';

const RemoveBag = ({
  userId,
  productKey,
}: {
  userId: string;
  productKey: string;
}) => {
  const handleClick = async () => {
    try {
      await removeBag(userId, productKey);
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <Button onClick={handleClick} className="bg-red-900 text-brand-white">
      Remove From Bag
    </Button>
  );
};

export default RemoveBag;
