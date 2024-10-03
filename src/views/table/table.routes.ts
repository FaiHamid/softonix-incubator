import type { RouteRecordRaw } from 'vue-router'
import tableContacts from '@/views/table/tableContacts.vue'

export const tableRoutesNames = {
  table: 'table'
}

export const tableRoutes: RouteRecordRaw[] = [
  {
    path: '/table',
    name: tableRoutesNames.table,
    component: tableContacts
  }
]
