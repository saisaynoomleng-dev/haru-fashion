'use client';

import { useState } from 'react';
import Bounded from './Bounded';
import clsx from 'clsx';
import { useClerk } from '@clerk/nextjs';
import { Button } from './ui/button';

type Tab = {
  title: string;
  content: React.ReactNode;
};

interface TabProps {
  tabs: Tab[];
}

const UserTabs = ({ tabs }: TabProps) => {
  const { signOut } = useClerk();
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <Bounded className="grid md:grid-cols-2 add-padding">
      <div className="flex flex-row md:flex-col justify-around md:gap-y-3 md:justify-start">
        {tabs.map((tab, i) => (
          <button
            key={tab.title}
            onClick={() => setActiveIndex(i)}
            className={clsx(
              'md:text-left md:pl-5',
              activeIndex === i && 'underline underline-offset-4 font-semibold',
            )}
          >
            {tab.title}
          </button>
        ))}
        <Button
          onClick={() => signOut({ redirectUrl: '/account' })}
          className="md:text-left px-2 md:px-5 md:ml-5 font-bold border md:self-start bg-red-900 text-brand-white"
        >
          Sign Out
        </Button>
      </div>

      <div>{tabs[activeIndex].content}</div>
    </Bounded>
  );
};

export default UserTabs;
