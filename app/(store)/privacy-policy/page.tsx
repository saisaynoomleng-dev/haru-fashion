import Bounded from '@/components/Bounded';
import Title from '@/components/Title';
import { MyPortableTextComponent } from '@/sanity/components/MyPortableText';
import { sanityFetch } from '@/sanity/lib/live';
import { PRIVACY_POLICY_QUERY } from '@/sanity/lib/queries';
import { PortableText } from 'next-sanity';
import { notFound } from 'next/navigation';

const PrivacyPolicy = async () => {
  const { data: policy } = await sanityFetch({ query: PRIVACY_POLICY_QUERY });

  if (!policy) notFound();

  return (
    <Bounded className="add-padding">
      <Title as="h1" size="md">
        {policy.title}
      </Title>

      {policy.desc && (
        <div className="prose md:prose-lg lg:prose-xl min-w-full">
          <PortableText
            value={policy.desc}
            components={MyPortableTextComponent}
          />
        </div>
      )}
    </Bounded>
  );
};

export default PrivacyPolicy;
