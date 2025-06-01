<template>
<div class="sidebar">
  <h2>Barra lateral</h2>
  <ul>
    <li><router-link to="/">Inicio</router-link></li>
    <li><router-link to="/contador">Contador</router-link></li>
    <li><router-link to="/lista-de-tareas">Lista de Tareas</router-link></li>
  </ul>
</div>
</template>

<script setup>
import router from '@/router';


</script>

<style>
.sidebar {
  width: 250px;
  padding: 20px;
  background-color: #f8f8f8;
  border-right: 1px solid #eee;
}
</style>
