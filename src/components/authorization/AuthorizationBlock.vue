<script setup>
import { ref, computed } from "vue"
import { useRouter } from "vue-router";
import { useAuthStore } from "@/services/authenticationStore.js"
import {loginUser, registerUser, getUser } from '@/services/apiService.js'

const authStore = useAuthStore()
const router = useRouter()

const valid = ref(false)
const email = ref(null)
const password = ref('')
const confirmedPassword = ref('')
const userName = ref('')
const userLastname = ref('')
const showPassword = ref(false)
const showConfirmPassword = ref(false)
const loading = ref(false)
const isRegistering = ref(false)
const title = computed(() => isRegistering.value ? "Register" : "Login")
const toDoAction = computed(() => isRegistering.value ? "Create" : "Sign In")
function GoHome(){
  router.push("/home")
}
function togglePassword(value) {
  if(value === 1)
    showPassword.value = !showPassword.value
  else
    showConfirmPassword.value = !showConfirmPassword.value
}
async function onSubmit () {
  if (!valid.value)
    return
  loading.value = true
  let registerResp = null
  let successRegister = false

  try{
    if(isRegistering.value){
      registerResp = await Register()
      successRegister = registerResp.data && registerResp.status === 200
    }
    if(!isRegistering.value || successRegister){
      await Login()
    }
    else{
      console.error("isRegistering ", isRegistering.value)
      console.error("SuccessRegister ", successRegister)
      //show some warning
    }
  }
  catch(ex){
    console.error(ex.message)
  }
  finally{
    isRegistering.value = false
    loading.value = false
    Clear()
  }
}

async function Register(){
  console.debug("registering user ", email.value)
  const request = {
    email: email.value,
    password: password.value,
    firstName: userName.value,
    lastName: userLastname.value
  }
  return await registerUser(request)
}
async function Login(){
  console.debug("logging in user ", email.value)
  const loginRequest = {
    email: email.value,
    password: password.value
  }
  const resp = await loginUser(loginRequest)
  if(resp.data && resp.status === 200) {
    console.debug("login token ", resp.data)
    authStore.setAuthToken(resp.data.accessToken)
    await SetUserName()
    GoHome()
  }
  else{
    console.debug("login user went wrong")
  }
}

async function SetUserName(){
  if(userName.value !== ''){
    authStore.setUserName(userName.value)
    return
  }

  const userResp = await getUser()
  if(userResp.data){
    console.debug("receiving data", userResp)
    authStore.setUserName(userResp.data.firstName)
  }
}
function Clear(){
  email.value = null,
  password.value = '',
  confirmedPassword.value = '',
  userName.value = '',
  userLastname.value = ''
}
function required (v) {
  return !!v || 'Field is required'
}
</script>

<template>
  <v-sheet class="bg-deep-purple pa-12" rounded max-width="460">
    <v-card-title class="text-center"> {{ title }}</v-card-title>
    <v-card class="mx-auto px-6 py-8" max-width="344">
      <v-form v-model="valid" @submit.prevent="onSubmit">
        <v-text-field
          v-model="userName"
          v-if="isRegistering"
          :readonly="loading"
          :rules="[required]"
          label="First Name"
          placeholder="Enter your first name"
          clearable
        ></v-text-field>
        <v-text-field
          v-model="userLastname"
          v-if="isRegistering"
          :readonly="loading"
          :rules="[required]"
          label="Last Name"
          placeholder="Enter your last name"
          clearable
        ></v-text-field>
        <v-text-field
          v-model="email"
          :readonly="loading"
          :rules="[required]"
          class="mb-2"
          label="Email"
          clearable
        ></v-text-field>

        <v-text-field
          v-model="password"
          :type="showPassword ? 'text' : 'password'"
          :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
          @click:append-inner="() => togglePassword(1)"
          :readonly="loading"
          :rules="[required]"
          label="Password"
          placeholder="Enter your password"
          clearable
        ></v-text-field>
        <v-text-field
          v-model="confirmedPassword"
          v-if="isRegistering"
          :type="showConfirmPassword ? 'text' : 'password'"
          :append-inner-icon="showConfirmPassword ? 'mdi-eye-off' : 'mdi-eye'"
          @click:append-inner="() => togglePassword(2)"
          :readonly="loading"
          :rules="[required]"
          label="Repeat password"
          placeholder="Repeat your password"
          clearable
        ></v-text-field>
        <br>

        <v-btn
          :disabled="!valid"
          :loading="loading"
          color="success"
          size="large"
          type="submit"
          variant="elevated"
          block
        >
          {{ toDoAction }}
        </v-btn>
        <br>
        <v-btn
          v-if="!isRegistering"
          @click="isRegistering = true"
          color="success"
          size="large"
          variant="elevated"
          block
        >
          Register
        </v-btn>
        <v-btn
          v-if="isRegistering"
          @click="isRegistering = false"
          color="success"
          size="large"
          variant="elevated"
          block
        >
          Login
        </v-btn>
      </v-form>
    </v-card>
  </v-sheet>
</template>

<style scoped>

</style>
