import contactsData from '../../contacts.json'

export const useContactsStore = defineStore('contactsStore', () => {
  const contacts = ref<IContact[]>(contactsData)

  function addContact (contact: IContact) {
    contacts.value.push(contact)
  }

  function updateContact (contact: IContact) {
    const currentIndex = contacts.value.findIndex(c => c.id === contact.id)
    contacts.value[currentIndex] = { ...contact }
  }

  function deleteContact (contact: IContact) {
    const currentIndex = contacts.value.findIndex(c => c.id === contact.id)
    contacts.value.splice(currentIndex, 1)
  }

  return {
    contacts,
    addContact,
    deleteContact,
    updateContact
  }
})
