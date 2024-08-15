import { env } from '$env/dynamic/public';
import type RiotLolAccount from '$lib/interfaces/RiotLolAccount';
import type { Region } from '$lib/interfaces/Types';
import { writable } from 'svelte/store';

export interface FetchAccount {
  region: Region;
  gameName: string;
  tagLine: string;
}

const SERVER = env.PUBLIC_SERVER;
const endPoint = 'riot/lol/accounts/';

export const useFetchAccount = (params: FetchAccount) => {
  const data = writable<RiotLolAccount | null>(null);
  const error = writable<unknown | null>(null);
  const isLoading = writable(false);

  const fetchData = async () => {
    isLoading.set(true);
    const completeEndPoint =
      SERVER + endPoint + params.region + '/' + params.gameName + '/' + params.tagLine;
    try {
      const results = await (await fetch(completeEndPoint)).json();
      data.set(results);
    } catch (err) {
      error.set(err);
    }
    isLoading.set(false);
  };

  fetchData();

  return { isLoading, error, data };
};
