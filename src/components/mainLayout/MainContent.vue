<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <v-container class="main-content" fluid>
    <v-row>
      <v-col cols="3" class="menu-view">
        <RouterView name="menu" />
      </v-col>
      <v-col cols="9" class="scrollable-view">
        <RouterView name="content" />
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
  background-color: rgba(244, 206, 22, 0.8);
  height: 100%;
}

.menu-view{
  background-color: rgba(97, 163, 80, 0.8);
  overflow: hidden;
}
</style>
