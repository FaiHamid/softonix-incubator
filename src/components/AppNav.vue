<template>
  <header class="bg-white w-full py-5 shadow-lg z-10 pl-16">
    <el-tabs
      v-model="activeName"
      type="card"
      class="demo-tabs cursor-pointer"
      @tab-click="handleClick"
    >
      <el-tab-pane label="Cards" name="contacts"/>
      <el-tab-pane label="Table" name="table" />
    </el-tabs>
  </header>
</template>

<script lang="ts" setup>
import type { TabsPaneContext } from 'element-plus'

const activeName = ref('first')
const router = useRouter()
const { $routeNames } = useGlobalProperties()

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
  console.log(tab.paneName === $routeNames.contacts ? $routeNames.contacts : $routeNames.table)
  router.push({ name: tab.paneName === $routeNames.contacts ? $routeNames.contacts : $routeNames.table })
}
</script>

<style>
.el-tabs__item {
  padding: 10px;
  color: #6b778c;
  font-size: 16px;
  font-weight: 600;
}

.el-tabs__nav {
display: flex;
gap: 15px;
}
</style>
