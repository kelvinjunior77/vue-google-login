<template>
  <div class="dashboard">
    <h2>Bem-vindo, {{ user.displayName }}!</h2>
    <img :src="user.photoURL" alt="Foto do perfil" class="avatar" />
    <p><strong>Email:</strong> {{ user.email }}</p>
    <p><strong>UID:</strong> {{ user.uid }}</p>
    <button @click="logout" class="btn-logout">Sair</button>
  </div>
</template>

<script setup>
import { useAuth } from "../composables/useAuth.js";

const { user, logout } = useAuth();

//console.log("Dashboard user:", user.photoURL);

</script>

<style scoped>
.dashboard {
  text-align: center;
  padding: 20px;
}
.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin: 20px 0;
  border: 3px solid #4285f4;
}
.dashboard p {
  background: white;
  padding: 8px 12px;
  border-radius: 16px;
  display: inline-block;
  margin: 8px auto;
}
.btn-logout {
  background-color: #dc2626;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  border-radius: 40px;
  cursor: pointer;
  transition: 0.2s;
  font-weight: bold;
  margin-top: 20px;
}
.btn-logout:hover {
  background-color: #b91c1c;
}
</style>