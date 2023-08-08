<template>
  <div class="weather-spec">
    <div class="weather-spec__icon"><slot /></div>
    <div class="weather-spec__info">
      <div class="weather-spec__value">{{ value }}</div>
      <div class="weather-spec__name">{{ name }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string,
  value: string
}>()
</script>
