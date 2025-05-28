import Bounded from '@/components/Bounded';
import Title from '@/components/Title';
import { MyPortableTextComponent } from '@/sanity/components/MyPortableText';
import { sanityFetch } from '@/sanity/lib/live';
import { TERMS_AND_CONDITIONS_QUERY } from '@/sanity/lib/queries';
import { PortableText } from 'next-sanity';
import { notFound } from 'next/navigation';

const TermsAndConditions = async () => {
  const { data: terms } = await sanityFetch({
    query: TERMS_AND_CONDITIONS_QUERY,
  });

  if (!terms) notFound();

  return (
    <Bounded className="add-padding">
      <Title as="h1" size="md">
        {terms.title}
      </Title>

      {terms.desc && (
        <div className="prose md:prose-lg lg:prose-xl min-w-full">
          <PortableText
            value={terms.desc}
            components={MyPortableTextComponent}
          />
        </div>
      )}
    </Bounded>
  );
};

export default TermsAndConditions;
