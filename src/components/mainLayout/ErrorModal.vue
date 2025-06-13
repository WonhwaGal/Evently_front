<script setup>
import { ref } from 'vue'

const hasError = ref(false)

</script>

<template>
 <v-dialog v-model="hasError" max-width="500">
   <v-card>
     <v-card-title> Error Title</v-card-title>
     <v-card-text>some error text</v-card-text>
     <v-card-actions>
       <v-spacer />
       <v-btn color="error">Close</v-btn>
     </v-card-actions>
   </v-card>
 </v-dialog>
</template>

<style scoped>

</style>
