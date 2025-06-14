<script setup>
import { ref } from 'vue';

const newCategory = ref("")

const addCategory = () =>{
  //go to the backend path with "newCategory"
}

</script>

<template>
  <v-label>methods for categories</v-label>
  <v-text-field v-model="newCategory" label="Enter new category"></v-text-field>
  <v-btn @click="addCategory">Create</v-btn>
</template>

<style scoped>

</style>
