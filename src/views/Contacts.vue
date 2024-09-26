<template>
  <div class="flex items-center gap-4">
    <h3 class="font-medium m-0">Contact list</h3>

    <AppButton @click="createNewContact">
      <template #icon>
        <IconPlus class="w-5 h-5" />
      </template>
      Add Contact
    </AppButton>
  </div>

  <div class="flex space-x-6">
    <SearchInput v-model="filters.query" />
    <div>
      <p>Choose role:</p>
      <AppSelect
        v-model="filters.filterByRole"
        :options="[...roles, 'none']"
        class="w-[200px] h-[35px] p-2"
      />
    </div>

    <div>
      <p>Sorting by:</p>
      <AppSelect
        v-model="filters.sort"
        :options="sortOptions"
        class="w-[200px] h-[35px] p-2"
      />
    </div>
  </div>

  <div class="grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] grid gap-5 my-5">
    <ContactItem
      v-for="contact in getFilteredContacts(contacts)"
      :key="contact.id"
      class="cursor-pointer"
      :contact="contact"
      @click="editContact(contact.id)"
      @delete="deleteContact"
      @save="updateContact"
    />
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useContactsStore, useFiltersStore } from '@/store'

import ContactItem from '@/components/ContactItem.vue'
import AppButton from '@/components/AppButton.vue'
import IconPlus from '@/components/icons/IconPlus.vue'
import SearchInput from '@/components/SearchInput.vue'
import AppSelect from '@/components/AppSelect.vue'
import type { TSort } from '@/types'

const router = useRouter()

const sortOptions: TSort[] = ['asc', 'desc', 'none']

const contactsStore = useContactsStore()
const { roles } = storeToRefs(contactsStore)
const { contacts } = storeToRefs(contactsStore)
const { updateContact, deleteContact } = contactsStore

const filtersStore = useFiltersStore()
const { filters } = storeToRefs(filtersStore)
const { getFilteredContacts } = filtersStore

function createNewContact () {
  router.push({ name: 'upsertContact', params: { contactId: 'new' } })
}

function editContact (contactId: number) {
  router.push({ name: 'upsertContact', params: { contactId } })
}
</script>
