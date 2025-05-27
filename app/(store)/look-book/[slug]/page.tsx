import Bounded from '@/components/Bounded';
import Title from '@/components/Title';
import { formatDate } from '@/lib/utils';
import { MyPortableTextComponent } from '@/sanity/components/MyPortableText';
import { urlFor } from '@/sanity/lib/image';
import { sanityFetch } from '@/sanity/lib/live';
import { LOOKBOOK_QUERY } from '@/sanity/lib/queries';
import { PortableText } from 'next-sanity';
import Image from 'next/image';
import Link from 'next/link';

const LookbookDetail = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { data: lookbook } = await sanityFetch({
    query: LOOKBOOK_QUERY,
    params: await params,
  });
  return (
    <Bounded>
      <Link href="/look-book" className="add-padding text-fs-200 mb-5 block">
        &larr; Back to Lookbooks
      </Link>

      <div className="flex flex-col gap-1 text-center">
        <p className="text-fs-200">{lookbook?.category?.name}</p>
        <Title as="h1" size="sm" className="uppercase">
          {lookbook?.title}
        </Title>
        <p className="text-brand-black/50">{lookbook?.subtitle}</p>
        <p className="text-brand-black/50">
          written by{' '}
          <span className="text-brand-black capitalize">
            {lookbook?.author?.name}
          </span>{' '}
          | <span>{formatDate(lookbook?.publishedAt as string)}</span>
        </p>
      </div>

      <div className="add-padding">
        {lookbook?.mainImage?.asset?.url && (
          <Image
            src={urlFor(lookbook.mainImage.asset.url).format('webp').url()}
            alt={lookbook.mainImage.alt as string}
            width={1200}
            height={800}
            priority
            className="mx-auto w-full"
          />
        )}
      </div>

      {lookbook?.desc && (
        <div className="prose md:prose-lg lg:prose-2xl add-padding min-w-full">
          <PortableText
            value={lookbook.desc}
            components={MyPortableTextComponent}
          />
          <div className="grid gap-2 bg-brand-black/10 p-2 md:p-4 lg:p-6">
            <div>
              {lookbook.author?.mainImage?.asset?.url && (
                <Image
                  src={urlFor(lookbook.author.mainImage.asset.url)
                    .width(100)
                    .height(100)
                    .format('webp')
                    .url()}
                  width={100}
                  height={100}
                  alt={lookbook.author.mainImage.alt as string}
                  priority
                  className="rounded-full mx-auto"
                />
              )}
            </div>
            <div className="flex flex-col">
              <p className="font-medium capitalize text-center">
                {lookbook?.author?.name}
              </p>
              <p className="text-fs-200 indent-5">{lookbook?.author?.desc}</p>
            </div>
          </div>
        </div>
      )}
    </Bounded>
  );
};

export default LookbookDetail;
