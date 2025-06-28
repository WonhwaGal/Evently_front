import { defineStore } from "pinia";
import { ref } from 'vue'
export const useMainStore = defineStore('mainData', () =>{
  const baseUrl = 'http://localhost:3100'
  const hasError = ref(false)

  function setError(value){
    hasError.value = value
  }
  return { baseUrl, hasError, setError }
});
