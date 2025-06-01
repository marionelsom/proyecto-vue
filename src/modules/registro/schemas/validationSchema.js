import * as yup from 'yup';

export const schema = yup.object().shape({
  nombre: yup.string().required('El nombre es obligatorio'),
  email: yup.string().email('Debe ser un correo electrónico válido').required('El correo electrónico es obligatorio'),
});
