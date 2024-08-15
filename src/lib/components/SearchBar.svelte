<script lang="ts">
  import { goto } from '$app/navigation';
  import Region from '$lib/interfaces/Region';
  import { Search, Button } from 'flowbite-svelte';
  import { onMount } from 'svelte';

  let inputValue: string = '';

  onMount(() => {});

  const searchAccount = (event: MouseEvent) => {
    const input = inputValue.split('#');
    const gameName = input[0];
    const tagline = input[1];
    const region = Region.ASIA;
    goto('/accounts/' + region.toLowerCase() + '/' + gameName + '/' + tagline);
  };
</script>

<Search bind:value={inputValue}>
  <Button on:click={searchAccount}>Search</Button>
</Search>
