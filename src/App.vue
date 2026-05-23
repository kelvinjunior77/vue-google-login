<template>
  <div id="app">
    <Login v-if="!user" />
    <Dashboard v-else />
  </div>
</template>

<script setup>
import { useAuth } from "./composables/useAuth.js";
import Login from "./components/Login.vue";
import Dashboard from "./components/Dashboard.vue";

const { user } = useAuth();
</script>

<style>
* {
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
}
#app {
  max-width: 500px;
  margin: 80px auto;
  padding: 20px;
  background: #f9fafb;
  border-radius: 24px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}
</style>