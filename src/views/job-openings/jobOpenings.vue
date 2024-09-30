<template>
  <div class="bg-white h-full p-4 w-[500px]">
    <div class="border border-gray p-2 rounded-lg relative">
      <div class="flex justify-between items-center">
        <div class="flex items-center space-x-3">
          <p class="text-gray">JOB OPENINGS</p>
          <p class="bg-blue-400 rounded-full w-5 h-5 flex items-center justify-center text-white">i</p>
        </div>

        <button class="bg-blue-400 h-8 w-8 rounded-lg flex items-center justify-center">
          <img src="@/assets/img/arrow.svg" alt="">
        </button>
      </div>

      <div class="mt-8 ">
        <p>Departments:</p>
        <el-select
          v-model="selectedDepartments"
          multiple
          collapse-tags
          placeholder="Select"
          style="width: 240px"
          class="mt-2 w-full"
        >
          <el-option
            v-for="item in departments"
            :key="item.value"
            :label="item.name"
            :value="item.value"
          />
        </el-select>
      </div>

      <p
        class="text-gray mt-2 text-[14px] after:block after:h-[1px]
              after:bg-gray-300 after:absolute after:left-0 after:right-0 after:bottom-0"
      >
        Showing of {{ depatmentsWithJobs.openJobs.length }}
      </p>

      <DataTree :data="deparmentsWithJobs" :departments="departments" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IDepartmentWithJobs } from '@/types'
import type { IDepartment } from '@/_homework/departments'
import { depatmentsWithJobs } from '@/_homework/data-preparation'
const jobsStore = useJobsStore()
const { selectedDepartments } = storeToRefs(jobsStore)

const departments = ref<IDepartment[]>(depatmentsWithJobs.getDepartmentsWithJobs())
const deparmentsWithJobs = ref<IDepartmentWithJobs>(depatmentsWithJobs.createdHashedJobs())

</script>
