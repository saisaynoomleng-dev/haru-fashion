import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Personal = ({
  firstname,
  lastname,
  email,
  phone,
  imageURL = 'https://robohash.org/1bc5543eb87769cd1ed54194629909ea?set=set4&bgset=&size=400x400',
  shippingAddress,
}: {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  imageURL: string;
  shippingAddress?: {
    city?: string;
    country?: string;
    state?: string;
    zip?: string;
    address1?: string;
    address2?: string;
  };
}) => {
  const { address1, address2, city, state, country, zip } =
    shippingAddress || {};
  return (
    <div className="flex flex-col gap-3">
      <div className="max-w-[100px]">
        <Image
          src={imageURL}
          alt={`${firstname}'s profile photo`}
          priority
          width={100}
          height={100}
          className="rounded-full"
        />
      </div>

      <div className="flex flex-col gap-2">
        <p className="capitalize">
          <span className="font-semibold">First Name: </span>
          {firstname}
        </p>

        <p className="capitalize">
          <span className="font-semibold">Last Name: </span>
          {lastname}
        </p>

        <p>
          <span className="font-semibold">Email: </span>
          {email}
        </p>

        <p className="capitalize">
          <span className="font-semibold">Phone: </span>
          {phone}
        </p>

        {shippingAddress?.address1 === '' ||
        shippingAddress?.address1 === undefined ? (
          <p className="capitalize">
            <span className="font-semibold">Shipping Address: </span>
          </p>
        ) : (
          <p className="capitalize">
            <span className="font-semibold">Shipping Address: </span>
            {`${address1}, ${address2}, ${city}, ${state}`}
            <span className="inline-block">{`${zip}, ${country}`}</span>
          </p>
        )}
      </div>
      <Link
        href="/account/edit-profile"
        className="bg-blue-500 inline-block self-start mt-5 px-2 text-brand-white font-bold "
      >
        Update Profile
      </Link>
    </div>
  );
};

export default Personal;
