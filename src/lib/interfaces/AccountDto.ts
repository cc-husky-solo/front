import type { Region } from './Types';

export default interface AccountDto {
  puuid: string;
  gameName?: string;
  tagLine?: string;
  region?: Region;
}
