import { defineStore } from "pinia";
import { ref } from 'vue'

export const useAuthStore = defineStore('authData', () => {
  const authToken = ref('')
  const userName = ref('')
  function setAuthToken(token){
    authToken.value = token
  }

  function setUserName(name){
    userName.value = name;
  }
  return { authToken, userName, setAuthToken, setUserName }
})
