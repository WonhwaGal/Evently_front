<script setup>
const toCreateCategory = '/admin/categories/create';
const toGetCategories = '/admin/categories/get'
</script>

<template>
  <v-card class="mx-auto">
    <v-list>
      <v-list-item>Admin menu</v-list-item>
      <v-list-group title="Categories">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" title="Categories" />
        </template>
        <v-list-item
          title="Create"
          :to="toCreateCategory"
        />
        <v-list-item
          title="Get All"
          :to="toGetCategories"
        />
      </v-list-group>
      <v-list-group title="Events">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" title="Events"/>
        </template>
      </v-list-group>
      <v-list-group title="Ticket Types">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" title="Ticket Types"/>
        </template>
      </v-list-group>
    </v-list>
  </v-card>
</template>

<style scoped>

</style>
