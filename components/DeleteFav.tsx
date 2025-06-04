'use client';

import { deleteFavorite } from '@/lib/actions';
import clsx from 'clsx';
import { Button } from './ui/button';
import { FaTrashAlt } from 'react-icons/fa';

const DeleteFav = ({
  userId,
  productKey,
  className,
}: {
  userId: string;
  productKey: string;
  className?: string;
}) => {
  const deleteFav = async () => {
    try {
      await deleteFavorite(userId, productKey);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <Button
      onClick={deleteFav}
      className={clsx(' bg-red-900 text-brand-white', className)}
    >
      <FaTrashAlt />
    </Button>
  );
};

export default DeleteFav;
