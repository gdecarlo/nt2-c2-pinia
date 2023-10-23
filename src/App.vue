<script setup>
import AppHeader from './components/AppHeader.vue';
import { useAuthStore } from './stores/authStore';
const authStore = useAuthStore()
const {login} = authStore
const autenticar = ()=>{
  //validamos
  //logueamos
  //llamamos al store
  login(1)
  //ruteamos
}
</script>

<template>
  <AppHeader></AppHeader>
  <button @click="autenticar">Login</button>
</template>

<style scoped></style>
