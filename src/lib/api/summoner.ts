import { env } from '$env/dynamic/public';
import type RegionId from '$lib/interfaces/RegionId';
import type SummonerDto from '$lib/interfaces/SummonerDto';
import { writable } from 'svelte/store';

export interface FetchSummoner {
  regionId: RegionId;
  puuid: string;
}

const SERVER = env.PUBLIC_SERVER;
const endPoint = 'riot/lol/summoners/';

export const useFetchSummoner = (params: FetchSummoner) => {
  const data = writable<SummonerDto | null>(null);
  const error = writable<unknown | null>(null);
  const isLoading = writable(false);

  const fetchData = async () => {
    isLoading.set(true);
    const completeEndPoint = SERVER + endPoint + params.regionId + '/' + params.puuid;
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
