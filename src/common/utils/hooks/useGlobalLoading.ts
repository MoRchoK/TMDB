import { useSelector } from 'react-redux'
import type { RootState } from '@/app/store.ts'




export const useGlobalLoading = () => {
  return useSelector((state: RootState) => {
    const queries = Object.values(state.api.queries ?? {})
    const mutations = Object.values(state.api.mutations ?? {})

    const hasActiveQueries = queries.some(query => {
      if (query?.status !== 'pending') return false
      return true
    })

    const hasActiveMutations = mutations.some(m => m?.status === 'pending')

    return hasActiveQueries || hasActiveMutations
  })
}