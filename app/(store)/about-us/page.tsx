import Bounded from '@/components/Bounded';
import Hisotry from '@/components/History';
import Title from '@/components/Title';
import { sanityFetch } from '@/sanity/lib/live';
import { HISTORY_QUERY } from '@/sanity/lib/queries';
import Image from 'next/image';

const AboutUsPage = async () => {
  const { data: history } = await sanityFetch({ query: HISTORY_QUERY });

  return (
    <Bounded>
      <div className="grid grid-cols-6 md:grid-cols-12 leading-[1] gap-1 md:gap-2 add-padding">
        <p className="uppercase place-self-end">We are</p>
        <p className="text-[2.3rem] sm:text-[3.8rem] md:text-[5rem] lg:text-[7rem] col-start-1 row-start-2 col-end-7 md:col-end-11 relative z-20 uppercase">
          One brand
        </p>

        <div className="relative z-10 col-start-4 col-end-7 row-start-2 row-end-5 md:col-start-7 md:col-end-13">
          <Image
            src="/about-hero-1.jpg"
            alt=""
            width={400}
            height={600}
            priority
            className="w-full"
          />
        </div>

        <p className="col-start-1 row-start-5 uppercase text-right">With</p>
        <p className="text-[3rem] md:text-[4rem] lg:text-[6rem] col-start-2 row-start-5 col-span-full md:col-end-8 uppercase">
          Two Ways of shopping
        </p>

        <p className="text-[0.75rem col-start-3 col-end-7 row-start-6 md:col-start-8 md:col-end-13 text-justify">
          Haru&reg; shops around the world are characterized by their strategic
          locations and detailed architechture.Establishments are turned into
          spacious, trend-setting spaces with a carefully conceived image that
          encompasses everything from its window displays to the clothing
          arrangements inside. Haru&reg; selects the very best commercial areas
          in each city and positions itself in the most prominent sections of
          the main shopping areas.
        </p>

        <div className="col-start-1 col-end-5 row-start-7 row-end-10 md:col-end-9 place-self-center">
          <Image
            src="/about-hero-2.jpg"
            alt=""
            width={400}
            height={600}
            priority
            className="w-full"
          />
        </div>

        <div className="col-start-5 col-end-7 row-start-7 row-end-9 md:col-start-9 md:col-end-13">
          <Image
            src="/about-hero-3.jpg"
            alt=""
            width={400}
            height={600}
            priority
            className="w-full"
          />
        </div>

        <p className=" col-start-5 row-start-9 col-end-7 md:col-start-9 md:col-end-13 row-end-10">
          Unique buildings are often chosen, which the Haru&reg; architectural
          studio then refurbishes and adapts to its brand image and philosophy.
        </p>

        <p className="md:col-start-5 md:col-end-9 row-start-10 col-start-2 col-end-5">
          Our audience is characterized by young people who are aware of the
          latest trends and are interested in music, social media and
          technologies. Developoing its products, Haru&reg; strives to build a
          full-range wardrobe for various life occasions catering to the needs
          and way of life of its target audience.
        </p>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-5 bg-brand-black text-brand-white px-3 py-5 md:px-5 md:py-7 add-padding">
        <p className="text-fs-400 md:text-fs-500 lg:text-fs-600 col-start-1 col-end-2 md:col-end-3 uppercase text-center">
          Haru in Numbers
        </p>

        <div className="col-start-2 row-start-2 md:col-start-4 text-fs-200 text-white/50 text-center">
          <p>
            <span className="text-fs-400 md:text-fs-500 lg:text-fs-600 text-white">
              500
            </span>
            +
          </p>
          <p>Stores in United States</p>
        </div>

        <div className="col-start-3 row-start-2 md:col-start-5 text-fs-200 text-white/50 text-center">
          <p>
            <span className="text-fs-400 md:text-fs-500 lg:text-fs-600 text-white">
              200
            </span>
            +
          </p>
          <p>Stores in EU and Asia</p>
        </div>

        <div className="col-start-1 col-end-3 row-start-3 text-fs-200 text-white/50 flex gap-2  md:col-end-4 items-center justify-center">
          <p>
            <span className="text-fs-400 md:text-fs-500 lg:text-fs-600 text-white">
              4200
            </span>
            +
          </p>
          <p>Employees worldwide</p>
        </div>

        <div className="col-start-2 row-start-4 md:col-start-3 text-fs-200 text-white/50 text-center">
          <p>
            <span className="text-fs-400 md:text-fs-500 lg:text-fs-600 text-white">
              158
            </span>
            +
          </p>
          <p>Years of History</p>
        </div>

        <div className="col-start-3 row-start-4 md:col-start-4 text-fs-200 text-white/50 text-center">
          <p>
            <span className="text-fs-400 md:text-fs-500 lg:text-fs-600 text-white">
              300
            </span>
            +
          </p>
          <p>Brands in the catalog</p>
        </div>

        <div className="col-start-1 row-start-5 text-fs-200 text-white/50 gap-2  md:col-end-4 ">
          <p>
            <span className="text-fs-400 md:text-fs-500 lg:text-fs-600 text-white">
              3B
            </span>
            +
          </p>
          <p>Revenue for 2022</p>
        </div>

        <div className="col-start-3 row-start-6 md:col-start-4 text-fs-200 text-white/50 text-center">
          <p>
            <span className="text-fs-400 md:text-fs-500 lg:text-fs-600 text-white">
              129
            </span>
            +
          </p>
          <p>Brands in the catalog</p>
        </div>
      </div>

      <div className="grid grid-cols-6 md:grid-cols-12 md:grid-rows-[300px_auto_auto_auto] grid-rows-[80px_auto_auto_auto] add-padding">
        <p className="text-[5rem] md:text-[18rem] lg:text-[20rem] col-start-1 col-end-3 md:col-end-7 place-self-start text-black/40">
          40
        </p>

        <p className="text-[1.5rem] md:text-[3rem] lg:text-[4rem] row-start-2 col-start-2 uppercase leading-[1] md:col-start-4 lg:col-start-5 lg:col-end-8 col-end-3 md:col-end-7">
          Year jubilee
        </p>

        <p className="col-start-1 col-end-4 text-[0.7rem] md:col-start-2 md:col-end-6 row-start-3">
          This year Haru&reg; turned 40 years old and we celebrated this event
          with a corresponding scale.
        </p>

        <p className="col-start-2 col-end-5 md:col-start-4 md:col-end-8 lg:col-start-5 row-start-4 text-[0.7rem] relative z-20">
          The best events of the company participated in the preparation, many
          famous people were invited. The scale of the event corresponded to the
          scale of the company. And we are sure the company will celebrate many
          more anniversaries in the future.
        </p>

        <div className="col-start-4 col-end-7 row-start-1 md:row-start-1 row-end-6 md:col-start-8 md:col-end-13 relative z-10 md:place-self-end opacity-60">
          <Image
            src="/about-hero-4.jpg"
            alt=""
            width={400}
            height={600}
            priority
            className="w-full"
          />
        </div>
      </div>

      {history && <Hisotry history={history} />}

      <div className="grid gap-2 add-padding text-fs-200 md:grid-cols-3 px-5">
        <Title
          as="h3"
          size="md"
          className="text-center uppercase col-span-full"
        >
          Responsibility
        </Title>

        <p className="uppercase text-center col-span-full">
          Our purposes is to provide our customers with beautifully designed,
          excellent quality products, with these products being well made,
          functional, safe and responsibly sourced in a way which respects the
          environment, people and animals within our supply chain.
        </p>

        <div className="flex flex-col gap-2 md:col-start-2 md:col-end-3">
          <div className="max-md:place-self-center">
            <Image
              src="/about-hero-5.jpg"
              alt=""
              priority
              width={400}
              height={400}
              className=""
            />
          </div>
          <p>
            As an iternational fashion, homeware and beauty business, what we do
            and how we do it has an impact on the people and the world around
            us. Our stakeholder relationshiops are key to our success and inform
            our decision making on Environmental, Social and Goverance(ESG)
            matters, now a widely recongnised term for what we have always
            valued-doing the right thing.
          </p>

          <p>
            Our six main raw materials are cotton, polyester, man-made
            cellulosics(such as viscose), wool, timber and leather. Our aim by
            2025, is to only use responsibly sourced materials from more
            sustainable sources with proven positive environment. A wide range
            of social, ethical and environmental issues can have an impact on
            the HARU&reg; business. Our special report covers the issues most
            important to our business and our stakeholders.
          </p>
        </div>
      </div>
    </Bounded>
  );
};

export default AboutUsPage;
