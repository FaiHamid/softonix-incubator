<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
</script>

<template>
  <AppHeader />
  <div class="max-w-[1440px] mx-auto p-6">
    <RouterView />
  </div>
</template>
