<script lang="ts">
  import type AccountDto from "$lib/interfaces/AccountDto";

  export let data: AccountDto;
</script>

<div>{JSON.stringify(data)}</div>
