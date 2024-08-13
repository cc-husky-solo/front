<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
</script>

<Navbar let:hidden let:toggle>
  <NavBrand href="/">
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Husky Project
    </span>
  </NavBrand>
  <NavHamburger on:click={toggle} />
</Navbar>
