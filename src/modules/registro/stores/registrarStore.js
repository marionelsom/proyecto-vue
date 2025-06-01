import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useRegistrarStore = defineStore('registrar',
  () => {
    const nombre = ref('');
    const email = ref('');

    const guardarRegistro = (nombreFormulario, emailFormulario) => {
      nombre.value = nombreFormulario;
      email.value = emailFormulario;
      console.log('Registrando usuario:', { nombre: nombre.value, email: email.value });
    };

    return {
      nombre,
      email,
      guardarRegistro
    };
});

