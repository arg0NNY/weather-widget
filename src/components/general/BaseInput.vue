<template>
  <input type="text" class="input" v-model="model">
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  modelValue: string
}>()
const emit = defineEmits<{
  'update:modelValue': [string]
}>()

const model = computed({
  get: () => props.modelValue,
  set: value => emit('update:modelValue', value)
})
</script>
