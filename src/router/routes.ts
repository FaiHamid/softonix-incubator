import type { RouteRecordRaw } from 'vue-router'

import { contactRouteNames, contactsRoutes } from '@/views/contacts/contacts.routes'
import jobOpenings from '@/views/job-openings/jobOpenings.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: { name: contactRouteNames.contacts }
  },
  {
    path: '/job-openings',
    name: 'jobOpenings',
    component: jobOpenings
  },

  ...contactsRoutes
]
