'use client';

import clsx from 'clsx';
import Link from 'next/link';
import Form from 'next/form';
import { Input } from './ui/input';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { title: 'About Us', url: '/about-us' },
  { title: 'Look Book', url: '/look-book' },
  { title: 'Favorite', url: '/favorite' },
  { title: 'Bag', url: '/bag' },
  { title: 'Contact', url: '/contact' },
  { title: 'Account', url: '/account' },
];

const Header = () => {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflow = navOpen ? 'hidden' : '';
  }, [navOpen]);

  return (
    <header className="px-5 py-5  lg:px-8 flex justify-between items-center font-libre">
      <Link href="/" className="text-fs-500 md:text-fs-600 font-libre">
        HARU
      </Link>

      <Link
        href="/catalog"
        className={clsx(
          pathname == '/catalog' && 'underline underline-offset-2',
        )}
      >
        Catalog
      </Link>

      <div className="flex justify-between gap-2 items-center">
        {/* search form */}
        <Form action="/search" className="max-w-[120px]">
          <label htmlFor="search" className="sr-only">
            Search Anything
          </label>
          <Input name="query" id="search" placeholder="Search..." />
        </Form>

        <button
          type="button"
          className={clsx(
            'hidden max-md:block max-md:relative max-md:z-50 w-[1.5rem] h-[3px] bg-brand-black/50 rounded-lg  cursor-pointer relative ml-3 transition-all duration-300 ease',
            'before:absolute  before:right-0 before:h-[3px] before:bottom-2 before:bg-brand-black/50 before:rounded-lg ',
            'after:absolute after:w-[1rem] after:right-0 after:indent-0 after:top-2 after:h-[3px] after:rounded-lg after:bg-brand-black/50',
            navOpen
              ? 'after:hidden rotate-45 before:-rotate-90 before:w-[1.5rem] w-[1.5rem] before:top-0 before:bottom-0 bg-brand-black/100 before:bg-brand-black/100'
              : 'before:w-[2rem]',
          )}
          onClick={() => setNavOpen((prev) => !prev)}
          aria-label={navOpen ? 'Close Main Menu' : 'Open Main Menu'}
          aria-expanded={navOpen}
          aria-controls="#nav"
        />

        <nav
          id="nav"
          aria-label="navigation menu"
          role="navigation"
          className={clsx(
            'flex gap-3',
            'max-md:fixed max-md:flex-col max-md:inset-0 max-md:left-[10vw] max-md:bg-brand-white  max-md:justify-center max-md:items-center max-md:z-20 transition-all duration-300 ease',
            navOpen ? 'max-md:translate-x-0' : 'max-md:translate-x-full',
          )}
        >
          {NAV_LINKS.map((link) => (
            <Link
              href={link.url}
              key={link.url}
              className={clsx(
                pathname == link.url && 'underline underline-offset-2',
              )}
              onClick={() => setNavOpen(false)}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
