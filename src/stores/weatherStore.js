import { defineStore } from "pinia";
import { ref } from "vue";

// Define the weather store using Pinia
export const useWeatherStore = defineStore("weather", () => {
  const temperatura = ref(0);
  const setTemperatura = (temp) => {
    temperatura.value = temp;
    console.log("Temperatura actualizada:", temperatura.value);
  }

  return {
    temperatura,
    setTemperatura
  };

});
