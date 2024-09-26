<template>
  <select
    id="rolesSelect"
    v-model="currentRole"
    class="rounded-md font-medium border border-gray-medium focus:border-gray-dark text-sm p-2 w-full"
  >
    <option
      v-for="opt in options"
      :key="opt"
      :value="opt"
    >
      {{ opt }}
    </option>
  </select>
</template>

<script lang="ts" setup>
import type { TRoles, TSort } from '@/types'

const currentRole = defineModel<TRoles | TSort>()

defineProps<{
  options: TRoles[] | TSort[]
}>()
</script>
