import Bounded from '@/components/Bounded';
import Title from '@/components/Title';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { sanityFetch } from '@/sanity/lib/live';
import { MAIN_FAQ_QUERY } from '@/sanity/lib/queries';
import { notFound } from 'next/navigation';

const FAQpage = async () => {
  const { data: faq } = await sanityFetch({ query: MAIN_FAQ_QUERY });

  if (!faq) return notFound();

  return (
    <Bounded className="add-padding">
      <Title as="h1" size="md">
        Frequently asked questions from our customers
      </Title>
      {faq.faqs &&
        faq.faqs.map((faq, i) => (
          <Accordion key={i} type="single" collapsible className="w-full">
            <AccordionItem value={`${i}`}>
              <AccordionTrigger className="data-[state=open]:underline data-[state=open]:font-bold cursor-pointer">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
    </Bounded>
  );
};

export default FAQpage;
