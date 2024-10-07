export const useContactsStore = defineStore('contactsStore', () => {
  const contacts = ref<IContact[]>([])

  const getContacts = () => {
    if (contacts.value.length) return

    return contactsService.getContacts()
      .then(res => {
        contacts.value = res
      })
  }

  function addContact (contact: IContact) {
    contactsService.addContact({ name: contact.name, description: contact.description })
      .then(() => contacts.value.push(contact))
  }

  function updateContact (contact: IContact) {
    contactsService.updateContact(contact)
      .then(() => {
        const currentIndex = contacts.value.findIndex(c => c.id === contact.id)
        contacts.value[currentIndex] = { ...contact }
      })
  }

  function deleteContact (contact: IContact) {
    contactsService.deleteContact(contact.id)
      .then(() => {
        const currentIndex = contacts.value.findIndex(c => c.id === contact.id)
        contacts.value.splice(currentIndex, 1)
      })
  }

  return {
    contacts,
    getContacts,
    addContact,
    deleteContact,
    updateContact
  }
})
