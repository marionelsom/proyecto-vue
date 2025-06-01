<template>
  <h1>Hola mundo</h1>
<p>{{ contador }}</p>
<button @click="Incrementar">Incrementar</button>
<button @click="Decrementar">Decrementar</button>
</template>

<script setup>
import {ref} from 'vue';
const contador = ref(0);
const Incrementar = () => {
  contador.value++;
};
const Decrementar = () => {
  contador.value--;
};
</script>

<style scoped>
p {
  font-size: 2rem;
  color: #ff0000;
}
button {
  font-size: 1.5rem;
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
button:active {
  background-color: #004085;
}
button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(0,123,255,0.5);
}
button:disabled {
  background-color: #6c757d;
  cursor: not-allowed;
}
button:disabled:hover {
  background-color: #6c757d;
}
button:disabled:active {
  background-color: #6c757d;
}
button:disabled:focus {
  box-shadow: none;
}
</style>
