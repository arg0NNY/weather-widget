<template>
  <Box class="settings">
    <BoxHeader class="settings__header" back @back="page = Pages.Index"><h1>Settings</h1></BoxHeader>
    <Search
      placeholder="Search locations..."
      :options="locationOptions"
      :to-select-option="toSelectOption"
      @select="onSelect"
    />
    <LocationList class="settings__locations" v-model="locations" />
  </Box>
</template>

<script setup lang="ts">
import Box from '@/components/general/Box.vue'
import BoxHeader from '@/components/parts/BoxHeader.vue'
import { page, Pages } from '@/composables/page'
import useSettings from '@/composables/useSettings'
import LocationList from '@/components/location/LocationList.vue'
import Search from '@/components/general/Search.vue'
import { searchLocations } from '@/api/openweather'
import type { Location } from '@/api/types'
import type { SelectOption } from '@/components/general/BaseSelect.vue'

const { locations } = useSettings()

async function locationOptions (query: string) {
  try {
    return await searchLocations(query, 5)
  }
  catch {
    return [] as Location[]
  }
}
function toSelectOption (location: Location): SelectOption {
  return { id: location.name + location.country, name: `${location.name}, ${location.country}` }
}

function onSelect (location: Location) {
  locations.value.unshift(location)
}
</script>
