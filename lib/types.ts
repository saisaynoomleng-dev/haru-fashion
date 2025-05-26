// Bounded
export type BoundedProps = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
};

// Title
export type TitleProps = {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
  size?: 'lg' | 'md' | 'sm';
};
