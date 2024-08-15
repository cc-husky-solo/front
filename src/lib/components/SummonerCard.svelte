<script lang="ts">
  import { useFetchSummoner } from '$lib/api/summoner';
  import type AccountDto from '$lib/interfaces/AccountDto';
  import RegionId from '$lib/interfaces/RegionId';
  import type SummonerDto from '$lib/interfaces/SummonerDto';
  import { Card, Avatar } from 'flowbite-svelte';
  import { onMount } from 'svelte';
  import { type Writable } from 'svelte/store';

  const iconUrl = 'https://raw.communitydragon.org/latest/game/assets/ux/summonericons/profileicon';
  const iconFormat = '.png';

  export let account: AccountDto;
  export let setSummoner: (param: Writable<SummonerDto | null>) => void;

  let summoner: Writable<SummonerDto | null>;

  onMount(() => {
    const { isLoading, error, data } = useFetchSummoner({
      regionId: RegionId.JP1.toLowerCase() as RegionId,
      puuid: account.puuid
    });

    summoner = data;
    setSummoner(summoner);
  });
</script>

<Card padding="md">
  <div class="flex flex-col items-center pb-4">
    {#if $summoner}
      <Avatar size="lg" src={iconUrl + $summoner.profileIconId + iconFormat} />
    {/if}
    <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
      {account.gameName + '#' + account.tagLine}
    </h5>
    {#if $summoner}
      <span class="text-sm text-gray-500 dark:text-gray-400">LVL {$summoner.summonerLevel}</span>
    {/if}
  </div>
</Card>
