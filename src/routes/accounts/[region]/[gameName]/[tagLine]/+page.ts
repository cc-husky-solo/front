import { useFetchAccount, type FetchAccount } from '$lib/api/account';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  return useFetchAccount(params as FetchAccount);
};
