import { env } from '$env/dynamic/public';
import type LeagueEntryDto from '$lib/interfaces/LeagueEntryDto';
import type RegionId from '$lib/interfaces/RegionId';
import { writable } from 'svelte/store';

export interface FetchLeague {
  regionId: RegionId;
  summonerId: string;
}

const SERVER = env.PUBLIC_SERVER;
const endPoint = 'riot/lol/league/';

export const useFetchLeague = (params: FetchLeague) => {
  const data = writable<LeagueEntryDto | null>(null);
  const error = writable<unknown | null>(null);
  const isLoading = writable(false);

  const fetchData = async () => {
    isLoading.set(true);
    const completeEndPoint = SERVER + endPoint + params.regionId + '/' + params.summonerId;
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
