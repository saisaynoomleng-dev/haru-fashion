import { PortableTextComponents } from 'next-sanity';
import Image from 'next/image';
import { urlFor } from '../lib/image';
import MyCarousel from './MyCarousel';

export const MyPortableTextComponent: PortableTextComponents = {
  types: {
    image: (props) =>
      props.value ? (
        <Image
          src={urlFor(props.value).format('webp').width(600).height(400).url()}
          alt=""
          width={600}
          height={400}
          priority
          className="mx-auto rounded-sm object-cover"
        />
      ) : null,
    carousel: ({ value }) => <MyCarousel images={value.images} />,
  },
};
