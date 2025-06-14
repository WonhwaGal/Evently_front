import { defineStore } from "pinia";

export const useMainStore = defineStore('mainData', {
  state: () => ({
    baseUrl: 'http://localhost:3100',
  })
});
