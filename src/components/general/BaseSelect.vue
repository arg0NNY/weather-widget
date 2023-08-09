<template>
  <div ref="anchor" class="select-anchor">
    <slot />

    <div v-if="shown && (options?.length || pending)" class="select">
      <Status v-if="pending" type="pending" />
      <button
        v-else
        v-for="(option, i) in options"
        :key="option.id"
        class="select__option"
        @mousedown="emit('select', option, i)"
      >{{ option.name }}</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Status from '@/components/general/Status.vue'

export interface SelectOption {
  id: string | number,
  name: string | number
}

const props = withDefaults(
  defineProps<{
    options: SelectOption[],
    shown?: boolean,
    pending?: boolean
  }>(),
  {
    shown: true,
    pending: false
  }
)
const emit = defineEmits<{
  select: [SelectOption, number]
}>()
</script>
