<template>
  <div class="rounded-lg bg-white shadow relative">
    <div class="p-6 pb-2">
      <div class="flex">
        <div class="flex-grow text-sm truncate">
          <template v-if="editMode">
            <input
              ref="inputRef"
              v-model="localContact.name"
              placeholder="Enter name"
              type="text"
              class="block font-medium w-full"
              :class="{invalid: !validateValues.isNameOk}"
              @input="validateName"
            >
            <p v-if="!validateValues.isNameOk" class="text-[10px] text-red-600 absolute top-9">
              Min 5 chars, 1 uppercase.
            </p>

            <input
              v-model="localContact.description"
              placeholder="Enter description"
              type="text"
              class="block mt-2 text-gray w-full"
              :class="{invalid: !validateValues.isDescriptionOk}"
              @input="validateDescription"
            >
            <p v-if="!validateValues.isDescriptionOk" class="text-[10px] text-red-600 absolute top-[65px]">
              Min 20 chars, 2 words.
            </p>
          </template>

          <template v-else>
            <p class="font-medium">{{ contact.name }}</p>
            <p class="text-gray mt-2 truncate">
              {{ contact.description }}
            </p>
          </template>
        </div>

        <input
          v-if="editMode && isNewContact"
          v-model="localContact.image"
          type="text"
          placeholder="Enter img url"
          class="w-[90px] h-[40px] ml-2 shrink-0 text-[14px]"
        >
        <img
          v-else
          class="w-[40px] h-[40px] object-cover ml-2 rounded-full shrink-0"
          :src="contact.image" alt="contact-logo"
        >
      </div>
      <div class="flex justify-end mt-2 gap-2">
        <template v-if="editMode">
          <span
            class="text-blue-500 font-medium text-xs cursor-pointer hover:underline"
            @click="cancel"
          >Cancel</span>

          <span
            class="text-blue-500 font-medium text-xs cursor-pointer hover:underline"
            :class="{ 'text-warmGray-500 cursor-not-allowed hover:no-underline': allowSave }"
            @click="onSave"
          >Save</span>
        </template>

        <template v-else>
          <span
            class="text-blue-500 font-medium text-xs cursor-pointer hover:underline"
            @click="triggerEditMode"
          >Edit</span>

          <span
            class="text-red-500 font-medium text-xs cursor-pointer hover:underline"
            @click="onDelete"
          >Delete</span>
        </template>
      </div>
    </div>

    <div class="flex text-sm font-medium text-gray-dark border-t border-gray-ultra-light">
      <div class="flex items-center justify-center flex-1 py-4 cursor-pointer hover:text-gray">
        <IconEnvelope />
        <span class="ml-3">Email</span>
      </div>
      <div
        class="flex items-center justify-center flex-1 py-4 border-l
            border-gray-ultra-light cursor-pointer hover:text-gray"
      >
        <IconPhone />
        <span class="ml-3">Call</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick } from 'vue'
import type { IContact } from '@/types'
import IconEnvelope from '@/components/icons/IconEnvelope.vue'
import IconPhone from '@/components/icons/IconPhone.vue'

const props = defineProps<{
  contact: IContact
  isNewContact: boolean
}>()

const emit = defineEmits(['delete', 'save'])

const inputRef = ref<HTMLInputElement>()

const localContact = ref<Omit<IContact, 'id'>>({
  name: '',
  description: '',
  image: ''
})

const editMode = ref(props.isNewContact)
const allowSave = ref(false)
const validateValues = ref({
  isNameOk: true,
  isDescriptionOk: true
})

function cancel () {
  editMode.value = false
  validateValues.value.isNameOk = true
  validateValues.value.isDescriptionOk = true

  if (props.isNewContact) {
    emit('delete')
  }
}

async function triggerEditMode () {
  editMode.value = true
  localContact.value = { ...props.contact }
  await nextTick()
  inputRef.value?.focus()
}

function validateName () {
  validateValues.value.isNameOk = true

  if (localContact.value.name.length < 5 || !/[A-Z]/.test(localContact.value.name)) {
    validateValues.value.isNameOk = false

    allowSave.value = true
  } else {
    allowSave.value = false
  }
}

function validateDescription () {
  validateValues.value.isDescriptionOk = true

  if (localContact.value.description.length < 20 || localContact.value.description.split(' ').length < 2) {
    validateValues.value.isDescriptionOk = false

    allowSave.value = true
  } else {
    allowSave.value = false
  }
}

function onSave () {
  validateName()
  validateDescription()

  if (allowSave.value) {
    return
  }

  emit('save', localContact.value)
  editMode.value = false
}

function onDelete () {
  const confirmed = confirm('Are you sure you want to proceed?')

  if (confirmed) {
    emit('delete')
  }
}
</script>
