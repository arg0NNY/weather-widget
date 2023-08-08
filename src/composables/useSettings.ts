import { useLocalStorage } from '@vueuse/core'
import type { Location } from '@/api/types'

export default function useSettings () {
  return {
    locations: useLocalStorage<Location[]>('ww.locations', [
      {
        name: 'Moscow',
        country: 'RU',
        lat: 55.7504461,
        lon: 37.6174943,
        state: 'Moscow'
      }
    ])
  }
}
