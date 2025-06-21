import { defineStore } from "pinia";

export const useMainStore = defineStore('mainData', () =>{
  const baseUrl = 'http://localhost:3100';

  return { baseUrl }
});
