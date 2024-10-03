import { contactsRoutesNames } from '@/views/contacts/contacts.routes'
import { authRoutesNames } from '@/views/auth/auth.routes'
import { tableRoutesNames } from '@/views/table/table.routes'

export const routeNames = {
  rootPage: 'rootPage',
  ...contactsRoutesNames,
  ...authRoutesNames,
  ...tableRoutesNames
}
