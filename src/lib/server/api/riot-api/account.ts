import { env } from '$env/dynamic/private';

const protocol = 'https://';
const path = '.api.riotgames.com/riot/account/v1/accounts/';

const RIOT_API_KEY = env.RIOT_API_KEY;

export const fetchAccountByGameNameTagLine = async (
  region: string,
  gameName: string,
  tagLine: string
) => {
  const route = 'by-riot-id/';
  const completePath = protocol + region + path + route + gameName + '/' + tagLine;
  const config: RequestInit = {
    headers: {
      'X-Riot-Token': RIOT_API_KEY
    }
  };
  const response = await (await fetch(completePath, config)).json();
  return response;
};
