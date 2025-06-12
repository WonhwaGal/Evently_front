<script setup>
import { RouterView} from "vue-router";
import { useRouter } from 'vue-router';

const router = useRouter()

const goToCategories = () => router.push("/admin/categories")
const goToEvents = () => router.push("/admin/events")

</script>

<template>
  <v-card>
    <v-card-title>For admins</v-card-title>
     <v-tabs>
       <v-tab @click="goToCategories">Categories</v-tab>
       <v-tab @click="goToEvents">Events</v-tab>
     </v-tabs>
    <RouterView />
  </v-card>
</template>

<style scoped>

</style>
