import type AccountDto from '$lib/interfaces/AccountDto';
import { fetchAccountByGameNameTagLine } from '$lib/server/api/riot-api/account.js';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }): Promise<AccountDto> => {
  const data = await fetchAccountByGameNameTagLine(params.region, params.gameName, params.tagLine);
  return data;
};
