<template>
  <div class="status" :class="{'status--loading': type === 'pending'}">
    <div class="status__icon">
      <slot name="icon">
        <IconLoader2 v-if="type === 'pending'" />
        <IconAlertCircle v-else-if="type === 'error'" />
      </slot>
    </div>
    <div v-if="message && ($slots.default || type === 'error')" class="status__text">
      <slot>
        Something went wrong. Try again later.
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconLoader2, IconAlertCircle } from '@tabler/icons-vue'

export type StatusType = 'pending' | 'error'

const props = withDefaults(
  defineProps<{
    type?: StatusType,
    message?: boolean
  }>(),
  {
    message: true
  }
)
</script>
