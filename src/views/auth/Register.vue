<template>
  <div class="max-w-[500px] m-auto">
    <el-card v-loading="loading">
      <template #header>
        <p class="font-semibold text-xl">Sign up</p>
      </template>

      <el-form
        ref="formRef"
        label-position="top"
        :rules="formRules"
        :model="formModel"
        @submit.prevent="submit"
      >
        <el-form-item label="Email" prop="email">
          <el-input v-model="formModel.email" type="email" />
        </el-form-item>

        <el-form-item label="Password" prop="password">
          <el-input v-model="formModel.password" type="password" />
        </el-form-item>

        <el-form-item label="Password Confirmation" prop="password">
          <el-input v-model="formModel.passwordConfirmation" type="password" />
        </el-form-item>

        <el-button native-type="submit" :type="$elComponentType.primary">
          Sign up
        </el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter()
const { $routeNames } = useGlobalProperties()
const { register } = useAuthStore()

const formRef = useElFormRef()

const formModel = useElFormModel({
  email: '',
  password: '',
  passwordConfirmation: ''
})
const loading = ref(false)

const formRules = useElFormRules({
  email: [useRequiredRule(), useEmailRule()],
  password: [useRequiredRule(), useMinLenRule(6)],
  passwordConfirmation: [useRequiredRule(), useMinLenRule(6)]
})

function submit () {
  formRef.value?.validate(isValid => {
    if (isValid && formModel.password === formModel.passwordConfirmation) {
      loading.value = true

      register({ email: formModel.email, password: formModel.password })
        .then(() => router.push({ name: $routeNames.contacts }))
        .finally(() => (loading.value = false))
    }
  })
}
</script>
