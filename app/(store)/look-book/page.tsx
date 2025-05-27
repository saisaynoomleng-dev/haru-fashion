import Bounded from '@/components/Bounded';
import LookbookCard from '@/components/LookbookCard';
import Title from '@/components/Title';
import { sanityFetch } from '@/sanity/lib/live';
import { LOOKBOOKS_QUERY } from '@/sanity/lib/queries';

const LookBookPage = async () => {
  const { data: lookbooks } = await sanityFetch({ query: LOOKBOOKS_QUERY });

  return (
    <Bounded>
      <Title as="h1" size="md" className="text-center">
        LOOKBOOK
      </Title>

      <div className="flex flex-col gap-3 add-padding divide-y decoration-brand-black/40">
        {lookbooks.map((book) => (
          <LookbookCard key={book.slug?.current} {...book} className="pb-3" />
        ))}
      </div>
    </Bounded>
  );
};

export default LookBookPage;
