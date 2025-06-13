<script setup>
import NavBar from "@/components/mainLayout/NavBar.vue"
import MainContent from "@/components/mainLayout/MainContent.vue"
import ErrorModal from "@/components/mainLayout/ErrorModal.vue";
import Footer from "@/components/mainLayout/Footer.vue"
</script>

<template>
  <v-app id="inspire">
    <NavBar />
    <v-main class="fixed-background">
      <MainContent />
    </v-main>
    <ErrorModal />
    <Footer />
  </v-app>
</template>

<style scoped>
.fixed-background{
  background-image: url('@/assets/background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}
</style>


