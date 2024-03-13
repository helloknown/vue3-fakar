<template>
  <div class="bg-gray-100 min-h-screen f-c-c">
    <div
      class="max-w-sm rounded-lg shadow-lg bg-white p-6 space-y-6 border border-gray-200 dark:border-gray-700 w-400px <sm:w-350px"
    >
      <div class="space-y-2 text-center">
        <h1 class="text-3xl font-bold">
          <router-link to="/" class="text-blue">Fakar</router-link>
        </h1>
        <div class="text-gray">已有账号? 现在<router-link to="/login" class="text-blue">登录</router-link>!</div>
      </div>
      <div class="space-y-4">
        <n-form ref="formRef" :model="loginData" :rules="formRules">
          <n-form-item label="账号" path="username">
            <n-input v-model:value="loginData.username" placeholder="请输入邮箱" />
          </n-form-item>
          <n-form-item label="验证码" path="captcha">
            <n-input v-model:value="loginData.captcha" placeholder="请输入验证码" style="{width: 100px;}" />
            <n-button type="default" round @click="getCaptcha" class="ml-4">获取验证码</n-button>
          </n-form-item>
          <n-form-item label="密码" path="password">
            <n-input v-model:value="loginData.password" placeholder="请输入密码" @input="handlePasswordInput" />
          </n-form-item>
          <n-form-item label="确认密码" path="consifrmPwd" ref="confirmPasswordRef">
            <n-input v-model:value="loginData.consifrmPwd" placeholder="请确认密码" />
          </n-form-item>
          <div class="flex-col justify-start gap-4">
            <n-button type="success" round @click="register" class="text-4">注册</n-button>
          </div>
        </n-form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FormInst, FormItemRule, FormItemInst } from 'naive-ui'
import { useRouter } from 'vue-router'

const router = useRouter()
const formRef = ref<FormInst | null>(null)
const confirmPasswordRef = ref<FormItemInst | null>(null)
const passwordChked = ref(false)
const loginData = ref({
  username: '',
  password: '',
  consifrmPwd: '',
  captcha: ''
})

const formRules = ref({
  username: [
    {
      required: true,
      message: '账号不能为空'
    }
  ],
  password: [
    {
      required: true,
      validator(rule: FormItemRule, value: string) {
        if (!value) {
          passwordChked.value = false
          return new Error('请输入密码')
        } else if (value.length < 8) {
          passwordChked.value = false
          return new Error('密码长度需要大于八位')
        }
        passwordChked.value = true
        return true
      },
      trigger: ['blur', 'password-input']
    }
  ],
  consifrmPwd: [
    {
      required: true,
      message: '请再次输入密码',
      trigger: ['input', 'blur']
    },
    {
      validator: (rule: FormItemRule, value: string): boolean => {
        if (!passwordChked.value || value == '') {
          return true
        }
        return loginData.value.password != '' && value === loginData.value.password
      },
      message: '两次密码输入不一致',
      trigger: ['blur', 'password-input']
    }
  ],
  captcha: [
    {
      required: true,
      message: '请输入密码'
    }
  ]
})

// 密码输入的验证
const handlePasswordInput = () => {
  if (loginData.value.consifrmPwd) {
    confirmPasswordRef.value?.validate({ trigger: 'password-input' })
  }
}

const getCaptcha = () => {}

const register = () => {
  formRef.value?.validate((errors) => {
    if (!errors) {
      window.$message?.success('验证成功')
      router.push('/login')
    } else {
      window.$message?.error('验证失败')
    }
  })
}
</script>
