import type { IContact, IFilters } from '@/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFiltersStore = defineStore('filtersStore', () => {
  const filters = ref<IFilters>({
    query: '',
    sort: 'none',
    filterByRole: 'none'
  })

  function getFilteredContacts (contacts: IContact[]) {
    let modifiedContacts = [...contacts]

    if (filters.value.filterByRole !== 'none') {
      modifiedContacts = modifiedContacts.filter(contact => contact.role === filters.value.filterByRole)
    }

    if (filters.value.query) {
      const oneCaseQuery = filters.value.query.toLowerCase()

      modifiedContacts = modifiedContacts.filter(contact =>
        contact.name.toLowerCase().includes(oneCaseQuery) ||
        contact.description.toLowerCase().includes(oneCaseQuery
        )
      )
    }

    if (filters.value.sort !== 'none') {
      modifiedContacts.sort((contact1, contact2) =>
        contact1.name
          .toLowerCase()
          .localeCompare(contact2.name.toLocaleLowerCase())
      )

      if (filters.value.sort === 'desc') {
        modifiedContacts.reverse()
      }
    }

    return modifiedContacts
  }

  return {
    filters,
    getFilteredContacts
  }
})
