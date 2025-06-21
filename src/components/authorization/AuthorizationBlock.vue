<script setup>
import {ref, computed } from "vue";

const form = ref(false)
const email = ref(null)
const password = ref('')
const showPassword = ref(false)
const loading = ref(false)

const isRegistering = ref(false)
const title = computed(() => isRegistering.value ? "Register" : "Login")

function togglePassword() {
  showPassword.value = !showPassword.value
}
function onSubmit () {
  if (!form.value) return
  loading.value = true
  //TODO change to real functionality
  setTimeout(() => (loading.value = false), 2000)
}
function required (v) {
  return !!v || 'Field is required'
}
</script>

<template>
  <v-sheet class="bg-deep-purple pa-12" rounded max-width="460">
    <v-card-title class="text-center"> {{ title }}</v-card-title>
    <v-card class="mx-auto px-6 py-8" max-width="344">
      <v-form v-model="form" @submit.prevent="onSubmit">
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
          @click:append-inner="togglePassword"
          :readonly="loading"
          :rules="[required]"
          label="Password"
          placeholder="Enter your password"
          clearable
        ></v-text-field>
        <v-text-field
          v-model="password"
          v-if="isRegistering"
          :type="showPassword ? 'text' : 'password'"
          :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
          @click:append-inner="togglePassword"
          :readonly="loading"
          :rules="[required]"
          label="Password"
          placeholder="Repeat your password"
          clearable
        ></v-text-field>
        <br>

        <v-btn
          :disabled="!form"
          :loading="loading"
          color="success"
          size="large"
          type="submit"
          variant="elevated"
          block
        >
          Sign In
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
