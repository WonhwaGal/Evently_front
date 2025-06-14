<script setup>
import {ref} from 'vue';
import { getCategories} from "@/services/apiService.js";

const categories = ref([]);
const getCategoriesList = async () => {
  try{
    const resp = await getCategories();
    //categories.value = resp.data.map(c => ({ title: c }))
    categories.value = resp.data.map(c => ({ title: c.name }));
    console.debug("Get categories got response:", resp.data);
  }
  catch (error){
    console.error("Get categories caught error:", error);
  }
}
</script>

<template>
  <v-btn @click="getCategoriesList">Get All Categories</v-btn>
  <v-card class="mx-auto">
    <v-list :items="categories"></v-list>
  </v-card>
</template>

<style scoped>

</style>
