import type Region from './Region';

export default interface AccountDto {
  puuid: string;
  gameName?: string;
  tagLine?: string;
  region?: Region;
}
