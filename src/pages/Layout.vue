<script setup>
import { useTheme } from "vuetify";
import { computed } from "vue"

import NavBar from "@/components/mainLayout/NavBar.vue"
import MainContent from "@/components/mainLayout/MainContent.vue"
import ErrorModal from "@/components/mainLayout/ErrorModal.vue";
import Footer from "@/components/mainLayout/Footer.vue"

import backgroundDark from '@/assets/background_dark.jpg'
import backgroundLight from '@/assets/background_light.jpg'

const theme = useTheme()

const backgroundStyle = computed(() => ({
  backgroundImage: `url(${currentUrl.value})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center'
}))

const currentUrl = computed(() => {
  return theme.global.name.value === "eventlyDark" ? backgroundDark : backgroundLight;
})
</script>

<template>
  <v-app id="inspire">
    <NavBar />
    <v-main :style="backgroundStyle">
      <MainContent />
    </v-main>
    <ErrorModal />
    <Footer />
  </v-app>
</template>

<style scoped>

</style>


