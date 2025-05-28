import Bounded from '@/components/Bounded';
import Title from '@/components/Title';
import { MyPortableTextComponent } from '@/sanity/components/MyPortableText';
import { sanityFetch } from '@/sanity/lib/live';
import { RETURN_POLICY_QUERY } from '@/sanity/lib/queries';
import { PortableText } from 'next-sanity';
import { notFound } from 'next/navigation';

const ReturnPolicy = async () => {
  const { data: returnPolicy } = await sanityFetch({
    query: RETURN_POLICY_QUERY,
  });

  if (!returnPolicy) notFound();

  return (
    <Bounded className="add-padding">
      <Title as="h1" size="md">
        {returnPolicy.title}
      </Title>

      {returnPolicy.desc && (
        <div className="prose md:prose-lg lg:prose-xl min-w-full">
          <PortableText
            value={returnPolicy.desc}
            components={MyPortableTextComponent}
          />
        </div>
      )}
    </Bounded>
  );
};

export default ReturnPolicy;
