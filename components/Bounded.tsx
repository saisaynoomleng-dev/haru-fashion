import { BoundedProps } from '@/lib/types';
import clsx from 'clsx';

const Bounded = ({
  children,
  as: Comp = 'section',
  className,
}: BoundedProps) => {
  return (
    <Comp
      className={clsx('px-5 py-5 lg:px-8 space-y-5 md:space-y-10', className)}
    >
      {children}
    </Comp>
  );
};

export default Bounded;
