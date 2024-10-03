<template>
  <el-table
    :data="contacts"
    style="width: 100%"
    class="p-4"
  >
    <el-table-column prop="name" label="Name">
      <el-input
        v-if="editMode"
        ref="inputRef"
        v-model="localContact.name"
        type="text"
        class="no-border block font-medium w-full"
      />
    </el-table-column>
    <el-table-column prop="description" label="Description">
      <el-input
        v-if="editMode"
        v-model="localContact.description"
        type="text" class="block mt-1 text-gray w-full"
      />
    </el-table-column>
    <el-table-column prop="image" label="Image">
      <template #default="scope">
        <img :src="scope.row.image" alt="Image" class="w-[50px] h-50px">
      </template>
    </el-table-column>
    <el-table-column prop="actions" label="Actions" @click.stop="contact = scope.row">
      <EditMode
        v-model="editMode"
        :contact="contact"
        :localContact="localContact"
        @triggEdit="triggerEditMode"
      />
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
const contactsStore = useContactsStore()
const { contacts } = storeToRefs(contactsStore)

const inputRef = ref<HTMLInputElement>()
const editMode = ref(false)
const contact = ref<IContact>(contacts.value[0])

const localContact = ref<Omit<IContact, 'id'>>({
  name: '',
  description: '',
  image: ''
})

async function triggerEditMode () {
  editMode.value = true
  localContact.value = { ...contact.value }
  await nextTick()
  inputRef.value?.focus()
}

</script>

<style>
.cell {
  padding: 10px;
  display: flex;
  justify-content: center;
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
