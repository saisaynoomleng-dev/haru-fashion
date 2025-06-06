import Bounded from '@/components/Bounded';
import ContactForm from '@/components/ContactForm';
import Title from '@/components/Title';
import Image from 'next/image';
import React from 'react';

const ContactUsPage = () => {
  return (
    <Bounded className="grid md:grid-cols-2 gap-3 justify-center items-center">
      <div className="flex flex-col add-padding gap-y-5 md:gap-y-8 flex-1">
        <Title as="h1" size="md">
          Contact
        </Title>

        <ContactForm />
      </div>

      <div className="add-padding">
        <Image
          src="/contact.jpg"
          className="flex-1 mx-auto"
          width={400}
          height={600}
          alt=""
        />
      </div>
    </Bounded>
  );
};

export default ContactUsPage;
