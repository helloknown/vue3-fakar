<template>
  <div class="auto-bg bg-gray-100 min-h-screen f-c-c">
    <div
      class="auto-bg2 max-w-sm rounded-lg shadow-lg bg-white p-6 border border-gray-200 dark:border-gray-700 w-400px <sm:w-350px"
    >
      <div class="text-center">
        <h1 class="text-3xl font-bold">
          <router-link to="/" class="text-blue">Fakar</router-link>
        </h1>
      </div>
      <div class="mt-8">
        <n-form ref="formRef" :model="loginData" :rules="formRules">
          <n-form-item label="账号" path="username">
            <n-input v-model:value="loginData.username" placeholder="请输入邮箱" />
          </n-form-item>
          <n-form-item label="密码" path="password">
            <n-input v-model:value="loginData.password" placeholder="请输入密码" />
          </n-form-item>
          <n-form-item label="验证码" path="captcha" v-if="needCaptcha">
            <n-input v-model:value="loginData.captcha" placeholder="请输入验证码" />
            <n-button type="default" round @click="getCaptcha()" class="ml-4">获取验证码</n-button>
          </n-form-item>
          <div role="none" class="flex-col justify-start gap-4">
            <n-button type="success" round @click="login()" class="text-4">登录</n-button>
          </div>
          <div class="flex justify-between">
            <router-link to="/register" class="flex justify-end mt-2 text-gray">忘记密码?</router-link>
            <router-link to="/register" class="flex justify-end mt-2 text-gray">没有账号?</router-link>
          </div>
        </n-form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FormInst, FormItemRule } from 'naive-ui'
import { useRouter } from 'vue-router'
const router = useRouter()

const needCaptcha = ref(true)
const formRef = ref<FormInst | null>(null)
const loginData = ref({
  username: '',
  password: '',
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
      validator(_rule: FormItemRule, value: string) {
        if (!value) {
          return new Error('请输入密码')
        } else if (value.length < 8) {
          return new Error('密码长度需要大于八位')
        }
        return true
      }
    }
  ],
  captcha: [
    {
      required: true,
      message: '验证码不正确'
    }
  ]
})

const getCaptcha = () => {}

const login = () => {
  formRef.value?.validate((errors) => {
    if (!errors) {
      window.$message?.success('登录成功')
      router.push('/')
    } else {
      window.$message?.error('登录失败')
    }
  })
}
</script>
