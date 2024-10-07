class ContactsService {
  // rest/v1/contacts
  getContacts () {
    return useHttp.get<IContact[]>('rest/v1/contacts')
  }

  addContact (contact: Omit<IContact, 'image' | 'id'>) {
    return useHttp.post('rest/v1/contacts', contact)
  }

  updateContact (contact: Omit<IContact, 'image'>) {
    const { id, name, description } = contact
    return useHttp.patch(`rest/v1/contacts?id=eq.${id}`, { name, description })
  }

  deleteContact (contactId: number) {
    return useHttp.delete(`rest/v1/contacts?id=eq.${contactId}`)
  }
}

export const contactsService = new ContactsService()
