<template>
  <div class="box__header">
    <div>
      <Action v-if="back" @click="emit('back')"><IconArrowLeft /></Action>
    </div>
    <div>
      <slot />
    </div>
    <div>
      <slot name="action" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Action from '@/components/general/Action.vue'
import { IconArrowLeft } from '@tabler/icons-vue'

const props = withDefaults(
  defineProps<{
    back?: boolean
  }>(),
  {
    back: false
  }
)
const emit = defineEmits<{
  back: []
}>()
</script>

<style scoped lang="scss">

</style>
