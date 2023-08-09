<template>
  <WeatherLocation
    v-for="(location, i) in locations as Location[]"
    :key="location.name + location.country"
    :location="location"
  >
    <template v-if="i === 0 && initialSetupComplete" #action>
      <Action @click="page = Pages.Settings"><IconSettings /></Action>
    </template>
  </WeatherLocation>
</template>

<script setup lang="ts">
import useSettings from '@/composables/useSettings'
import WeatherLocation from '@/components/weather/WeatherLocation.vue'
import type { Location } from '@/api/types'
import Action from '@/components/general/Action.vue'
import { IconSettings } from '@tabler/icons-vue'
import { page, Pages } from '@/composables/page'
import { onMounted } from 'vue'
import { searchLocationsByCoords } from '@/api/openweather'

const { locations, initialSetupComplete } = useSettings()

/**
 * Initial setup by user's geolocation
 */
onMounted(async () => {
  if (initialSetupComplete.value) return

  try {
    await new Promise<void>(resolve => {
      async function success (position: GeolocationPosition) {
        const location = (await searchLocationsByCoords({ lon: position.coords.longitude, lat: position.coords.latitude }, 1))[0]
        if (location) locations.value = [location]
        resolve()
      }
      const error = () => resolve()

      if ('geolocation' in navigator) navigator.geolocation.getCurrentPosition(success, error)
      else resolve()
    })
  }
  finally {
    initialSetupComplete.value = true
  }
})
</script>

<style scoped lang="scss">

</style>
