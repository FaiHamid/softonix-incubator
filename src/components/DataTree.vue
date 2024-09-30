<template>
  <div class="mt-5">
    <div v-for="department in dep" :key="department.value">
      <button class="flex items-center space-x-2" @click="toggleDepartment(department.value)">
        <img src="@/assets/img/arrow_down.svg" alt="icon" class="w-4 h-4">
        <span>{{ department.name }}</span>
      </button>

      <div v-if="isDepartmentOpen(department.value)" class="ml-6">
        <div v-for="job in data[department.value].slice(0, 5)" :key="job.id" class="flex items-center">
          <span class="bg-green-500 rounded-full w-3 h-3 mr-2" />
          <a :href="job.url" class="text-green-600">{{ job.title }}</a>
        </div>

        <button v-if="data[department.value].length > 5" class="text-green-600">
          See more
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import type { IDepartment } from '@/_homework/departments'
import type { IDepartmentWithJobs } from '@/types'

const props = defineProps<{
  data: IDepartmentWithJobs
  departments: IDepartment[]
}>()

const openDepartments = ref<string[]>([...Object.keys(props.data)])
const jobsStore = useJobsStore()
const { selectedDepartments } = storeToRefs(jobsStore)

const dep = ref<IDepartment[]>([...props.departments].sort((p1, p2) => p1.value.localeCompare(p2.value)))
dep.value.push({ name: 'Other', value: 'other' })

watch(selectedDepartments, (newValue) => {
  if (newValue.length) {
    dep.value = props.departments.filter(department =>
      newValue.includes(department.value)
    )
  } else {
    dep.value = [...props.departments].sort((p1, p2) => p1.value.localeCompare(p2.value))
  }
})

const toggleDepartment = (departmentName: string) => {
  if (openDepartments.value.includes(departmentName)) {
    openDepartments.value = openDepartments.value.filter(name => name !== departmentName)
  } else {
    openDepartments.value.push(departmentName)
  }
}

const isDepartmentOpen = (departmentName: string) => {
  return openDepartments.value.includes(departmentName)
}

</script>
