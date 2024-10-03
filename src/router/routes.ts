import type { RouteRecordRaw } from 'vue-router'

import { routeNames } from './route-names'
import { contactsRoutes } from '@/views/contacts/contacts.routes'
import { authRoutes } from '@/views/auth/auth.routes'
import { tableRoutes } from '@/views/table/table.routes'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  },
  {
    path: '/',
    name: routeNames.rootPage,
    redirect: { name: routeNames.contacts }
  },

  ...contactsRoutes,
  ...tableRoutes,
  ...authRoutes
]
