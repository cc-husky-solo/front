<script lang="ts">
  import SearchBar from '$lib/components/SearchBar.svelte';
  import SummonerCard from '$lib/components/SummonerCard.svelte';
  import SummonerCardElo from '$lib/components/SummonerCardElo.svelte';
  import type LeagueEntryDto from '$lib/interfaces/LeagueEntryDto.js';
  import type SummonerDto from '$lib/interfaces/SummonerDto.js';
  import { Spinner } from 'flowbite-svelte';
  import { writable, type Writable } from 'svelte/store';

  export let data;

  $: account = data['data'];
  $: summoner = writable<SummonerDto | null>(null);
  $: league = writable<LeagueEntryDto | null>(null);

  const { isLoading, error } = data;

  const setSummoner = (param: Writable<SummonerDto | null>) => {
    summoner = param;
  };

  const setLeague = (param: Writable<LeagueEntryDto | null>) => {
    league = param;
  };
</script>

<div class="flex flex-col items-center gap-5">
  <SearchBar></SearchBar>
  <div class="flex flex-col items-center p-5 gap-5 w-full">
    {#if $isLoading}
      <Spinner color="gray" />
    {:else if $account}
      <SummonerCard account={$account} {setSummoner}></SummonerCard>
      {#if $summoner}
        <SummonerCardElo summoner={$summoner} {setLeague}></SummonerCardElo>
      {/if}
    {/if}
  </div>
</div>
