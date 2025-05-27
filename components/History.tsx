'use client';

import { HISTORY_QUERYResult } from '@/sanity/types';
import Title from './Title';
import { useState } from 'react';
import clsx from 'clsx';
import SanityImage from './SanityImage';

const History = ({
  history,
}: {
  history: NonNullable<HISTORY_QUERYResult>;
}) => {
  const { histories } = history;
  const [currentYear, setCurrentYear] = useState<number>(2025);
  const [currentIndex, setCurrentIndex] = useState<number>(8);

  if (!histories || histories.length === 0) return null;

  const currentItem = histories[currentIndex];

  const syncYear = (year: number, index: number) => {
    setCurrentIndex(index);
    setCurrentYear(year);
  };

  return (
    <div
      className={clsx(
        'bg-brand-black text-brand-white grid gap-2 md:add-padding py-10',
        'max-md:grid-cols-[min-content_1fr] max-md:grid-rows-[min-content_180px_1fr] max-md:gap-1',
      )}
    >
      <Title
        as="h3"
        size="md"
        className={clsx(
          'col-span-full uppercase text-center',
          'max-md:col-span-full max-md:col-start-1 max-md:row-start-1 max-md:mb-5',
        )}
      >
        Our History
      </Title>

      <div
        className={clsx(
          'flex gap-3 flex-nowrap overflow-x-scroll my-5 md:justify-center md:items-center py-10 hide-scrollbar',
          'max-md:flex-col-reverse max-md:gap-y-5 max-md:col-start-1 max-md:row-start-2 max-md:row-span-2 max-md:place-self-start',
        )}
      >
        {history.histories?.map((history, i) => (
          <button
            key={history.year}
            className={clsx(
              'transition-all duration-200 ease cursor-pointer',
              'max-md:-rotate-90 ',
              history.year === currentYear
                ? 'text-brand-white/100 text-fs-400 font-bold'
                : 'text-brand-white/50',
            )}
            onClick={() => setCurrentYear(history.year as number)}
            onClickCapture={() => setCurrentIndex(i)}
          >
            {history.year}
          </button>
        ))}
      </div>

      {currentItem?.desc && currentItem.title && (
        <div
          className={clsx(
            'flex flex-col gap-2 md:text-center md:max-w-[50%] md:mx-auto',
            'max-md:col-start-2 max-md:row-start-2 max-md:place-self-start',
          )}
        >
          <p className="font-semibold uppercase">{currentItem.title}</p>
          <p className="text-fs-200">{currentItem.desc}</p>
        </div>
      )}

      <div
        className={clsx(
          'flex gap-2  flex-wrap  justify-center',
          'max-md:col-start-2 max-md:row-start-3 max-md:gap-1 max-md:justify-start',
        )}
      >
        {histories.map((history, i) => (
          <button
            onClick={() => syncYear(history.year as number, i)}
            key={history.year}
          >
            <SanityImage
              imageUrl={history.mainImage?.asset?.url as string}
              alt={history.mainImage?.alt as string}
              className={clsx(
                '!w-[100px] !transition-all !duration-300 !ease cursor-pointer',
                history.mainImage?.asset?.url ===
                  histories[currentIndex].mainImage?.asset?.url && '!w-[200px]',
              )}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default History;
