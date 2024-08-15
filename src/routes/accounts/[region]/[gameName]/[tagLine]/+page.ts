import { useFetchAccount, type FetchAccount } from '$lib/api/account';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
  return useFetchAccount(fetch, params as FetchAccount);
};
