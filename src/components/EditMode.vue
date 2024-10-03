<template>
  <div class="flex justify-end mt-2 gap-2">
    <template v-if="editMode">
      <span
        class="text-blue-500 font-medium text-xs cursor-pointer hover:underline"
        @click.stop="editMode = false"
      >Cancel</span>

      <span
        class="text-blue-500 font-medium text-xs cursor-pointer hover:underline"
        @click.stop="onSave"
      >Save</span>
    </template>

    <template v-else>
      <span
        class="text-blue-500 font-medium text-xs cursor-pointer hover:underline"
        @click.stop="$emit('triggEdit')"
      >Edit</span>

      <span
        class="text-red-500 font-medium text-xs cursor-pointer hover:underline"
        @click.stop="deleteContact(contact)"
      >Delete</span>
    </template>
  </div>
</template>

<script lang="ts" setup>
const contactsStore = useContactsStore()
const { updateContact, deleteContact } = contactsStore

const editMode = defineModel()
defineEmits(['triggEdit'])

const props = defineProps<{
  contact: IContact
  localContact: Omit<IContact, 'id'>
}>()

function onSave () {
  updateContact({ ...props.localContact, id: props.contact.id })
  editMode.value = false
}
</script>
