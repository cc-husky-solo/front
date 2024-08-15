<script lang="ts">
  import { goto, pushState } from '$app/navigation';
  import Region from '$lib/interfaces/Region';
  import { Search, Button, Heading } from 'flowbite-svelte';
  import { onMount } from 'svelte';

  let inputValue: string = '';

  const searchAccount = (event: MouseEvent) => {
    const input = inputValue.split('#');
    const gameName = input[0];
    const tagline = input[1];
    const region = Region.ASIA;
    goto('/accounts/' + region.toLowerCase() + '/' + gameName + '/' + tagline);
  };
</script>

<div class="flex flex-col gap-4 w-full max-w-96 p-3">
  <label for="search-input">
    <Heading tag="h3" class="text-center">Search Summoner</Heading>
  </label>
  <Search bind:value={inputValue} id="search-input" placeholder="example: khaski#jp1">
    <Button on:click={searchAccount}>Search</Button>
  </Search>
</div>
