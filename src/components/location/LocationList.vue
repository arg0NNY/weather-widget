<template>
  <Draggable
    class="location-list"
    :component-data="{
      tag: 'div',
      type: 'transition-group',
    }"
    item-key="name"
    v-model="locations"
    handle=".location__grip"
    v-bind="dragOptions"
  >
    <template #item="{ element: location, index }: { element: LocationT, index: number }">
      <Location
        :key="location.name + location.country"
        :location="location"
        :removable="locations.length > 1"
        @remove="remove(index)"
      />
    </template>
  </Draggable>
</template>

<script setup lang="ts">
import type { Location as LocationT } from '@/api/types'
import { computed } from 'vue'
import Draggable from 'vuedraggable'
import Location from '@/components/location/Location.vue'

const props = defineProps<{
  modelValue: LocationT[]
}>()
const emit = defineEmits<{
  'update:modelValue': [LocationT[]]
}>()

const locations = computed({
  get: () => props.modelValue,
  set: value => emit('update:modelValue', value)
})

const dragOptions = computed(() => ({
  animation: 200,
  group: "locations",
  disabled: false,
  ghostClass: "ghost"
}))

function remove (index: number) {
  locations.value.splice(index, 1)
}
</script>
