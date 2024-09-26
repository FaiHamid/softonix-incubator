<template>
  <input
    v-model.trim="query"
    type="text"
    class="rounded-md font-medium border border-gray-medium focus:border-gray-dark text-sm p-2 block w-[400px] mt-4"
    placeholder="Enter name or description"
  >
</template>

<script lang="ts" setup>
const query = defineModel<string>('query')

</script>
