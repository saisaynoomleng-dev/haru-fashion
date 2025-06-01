import Bounded from '@/components/Bounded';
import LatestProduct from '@/components/LatestProduct';
import LookBookSection from '@/components/LookBookSection';
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
      {/* Intro Text */}

      <div className="grid grid-cols-2 auto-rows-min md:grid-cols-6 gap-5 md:gap-8 add-padding text-brand-white">
        <div className="relative w-full h-full md:col-start-1 md:col-end-7 md:row-start-2 md:row-end-6 col-start-1 col-span-full row-start-3 row-end-6">
          <Image
            src="/home-hero.jpg"
            width={1200}
            height={800}
            alt=""
            priority
            className="object-cover w-full h-full rounded-tl-sm rounded-br-sm rounded-bl-lg rounded-tr-full"
          />

          <div className="absolute inset-0 bg-brand-black/40 rounded-tr-[70%] z-0" />
          <div className="absolute inset-0 bg-brand-black/20 rounded-tr-[50%] z-0" />
          <div className="absolute inset-0 bg-brand-black/20 rounded-tr-[30%] z-0" />
          <div className="absolute inset-0 bg-brand-black/20 rounded-tr-[10%] z-0" />
        </div>

        <Title
          as="h1"
          className="text-[5rem] md:text-[13rem] lg:text-[15rem] text-center relative z-10 col-span-full text-brand-black col-start-1 row-start-1"
        >
          HARU&reg;
        </Title>

        <p className="md:col-start-2 md:row-start-2 col-span-full md:row-end-3 font-semibold relative z-10 text-brand-black col-start-1 row-start-2 md:text-brand-white p-2">
          Fashion Store
        </p>

        <p className="md:col-start-3 md:row-start-3 md:col-end-5 md:row-end-3 relative z-10 font-semibold col-start-1 row-start-3 text-sm md:text-fs-300 p-2">
          Haru&reg; is an American multinational clothing, luxury wears & sport
          wears retailer, which has its headquarters in Los Angeles, California.
          It has around 700 stores, of which circa 500 are in the United States,
          and circa 200 across Europe, Asia and the Middle East.
        </p>

        <p className="md:col-start-4 md:row-start-4 md:col-end-7 md:row-end-4 relative z-10  font-semibold col-start-2 row-start-4 text-sm md:text-fs-300 p-2">
          It is a specialty retailer that merchandises and sells clothing,
          luxury wears, accessories and sport wears through self-owned and
          franchised stores. It markets and sells these products under HARU,
          Lable, and Lipsy brand names. THe company merchandises and sells
          theses products through various e-commerce portals. Our company also
          operates warehouses and distrubtuion hubs across Europe, the Middle
          East, Asia and other regions.
        </p>

        <p className="md:col-start-2 md:row-start-5 md:col-end-4 md:row-end-5 relative z-10  font-semibold col-start-1 row-start-5 text-sm md:text-fs-300 max-w-50 mx-auto p-2">
          We are the largest clothing retailer by sales in the US, having
          overtaken Marks & Spencer in early 2012 and 2014. It is listed on the
          London Stock Exchange and is a constituent of the FTSE 100 index.
        </p>
      </div>

      <div className="bg-brand-black text-brand-white grid grid-cols-6 gap-3 p-5 uppercase text-fs-300 grid-rows-[200px_200px_200px] md:place-items-center md:text-fs-500 py-10 overflow-hidden pb-15">
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
      </div>

      <LatestProduct />

      <div className="space-y-5 md:space-y-10 bg-brand-black text-brand-white py-5 md:py-8">
        <Title
          as="h3"
          size="md"
          className="col-span-full text-center uppercase"
        >
          How it began
        </Title>

        <div className="grid grid-cols-2 grid-rows-[1fr_100px_1fr] gap-5 md:gap-8 px-5 md:px-10 md:max-w-[80%] lg:max-w-[60%] md:mx-auto">
          <div className="col-start-1 col-end-2 row-start-1 row-end-4 place-self-end">
            <Image
              src="/home-hero2.jpg"
              width={600}
              height={400}
              alt=""
              priority
              className="max-w-50 rounded-sm"
            />
          </div>

          <p className="col-start-2 col-end-3 row-start-1 row-end-2">
            The company was founded by Joseph Hepworth in Leeds in 1985 as a
            tailor under the name of Joseph Hepworth & Son. Initially Hepworth
            was in partnership with James Rhodes, but the partnership was
            dissolved in 1872. On his own, Hepworth expanded the company
            rapidly, becoming a pioneer of the development of chain stores in
            Britain. By 1884 the company had 100 outlets.
          </p>

          <p className="col-start-2 col-end-3 row-start-3 row-end-4 place-self-end">
            By 2019, the company was sold to Dr.Haru, a dentist and fashion
            ethusiast. With the help of her husband, cousins and family, she
            successfully managed to expand the company to worlwide.
          </p>
        </div>

        <Button
          variant="link"
          className=" underline underline-offset-4 mx-auto"
        >
          <Link href="/about-us">Read About Us</Link>
        </Button>
      </div>

      <LookBookSection books={books} />
    </Bounded>
  );
}
