<script setup>
import appMainIcon from "@/assets/app-main-icon.png";
import appTitle from "@/assets/app-title.png";

</script>

<template>
  <v-app-bar flat color="blue-grey darken-4" height="120">
    <v-container class="pa-0 fill-height" style="max-width: 900px; margin: 0 auto;">
      <v-row class="fill-height" align="center" justify="space-between">
        <v-col cols="4" class="text-start">
          first column
        </v-col>

        <v-col cols="4" class="d-flex flex-column align-center justify-center">
          <v-img :src="appMainIcon" height="60" width="70" contain />
          <v-img :src="appTitle" height="30" width="120" contain />
        </v-col>

        <v-col cols="4" class="text-end">
          third column
        </v-col>
      </v-row>
      <!--<v-avatar
        class="me-4 "
        color="grey-darken-1"
        size="32"
      ></v-avatar>

      <v-btn
        v-for="link in links"
        :key="link"
        :text="link"
        variant="text"
      ></v-btn>

      <v-spacer></v-spacer>

      <v-responsive max-width="160">
        <v-text-field
          density="compact"
          label="Search"
          rounded="lg"
          variant="solo-filled"
          flat
          hide-details
          single-line
        ></v-text-field>
      </v-responsive>-->
    </v-container>
  </v-app-bar>
</template>

<style scoped>

</style>
