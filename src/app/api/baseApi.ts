import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { handleErrors } from '@/common/utils/handleError.ts'


export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: async (args, api, extraOptions) => {

    const result = await fetchBaseQuery({
      baseUrl: import.meta.env.VITE_BASE_URL,
      prepareHeaders: (headers) => {
        headers.set('Authorization', `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`);
        return headers;
      },
    })(args, api, extraOptions)

    if (result.error ) {
      handleErrors(result.error)
    }
    return result
  },

  endpoints: () => ({}),
})

