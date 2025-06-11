<script setup>
import Footer from "@/components/Footer.vue"
</script>

<template>
  <v-container class="main-content" fluid>
    <v-row>
      <v-col cols="3" class="menu">
        content
        <p v-for="n in 5" :key="n">
          Number: {{ n }}
        </p>
      </v-col>
      <v-col cols="9" class="scrollable-view">
        content
        <p v-for="n in 50" :key="n">
          Number: {{ n }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.main-content{
  background-color: #763a40;
  max-width: 950px;
  margin: 0 auto;
  padding: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.scrollable-view{
  background-color: rgba(255, 255, 255, 0.8);
  height: 100%;
}

.menu{
  background-color: rgba(97, 163, 80, 0.8);
  overflow: hidden;
}
</style>
