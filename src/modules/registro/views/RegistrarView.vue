<template>
  <div>
    <h2>Formulario de registro</h2>
    <Form :validation-schema="schema" @submit="OnSubmit">
      <div class="form-group">
        <label for="nombre">Nombre:</label>
        <Field v-model="nombre" type="text" name="nombre" id="nombre" placeholder="ingrese su nombre" />
        <ErrorMessage name="nombre" class="error" />
      </div>
      <div class="form-group">
        <label for="correo">Correo:</label>
        <Field v-model="email" type="email" name="email" id="email" placeholder="ingrese su correo"  />
        <ErrorMessage name="email" class="error" />
      </div>
      <div class="form-group">
        <button type="submit" >Registrar</button>
      </div>

    </Form>

  </div>
</template>

<script setup>


import {Form, Field, ErrorMessage} from 'vee-validate';
import {schema} from '../schemas/validationSchema';
import {useRegistrarStore} from '../stores/registrarStore';
import {ref} from 'vue';

const registrarStore = useRegistrarStore();

const nombre = ref('');
const email = ref('');

const OnSubmit = () => {
  registrarStore.guardarRegistro(nombre.value, email.value);
  console.log('Formulario enviado con éxito:');
};
</script>

<style scoped>

.form-group {
  margin-bottom: 10px;;
}
</style>
