<template>
  <div class="weather">
    <WeatherMain :weather="weather" />
    <WeatherSpecList class="weather__spec">
      <WeatherSpec name="Wind" :value="`${weather.wind.speed} m/s`"><IconLocationFilled :style="{ rotate: (360 + weather.wind.deg - 45) % 360 + 'deg' }" /></WeatherSpec>
      <WeatherSpec name="Pressure" :value="`${weather.main.pressure} hPa`"><IconTemperature /></WeatherSpec>
      <WeatherSpec name="Humidity" :value="`${weather.main.humidity}%`"><IconDropletHalf2Filled /></WeatherSpec>
      <WeatherSpec name="Visibility" :value="`${(weather.visibility / 1000).toFixed(1)} km`"><IconRuler2 /></WeatherSpec>
    </WeatherSpecList>
  </div>
</template>

<script setup lang="ts">
import type { OpenWeather } from '@/api/types'
import WeatherMain from '@/components/weather/WeatherMain.vue'
import { IconDropletHalf2Filled, IconLocationFilled, IconTemperature, IconRuler2 } from '@tabler/icons-vue'
import WeatherSpecList from '@/components/weather/WeatherSpecList.vue'
import WeatherSpec from '@/components/weather/WeatherSpec.vue'

const props = defineProps<{
  weather: OpenWeather
}>()
</script>
