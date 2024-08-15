<script>
  import SearchBar from '$lib/components/SearchBar.svelte';
</script>

<main>
    <SearchBar></SearchBar>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    height: 100%;
  }

  .search-bar {
    width: 100%;
    padding: 15px;
  }
</style>
