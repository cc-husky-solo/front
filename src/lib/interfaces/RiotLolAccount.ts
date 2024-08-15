import type Region from './Region';

export default interface RiotLolAccount {
  puuid: string;
  gameName?: string;
  tagLine?: string;
  region?: Region;
  createdAt: Date;
  updatedAt: Date;
}
