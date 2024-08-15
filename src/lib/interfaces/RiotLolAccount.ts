import type { Region } from './Types';

export default interface RiotLolAccount {
  puuid: string;
  gameName: string | null;
  tagLine: string | null;
  region: Region | null;
  createdAt: Date;
  updatedAt: Date;
}
