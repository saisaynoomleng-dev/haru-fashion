import Bounded from '@/components/Bounded';
import Title from '@/components/Title';
import { MyPortableTextComponent } from '@/sanity/components/MyPortableText';
import { sanityFetch } from '@/sanity/lib/live';
import { COOKIE_POLICY_QUERY } from '@/sanity/lib/queries';
import { PortableText } from 'next-sanity';
import { notFound } from 'next/navigation';

const CookiePolicy = async () => {
  const { data: cookie } = await sanityFetch({ query: COOKIE_POLICY_QUERY });

  if (!cookie) notFound();
  return (
    <Bounded className="add-padding">
      <Title as="h1" size="md">
        {cookie.title}
      </Title>

      {cookie.desc && (
        <div className="prose md:prose-lg lg:prose-xl min-w-full">
          <PortableText
            value={cookie.desc}
            components={MyPortableTextComponent}
          />
        </div>
      )}
    </Bounded>
  );
};

export default CookiePolicy;
