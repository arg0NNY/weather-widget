<template>
  <Box>
    <BoxHeader>
      <h1>{{ location.name }}, {{ location.country }}</h1>
      <template v-if="$slots.action" #action><slot name="action" /></template>
    </BoxHeader>
    <Weather v-if="weather" :weather="weather" />
    <Status v-else-if="status !== 'success'" :type="status" />
  </Box>
</template>

<script setup lang="ts">
import Box from '@/components/general/Box.vue'
import BoxHeader from '@/components/parts/BoxHeader.vue'
import type { Location } from '@/api/types'
import Status from '@/components/general/Status.vue'
import useAsyncData from '@/composables/useAsyncData'
import { getWeather } from '@/api/openweather'
import Weather from '@/components/weather/Weather.vue'
import { useIntervalFn } from '@vueuse/core'

const props = defineProps<{
  location: Location
}>()

const { data: weather, status, refresh } = useAsyncData(() => getWeather(props.location))
useIntervalFn(refresh, 30000)
</script>

<style scoped lang="scss">

</style>
