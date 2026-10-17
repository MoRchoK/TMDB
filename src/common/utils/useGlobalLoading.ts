import { useSelector } from 'react-redux'
import type { RootState } from '@/app/store.ts'
import { movieListApi } from '@/features/movies/api/movieListsApi.ts'


export const excludedEndpoints: string[] = [
  movieListApi.endpoints.getCategoryMovies.name,
  movieListApi.endpoints.getDiscoverMovies.name,
  movieListApi.endpoints.getGenreMovies.name,
  movieListApi.endpoints.getSearchMovies.name,
  movieListApi.endpoints.getDetailsMovies.name,
  movieListApi.endpoints.getCreditsMovie.name,
  movieListApi.endpoints.getSimilarMovies.name,
]

export const useGlobalLoading = () => {
  return useSelector((state: RootState) => {
    const queries = Object.values(state.api.queries ?? {})
    const mutations = Object.values(state.api.mutations ?? {})

    const hasActiveQueries = queries.some(query => {
      if (query?.status !== 'pending') return false   // ✅ явный false
      if (excludedEndpoints.includes(query.endpointName)) {
        const completedQueries = queries.filter(q => q?.status === 'fulfilled')
        console.log(completedQueries)
        return completedQueries.length > 0
      }
      return true                                     // ✅ вот этого не хватало
    })

    const hasActiveMutations = mutations.some(m => m?.status === 'pending')

    return hasActiveQueries || hasActiveMutations
  })
}