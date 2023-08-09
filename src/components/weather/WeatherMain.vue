<template>
  <div class="weather-main">
    <div class="weather-main__icon">
      <WeatherIcon :type="condition.icon" />
    </div>
    <div class="weather-main__content">
      <h2 class="weather-main__temp">{{ Math.round(weather.main.temp) }}<Degree /></h2>
      <div class="weather-main__desc">{{ capitalize(condition.description) }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { OpenWeather } from '@/api/types'
import { computed } from 'vue'
import Degree from '@/components/general/Degree.vue'
import { capitalize } from '@/composables/format'
import WeatherIcon from '@/components/weather/WeatherIcon.vue'

const props = defineProps<{
  weather: OpenWeather
}>()

const condition = computed(() => props.weather.weather[0])
</script>
