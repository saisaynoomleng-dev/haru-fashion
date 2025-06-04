import { sanityFetch } from '@/sanity/lib/live';
import { ORDERS_QUERY } from '@/sanity/lib/queries';

export const getAllOrder = async (userId: string) => {
  try {
    const { data: orders } = await sanityFetch({
      query: ORDERS_QUERY,
      params: {
        userId,
      },
    });

    return orders?.bags || [];
  } catch (err: any) {
    console.error(err);
  }
};
