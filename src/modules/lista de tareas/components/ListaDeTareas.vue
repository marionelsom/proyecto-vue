<template>
<div>
  <h2>Lista de tarea</h2>
  <input type="text" v-model="nuevaTarea" @keyup.enter="addTarea" placeholder="Añadir nueva tarea" />
  <ul>
    <li v-for="(tarea, index) in tareas" :key="index">
      {{ tarea }}
      <button @click="borrarTarea(index)">Borrar</button>
    </li>
  </ul>
</div>
</template>

<script setup>
import { ref } from 'vue';
const tareas = ref([]);
const nuevaTarea = ref('');
const addTarea = () => {
  tareas.value.push(nuevaTarea.value);
  nuevaTarea.value = '';
};

const borrarTarea = (index) => {
  tareas.value.splice(index, 1);
};
</script>
<style>

</style>
