import Bounded from '@/components/Bounded';
import Favorites from '@/components/user-account/Favorites';
import Orders from '@/components/user-account/Orders';
import Personal from '@/components/user-account/Personal';
import UserTabs from '@/components/UserTabs';
import { sanityFetch } from '@/sanity/lib/live';
import { USER_QUERY } from '@/sanity/lib/queries';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

const Profile = async () => {
  const { userId } = await auth();

  if (!userId) redirect('/sign-in');

  const params = {
    userId: userId || '',
  };
  const { data: userCredential } = await sanityFetch({
    query: USER_QUERY,
    params,
  });

  const tabs = [
    {
      title: 'Personal Information',
      content: (
        <Personal
          firstname={userCredential?.firstname as string}
          lastname={userCredential?.lastname as string}
          email={userCredential?.email as string}
          phone={userCredential?.phone as string}
          imageURL={userCredential?.mainImage?.asset?.url as string}
          shippingAddress={
            userCredential?.shippingAddress as {
              city?: string;
              country?: string;
              state?: string;
              zip?: string;
              address1?: string;
              address2?: string;
            }
          }
        />
      ),
    },
    {
      title: 'My Orders',
      content: <Orders />,
    },
    {
      title: 'Favorite Products',
      content: <Favorites />,
    },
  ];

  return (
    <Bounded>
      <UserTabs tabs={tabs} />
    </Bounded>
  );
};

export default Profile;
