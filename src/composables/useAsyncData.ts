import { computed, onMounted, ref } from 'vue'

export type AsyncDataStatus = 'pending' | 'success' | 'error'

export default function useAsyncData<T> (fn: (...args: any) => Promise<T>) {
  const data = ref<T>()
  const pending = ref(false)
  const error = ref<Error>()
  const status = computed<AsyncDataStatus>(
    () => pending.value ? 'pending'
      : error.value ? 'error' : 'success'
  )

  const execute = async () => {
    if (pending.value === true) return
    pending.value = true
    error.value = undefined
    try {
      data.value = await fn()
    }
    catch (err) {
      if (err instanceof Error) error.value = err
    }
    finally {
      pending.value = false
    }
  }

  onMounted(execute)

  return {
    data,
    pending,
    error,
    status,
    refresh: execute
  }
}
