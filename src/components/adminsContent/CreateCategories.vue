<script setup>
import { ref } from 'vue';
import { postCategory } from '@/services/apiService'

const newCategory = ref("")

const addCategory = async () =>{
  try{
    // add notifications if empty or when success
    console.debug("Create category trying to create:", newCategory.value);
    const resp = await postCategory(newCategory.value);
    console.debug("Create category got response:", resp.data);
  }
  catch (error){
    if (error.response) {
      console.error('Status:', error.response.status)
      console.error('Response:', error.response.data)
    } else {
      console.error('Network/Client error:', error.message)
    }
    console.error("Create category caught error:", error);
  }
}

</script>

<template>
  <v-label>To add a new category:</v-label>
  <v-text-field v-model="newCategory" label="Enter new category"></v-text-field>
  <v-btn @click="addCategory">Create</v-btn>
</template>

<style scoped>

</style>
