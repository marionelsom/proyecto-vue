<template>
  <div>
    <h2>Formulario de registro</h2>
    <Form :validation-schema="schema" @submit="OnSubmit">
      <div class="form-group">
        <label for="nombre">Nombre:</label>
        <Field type="text" name="nombre" id="nombre" placeholder="ingrese su nombre" v-model="nombre" />
        <ErrorMessage name="nombre" class="error" />
      </div>
      <div class="form-group">
        <label for="correo">Correo:</label>
        <Field type="email" name="email" id="email" placeholder="ingrese su correo" v-model="correo" />
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

const OnSubmit = () => {
  console.log('Formulario enviado con éxito:');
};
</script>

<style scoped>

.form-group {
  margin-bottom: 10px;;
}
</style>
