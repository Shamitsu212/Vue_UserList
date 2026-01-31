<script setup lang="ts">
import UserMenu from './components/feauters/UserMenu.vue';


</script>

<template>

  <main class="Page">
    <UserMenu />
  </main>

</template>

<style scoped>
.Page{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
}
</style>
