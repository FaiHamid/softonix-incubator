<template>
  <el-table
    :data="contacts"
    style="width: 100%"
    class="p-4"
  >
    <el-table-column prop="name" label="Name">
      <template #default="scope">
        <el-input
          v-if="editMode && scope.$index === currRow"
          ref="inputRef"
          v-model="localContact.name"
          type="text"
          class="no-border block font-medium w-full"
        />
      </template>
    </el-table-column>
    <el-table-column prop="description" label="Description">
      <template #default="scope">
        <el-input
          v-if="editMode && scope.$index === currRow"
          v-model="localContact.description"
          type="text" class="block mt-1 text-gray w-full"
        />
      </template>
    </el-table-column>
    <el-table-column prop="image" label="Image">
      <template #default="scope">
        <img :src="scope.row.image" alt="Image" class="w-[50px] h-50px">
      </template>
    </el-table-column>
    <el-table-column prop="actions" label="Actions">
      <template #default="scope">
        <template v-if="editMode && scope.$index === currRow">
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
            class="text-blue-500 font-medium text-xs cursor-pointer hover:underline pl-3"
            @click.stop="triggerEditMode(scope.row, scope.$index)"
          >Edit </span>

          <span
            class="text-red-500 font-medium text-xs cursor-pointer hover:underline"
            @click.stop="deleteContact(scope.row)"
          >Delete</span>
        </template>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
const contactsStore = useContactsStore()
const { contacts } = storeToRefs(contactsStore)
const { updateContact, deleteContact } = contactsStore

const inputRef = ref<HTMLInputElement>()
const editMode = ref(false)
const currRow = ref<number>(NaN)
const contact = ref<IContact>(contacts.value[0])

const localContact = ref<Omit<IContact, 'id'>>({
  name: '',
  description: '',
  image: ''
})

async function triggerEditMode (currContact: IContact, index: number) {
  currRow.value = index
  editMode.value = true
  contact.value = currContact
  localContact.value = { ...contact.value }
  await nextTick()
  inputRef.value?.focus()
}

function onSave () {
  updateContact({ ...localContact.value, id: contact.value.id })
  editMode.value = false
}

</script>

<style>
.cell {
  padding: 10px;
  display: flex;
  justify-content: center;
  gap: 8px;
}

.el-table__row {
  position: relative;
}

.el-table__row::after {
  position: absolute;
  content: "";
  width: 100%;
  background-color: silver;
  height: 1px;
  left: 0;
  bottom: 0;
}
</style>
