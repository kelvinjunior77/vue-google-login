<template>
  <div class="login-container">
    <h1>Login com Google</h1>
    <button @click="login" class="btn-google" :disabled="loading">
      {{ loading ? 'Aguarde...' : 'Entrar com Google' }}
    </button>
  </div>
</template>

<script setup>
import { useAuth } from "../composables/useAuth.js";

const { login, loading } = useAuth();
</script>


<style scoped>
.login-container {
  text-align: center;
  padding: 20px;
}
h1 {
  color: #1f2937;
  margin-bottom: 30px;
}
.btn-google {
  background-color: #4285f4;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  border-radius: 40px;
  cursor: pointer;
  transition: 0.2s;
  font-weight: bold;
}
.btn-google:hover {
  background-color: #3367d6;
  transform: scale(1.02);
}
</style>