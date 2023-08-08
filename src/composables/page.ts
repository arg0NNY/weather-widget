import { ref } from 'vue'

export const enum Pages {
  Index,
  Settings
}

export const page = ref<Pages>(Pages.Index)
