export const useJobsStore = defineStore('jobsStore', () => {
  const selectedDepartments = ref<string[]>([])

  return {
    selectedDepartments
  }
})
