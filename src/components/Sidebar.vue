<template>
<div class="sidebar">
  <h2>Bienvenido</h2>
  <h3>Nombre: {{ registrarStore.nombre }}</h3>
  <h3>Email: {{ registrarStore.email }}</h3>
  <ul>
    <li><router-link to="/">Inicio</router-link></li>
    <li><router-link to="/contador">Contador</router-link></li>
    <li><router-link to="/lista-de-tareas">Lista de Tareas</router-link></li>
    <li><router-link to="/registrar">Registrar</router-link></li>
    <li><router-link to="/calcular">Calcular</router-link></li>
  </ul>
</div>
</template>

<script setup>
import { useRegistrarStore } from '@/modules/registro/stores/registrarStore';

const registrarStore = useRegistrarStore();
</script>

<style>
.sidebar {
  width: 250px;
  padding: 20px;
  background-color: #f8f8f8;
  border-right: 1px solid #eee;
}
</style>
