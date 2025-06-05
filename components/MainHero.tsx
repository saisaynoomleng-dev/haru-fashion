'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import GSDevTools from 'gsap/GSDevTools';
import Title from './Title';
import Image from 'next/image';
import { useRef } from 'react';
import SplitText from 'gsap/SplitText';
import { LineTextFlowEffect } from './Animation';

gsap.registerPlugin(useGSAP, GSDevTools, SplitText);

const MainHero = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);

  const tl = gsap.timeline({
    defaults: { duration: 1 },
  });

  useGSAP(
    () => {
      tl.fromTo(
        titleRef.current,
        {
          opacity: 0,
          clipPath: 'inset(100% 0% 0% 0%)',
        },
        {
          opacity: 1,
          clipPath: 'inset(0% 0% 0% 0%)',
        },
      ).fromTo(
        imageRef.current,
        {
          opacity: 0,
          yPercent: 30,
        },
        {
          opacity: 1,
          yPercent: 0,
          ease: 'back(1.2)',
        },
        '<',
      );
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      className="grid grid-cols-2 auto-rows-min md:grid-cols-6 gap-5 md:gap-8 add-padding text-brand-white"
    >
      <div
        ref={imageRef}
        className="relative w-full h-full md:col-start-1 md:col-end-7 md:row-start-2 md:row-end-6 col-start-1 col-span-full row-start-3 row-end-6"
      >
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

      <div
        className="text-[5rem] md:text-[13rem] lg:text-[15rem] text-center relative z-10 col-span-full text-brand-black col-start-1 row-start-1"
        ref={titleRef}
      >
        <Title as="h1">
          HARU<sup>&reg;</sup>
        </Title>
      </div>

      <LineTextFlowEffect className="md:col-start-2 md:row-start-2 col-span-full md:row-end-3 font-semibold relative z-10 text-brand-black col-start-1 row-start-2 md:text-brand-white p-2">
        Fashion Store
      </LineTextFlowEffect>

      <LineTextFlowEffect className="md:col-start-3 md:row-start-3 md:col-end-5 md:row-end-3 relative z-10 font-semibold col-start-1 row-start-3 text-sm md:text-fs-300 p-2">
        Haru&reg; is an American multinational clothing, luxury wears & sport
        wears retailer, which has its headquarters in Los Angeles, California.
        It has around 700 stores, of which circa 500 are in the United States,
        and circa 200 across Europe, Asia and the Middle East.
      </LineTextFlowEffect>

      <LineTextFlowEffect className="md:col-start-4 md:row-start-4 md:col-end-7 md:row-end-4 relative z-10  font-semibold col-start-2 row-start-4 text-sm md:text-fs-300 p-2">
        It is a specialty retailer that merchandises and sells clothing, luxury
        wears, accessories and sport wears through self-owned and franchised
        stores. It markets and sells these products under HARU, Lable, and Lipsy
        brand names. THe company merchandises and sells theses products through
        various e-commerce portals. Our company also operates warehouses and
        distrubtuion hubs across Europe, the Middle East, Asia and other
        regions.
      </LineTextFlowEffect>

      <LineTextFlowEffect className="md:col-start-2 md:row-start-5 md:col-end-4 md:row-end-5 relative z-10  font-semibold col-start-1 row-start-5 text-sm md:text-fs-300 max-w-50 mx-auto p-2">
        We are the largest clothing retailer by sales in the US, having
        overtaken Marks & Spencer in early 2012 and 2014. It is listed on the
        London Stock Exchange and is a constituent of the FTSE 100 index.
      </LineTextFlowEffect>
    </div>
  );
};

export default MainHero;
