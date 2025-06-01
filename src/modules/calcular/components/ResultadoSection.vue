<template>
  <div class="resultado">
    <p>Resultado: {{ props.resultado }}</p>
  </div>

</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps(
  [
    'resultado',
  ]
);

</script>

<style scoped>
.resultado {
  background-color: aquamarine;
}
</style>
