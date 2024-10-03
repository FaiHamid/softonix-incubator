<template>
  <el-input
    v-model="query"
    type="text"
    :placeholder="placeholder"
    input-style="rounded-md font-medium border border-gray-medium focus:border-gray-dark text-sm p-2 block w-full"
  />
</template>

<script lang="ts" setup>
defineProps<{
  placeholder?: string
  modelValue?: string
}>()

const query = defineModel<string>()

defineEmits(['update:modelValue'])
</script>
