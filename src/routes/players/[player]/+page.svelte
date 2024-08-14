<script lang="ts">
  import type PlayerApi from '$lib/interfaces/PlayerApi';

  export let data: PlayerApi;
</script>

<div>{data.name}</div>
