<template>
  <WeatherLocation
    v-for="(location, i) in locations as Location[]"
    :key="location.name + location.country"
    :location="location"
  >
    <template v-if="i === 0" #action>
      <Action><IconSettings /></Action>
    </template>
  </WeatherLocation>
</template>

<script setup lang="ts">
import useSettings from '@/composables/useSettings'
import WeatherLocation from '@/components/weather/WeatherLocation.vue'
import type { Location } from '@/api/types'
import Action from '@/components/general/Action.vue'
import { IconSettings } from '@tabler/icons-vue'

const { locations } = useSettings()
</script>

<style scoped lang="scss">

</style>
