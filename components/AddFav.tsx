'use client';

import { addFavorite } from '@/lib/actions';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';

const AddFav = ({
  className,
  productId,
  userId,
}: {
  userId: string;
  className?: string;
  productId: string;
}) => {
  const router = useRouter();

  const handleClick = async () => {
    if (!userId) router.push('/sign-in');

    try {
      await addFavorite(userId as string, productId);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <Button
      onClick={handleClick}
      className={clsx('bg-blue-400 text-brand-white', className)}
    >
      Add to Favorite
    </Button>
  );
};

export default AddFav;
