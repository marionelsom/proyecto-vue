import axios from 'axios';
const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=13.72&longitude=-89.1093&current=temperature_2m&timezone=auto&forecast_days=1'

export const getTemperatura = async() => {
  const respuesta = await axios.get(API_URL);
  const nuevaTemperatura = respuesta.data.current.temperature_2m; // Obtener la temperatura actual
  console.log('Temperatura obtenida:', nuevaTemperatura);
  // Aquí podrías hacer algo con la temperatura, como guardarla en un store o retornarla
  // Por ejemplo, si estás usando Pinia:
  // const weatherStore = useWeatherStore();
  // weatherStore.setTemperatura(nuevaTemperatura);
  // O simplemente retornarla
  // para que pueda ser utilizada en otro lugar
  return nuevaTemperatura;
};
