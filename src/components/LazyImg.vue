<template>
  <div
    ref="imgWrapper"
    class="flex items-center justify-center w-[240px] h-[240px] my-6 rounded-full shrink-0 overflow-hidden
    border border-gray-medium bg-gray-ultra-light "
    :class="{'animate-pulse': !isVisible }"
  >
    <img
      v-if="isVisible"
      :src="hasError ? '/src/assets/icons/placeholder.svg' : source" alt="person avatar"
      class="object-cover w-full h-full"
      :class="{ 'w-[30px] h-[30px]': hasError }"
    >
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  source: string
}>()

let timeout: ReturnType<typeof setTimeout>
let observer: IntersectionObserver

const isVisible = ref(false)
const imgWrapper = ref<HTMLElement | null>(null)
const hasError = ref(false)

const checkImage = () => {
  const img = new Image()
  img.src = props.source

  img.onload = () => {
    hasError.value = false
  }

  img.onerror = () => {
    hasError.value = true
  }
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          timeout = setTimeout(() => {
            checkImage()
            isVisible.value = true
          }, 4000)
          observer.disconnect()
        }
      })
    },
    { rootMargin: '300px' }
  )

  if (imgWrapper.value) {
    observer.observe(imgWrapper.value)
  }
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
  clearTimeout(timeout)
})
</script>
