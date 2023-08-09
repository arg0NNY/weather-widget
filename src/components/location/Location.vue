<template>
  <div class="location">
    <div class="location__body">
      <IconGripVertical class="location__grip" />
      <h3 class="location__name">{{ location.name }}, {{ location.country }}</h3>
    </div>
    <div v-if="removable" class="location__action">
      <Action @click="emit('remove')"><IconTrash /></Action>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Location } from '@/api/types'
import Action from '@/components/general/Action.vue'
import { IconTrash, IconGripVertical } from '@tabler/icons-vue'

const props = withDefaults(
  defineProps<{
    location: Location,
    removable?: boolean
  }>(),
  {
    removable: true
  }
)
const emit = defineEmits<{
  remove: []
}>()
</script>
