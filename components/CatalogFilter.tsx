'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectGroup,
  SelectValue,
} from './ui/select';
import { Button } from './ui/button';
import { Slider } from './ui/slider';
import { useState } from 'react';

const FILTERS = [
  { title: 'All', value: '' },
  { title: 'Women', value: 'women-wears' },
  { title: 'Men', value: 'men-wears' },
  { title: 'Accessories', value: 'accessories' },
  { title: 'Watch', value: 'watch' },
  { title: 'Sportwears', value: 'sportwears' },
];

const COLORS = [
  { title: 'Red', value: 'red' },
  { title: 'Gray', value: 'gray' },
  { title: 'Pink', value: 'pink' },
  { title: 'White', value: 'white' },
  { title: 'Brown', value: 'brown' },
  { title: 'Black', value: 'black' },
];

const SIZES = [
  { title: 'S', value: 's' },
  { title: 'M', value: 'm' },
  { title: 'L', value: 'l' },
  { title: 'XL', value: 'xl' },
  { title: 'XXL', value: 'xxl' },
];

const CatalogFilter = ({
  color,
  size,
  filter,
  minPrice,
  maxPrice,
}: {
  color?: string;
  size?: string;
  filter?: string;
  minPrice?: number;
  maxPrice?: number;
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [minPriceRange, setMinPriceRange] = useState<number>(0);
  const [maxPriceRange, setMaxPriceRange] = useState<number>(2000);

  const filters = searchParams.get('filter');

  const updateFilters = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);

    if (value === 'all' || value === '') {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }

    router.push(`/catalog?${newParams.toString()}`);
  };

  const setPriceRange = (min: number, max: number) => {
    setMinPriceRange(min);
    setMaxPriceRange(max);
  };

  return (
    <div className="flex flex-col gap-4 add-padding">
      <div className="flex gap-3 items-center justify-center p">
        {FILTERS.map((filter) => (
          <button key={filter.value} className="text-xs md:text-fs-300">
            <Link
              href={{
                pathname: '/catalog',
                query: {
                  ...(color && { color }),
                  ...(size && { size }),
                  ...(minPrice && { minPrice }),
                  ...(maxPrice && { maxPrice }),
                  filter: filter.value,
                },
              }}
              className={clsx(
                'uppercase',
                filters == filter.value || (!filters && filter.value === '')
                  ? 'text-brand-black/100'
                  : 'text-brand-black/20',
              )}
            >
              {filter.title}
            </Link>
          </button>
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-2">
        <Select
          value={color}
          defaultValue="all"
          onValueChange={(value) => updateFilters('color', value)}
        >
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Colors" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Colors</SelectLabel>
              <SelectItem value="all">All Colors</SelectItem>
              {COLORS.map((color) => (
                <SelectItem key={color.value} value={color.value}>
                  {color.title}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select
          value={size}
          defaultValue="all"
          onValueChange={(value) => updateFilters('size', value)}
        >
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Sizes" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Sizes</SelectLabel>
              <SelectItem value="all">All Sizes</SelectItem>
              {SIZES.map((size) => (
                <SelectItem key={size.value} value={size.value}>
                  {size.title}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <div className="flex flex-col gap-1 w-[150px]">
          <p>
            Price{' '}
            <span className="text-sm">
              ( ${minPriceRange}-${maxPriceRange} )
            </span>
          </p>
          <Slider
            defaultValue={[0, 5000]}
            min={0}
            max={5000}
            step={100}
            //   value={[minPriceRange, maxPriceRange]}
            onValueChange={([minPriceRange, maxPriceRange]) => {
              setPriceRange(minPriceRange, maxPriceRange);

              const priceParams = new URLSearchParams(searchParams);
              priceParams.set('minPrice', String(minPriceRange));
              priceParams.set('maxPrice', String(maxPriceRange));

              router.push(`/catalog?${priceParams.toString()}`);
            }}
          />
        </div>

        {(filter || size || color || minPrice || maxPrice) && (
          <Link href="/catalog">
            <Button className="bg-red-400 text-brand-black">
              Clear Filter
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default CatalogFilter;
