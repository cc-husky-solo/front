<script lang="ts">
  import type RiotLolAccount from '$lib/interfaces/RiotLolAccount.js';
  import { onDestroy } from 'svelte';

  export let data;

  let account: RiotLolAccount | null;

  const unsubscribe = data.data.subscribe((value) => {
    account = value;
  });

  onDestroy(unsubscribe);
</script>

<div>{JSON.stringify(account)}</div>
