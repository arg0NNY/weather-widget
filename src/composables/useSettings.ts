import { useLocalStorage } from '@vueuse/core'
import type { Location } from '@/api/types'

export default function useSettings () {
  const locations = useLocalStorage<Location[]>('ww.locations', [
    {
      name: 'Moscow',
      country: 'RU',
      lat: 55.7504461,
      lon: 37.6174943,
      state: 'Moscow'
    }
  ])
  const initialSetupComplete = useLocalStorage<boolean>('ww.initialSetupComplete', false)

  return {
    locations,
    initialSetupComplete
  }
}
