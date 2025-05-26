import { TitleProps } from '@/lib/types';
import clsx from 'clsx';

const Title = ({ children, as: Comp = 'h1', className, size }: TitleProps) => {
  return (
    <Comp
      className={clsx(
        ' text-balance',
        size == 'lg' && 'text-fs-600 md:text-fs-700 lg:text-fs-800',
        size == 'md' && 'text-fs-500 md:text-fs-600 lg:text-fs-700',
        size == 'sm' && 'text-fs-400 md:text-fs-500 lg:text-fs-600',
        className,
      )}
    >
      {children}
    </Comp>
  );
};

export default Title;
