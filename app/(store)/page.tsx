import {
  LineTextFlowEffect,
  SlideInEffect,
  SlideInGroup,
} from '@/components/Animation';
import Bounded from '@/components/Bounded';
import LatestProduct from '@/components/LatestProduct';
import LookBookSection from '@/components/LookBookSection';
import MainHero from '@/components/MainHero';
import Title from '@/components/Title';
import { Button } from '@/components/ui/button';
import { sanityFetch } from '@/sanity/lib/live';
import { LOOKBOOKS_QUERY } from '@/sanity/lib/queries';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  const { data: books } = await sanityFetch({ query: LOOKBOOKS_QUERY });

  return (
    <Bounded>
      <MainHero />

      <SlideInGroup
        direction="top"
        className="bg-brand-black text-brand-white grid grid-cols-6 gap-3 p-5 uppercase text-fs-300 grid-rows-[200px_200px_200px] md:place-items-center md:text-fs-500 py-10 overflow-hidden pb-50"
      >
        <div className="relative group col-start-1 col-end-2 row-start-1 row-end-2">
          <Link
            href="/catalog?filter=women-wears"
            className="block group-hover:underline relative z-10"
          >
            Women
          </Link>
          <Image
            src="/women.jpg"
            width={400}
            height={400}
            alt="women image"
            priority
            className="hidden group-hover:block absolute z-0 indent-0 rounded-lg top-10"
          />
        </div>

        <div className="relative group col-start-4 col-end-5 row-start-1 row-end-2">
          <Link
            href="/catalog?filter=men-wears"
            className="block group-hover:underline relative z-10"
          >
            Men
          </Link>
          <Image
            src="/men.jpg"
            width={400}
            height={400}
            alt="women image"
            priority
            className="hidden group-hover:block absolute z-0 indent-0 rounded-lg top-10"
          />
        </div>

        <div className="relative group col-start-2 col-end-3 row-start-2 row-end-3">
          <Link
            href="/catalog?filter=sportwears"
            className="block group-hover:underline relative z-10"
          >
            Sports
          </Link>
          <Image
            src="/sport.jpg"
            width={400}
            height={400}
            alt="women image"
            priority
            className="hidden group-hover:block absolute z-0 indent-0 rounded-lg top-10"
          />
        </div>

        <div className="relative group col-start-5 col-end-6 row-start-3 row-end-4">
          <Link
            href="/catalog?filter=accessories"
            className="block group-hover:underline relative z-10"
          >
            Accessories
          </Link>
          <Image
            src="/accessories.jpg"
            width={400}
            height={400}
            alt="women image"
            priority
            className="hidden group-hover:block absolute z-0 indent-0 rounded-lg top-10"
          />
        </div>

        <div className="relative group col-start-1 col-end-2 row-start-3 row-end-4">
          <Link
            href="/catalog?filter=watch"
            className="block group-hover:underline relative z-10"
          >
            Luxury Watch
          </Link>
          <Image
            src="/watch.jpg"
            width={400}
            height={400}
            alt="women image"
            priority
            className="hidden group-hover:block absolute z-0 indent-0 rounded-lg top-10"
          />
        </div>

        <div className="relative group col-start-5 col-end-6 row-start-2 row-end-3">
          <Link
            href="/catalog?filter=woman-dresses"
            className="block group-hover:underline relative z-10"
          >
            Dresses
          </Link>
          <Image
            src="/dresses.jpg"
            width={400}
            height={400}
            alt="women image"
            priority
            className="hidden group-hover:block absolute z-0 indent-0 rounded-lg top-10"
          />
        </div>
      </SlideInGroup>

      <LatestProduct />

      <div className="space-y-5 md:space-y-10 bg-brand-black text-brand-white py-5 md:py-8">
        <SlideInEffect
          direction="top"
          className="col-span-full text-center uppercase"
        >
          <Title as="h3" size="md">
            How it began
          </Title>
        </SlideInEffect>

        <div className="grid grid-cols-2 grid-rows-[1fr_100px_1fr] gap-5 md:gap-8 px-5 md:px-10 md:max-w-[80%] lg:max-w-[60%] md:mx-auto">
          <SlideInEffect
            direction="top"
            className="col-start-1 col-end-2 row-start-1 row-end-4 place-self-end"
          >
            <Image
              src="/home-hero2.jpg"
              width={600}
              height={400}
              alt=""
              priority
              className="max-w-40 md:max-w-50 rounded-sm"
            />
          </SlideInEffect>

          <LineTextFlowEffect className="col-start-2 col-end-3 row-start-1 row-end-2">
            The company was founded by Joseph Hepworth in Leeds in 1985 as a
            tailor under the name of Joseph Hepworth & Son. Initially Hepworth
            was in partnership with James Rhodes, but the partnership was
            dissolved in 1872. On his own, Hepworth expanded the company
            rapidly, becoming a pioneer of the development of chain stores in
            Britain. By 1884 the company had 100 outlets.
          </LineTextFlowEffect>

          <LineTextFlowEffect className="col-start-2 col-end-3 row-start-3 row-end-4 ">
            By 2019, the company was sold to Dr.Haru, a dentist and fashion
            ethusiast. With the help of her husband, cousins and family, she
            successfully managed to expand the company to worlwide.
          </LineTextFlowEffect>
        </div>

        <SlideInEffect direction="bottom">
          <Button
            variant="link"
            className=" underline underline-offset-4 mx-auto"
          >
            <Link href="/about-us">Read About Us</Link>
          </Button>
        </SlideInEffect>
      </div>

      <LookBookSection books={books} />
    </Bounded>
  );
}
