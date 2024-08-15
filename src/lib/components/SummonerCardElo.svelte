<script lang="ts">
  import { useFetchLeague } from '$lib/api/league';
  import type LeagueEntryDto from '$lib/interfaces/LeagueEntryDto';
  import RegionId from '$lib/interfaces/RegionId';
  import type SummonerDto from '$lib/interfaces/SummonerDto';
  import { Avatar, Card } from 'flowbite-svelte';
  import { onMount } from 'svelte';
  import type { Writable } from 'svelte/store';

  const rankImage =
    'https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-shared-components/global/default/images/';
  const rankImageFormat = '.png';

  export let summoner: SummonerDto;
  export let setLeague: (param: Writable<LeagueEntryDto | null>) => void;

  let league: Writable<LeagueEntryDto | null>;

  onMount(() => {
    const { isLoading, error, data } = useFetchLeague({
      regionId: RegionId.JP1.toLowerCase() as RegionId,
      summonerId: summoner.id
    });

    league = data;
    setLeague(league);
  });
</script>

<Card class="items-center">
  {#if $league}
    <Avatar src={rankImage + $league.tier.toLowerCase() + rankImageFormat} size="lg" border rounded></Avatar>
  {/if}
</Card>
