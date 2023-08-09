<template>
  <BaseSelect
    :options="selectOptions"
    :pending="pending"
    :shown="!!query?.length && !!focused"
    @select="onSelect"
  >
    <BaseInput ref="input" v-bind="$attrs" :placeholder="placeholder" v-model="query" />
  </BaseSelect>
</template>

<script setup lang="ts" generic="T">
import BaseSelect from '@/components/general/BaseSelect.vue'
import type { SelectOption } from '@/components/general/BaseSelect.vue'
import BaseInput from '@/components/general/BaseInput.vue'
import { computed, ref, watch } from 'vue'
import type { Ref } from 'vue'
import { useFocus, watchDebounced } from '@vueuse/core'

defineOptions({
  inheritAttrs: false
})

const props = withDefaults(
  defineProps<{
    options: (q: string) => Promise<T[]>,
    toSelectOption: (item: T) => SelectOption
    debounce?: number,
    placeholder?: string
  }>(),
  {
    debounce: 300
  }
)
const emit = defineEmits<{
  select: [T]
}>()

const options: Ref<T[]> = ref([])
const pending = ref(false)
const query = ref('')

const selectOptions = computed(() => options.value.map(props.toSelectOption))

const input = ref<HTMLInputElement>()
const { focused } = useFocus(input)

watch(query, () => pending.value = true)
watchDebounced(query, async q => {
  options.value = await props.options(q)
  pending.value = false
}, { debounce: props.debounce })

function onSelect (option: SelectOption, index: number) {
  emit('select', options.value[index])
  query.value = ''
}
</script>

<style scoped lang="scss">

</style>
