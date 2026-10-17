
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { errorToast } from '@/common/utils/errorToast.ts'
import { isErrorWithProperty } from '@/common/utils/isErrorWithProperty.ts'


export const handleErrors = (error: FetchBaseQueryError) => {
  if (error) {
    switch (error.status) {

      case 'FETCH_ERROR':
      case 'PARSING_ERROR':
      case 'CUSTOM_ERROR':
      case 'TIMEOUT_ERROR':
        errorToast(error.error)
        break

      case 400:
      case 403:
          errorToast(JSON.stringify(error.data))
        break

      case 404:
        if (isErrorWithProperty(error.data, 'status_message')) {
          errorToast(error.data.status_message)
        } else {
          errorToast(JSON.stringify(error.data))
        }
        break

      case 401:
        if (isErrorWithProperty(error.data, 'status_message')) {
          errorToast(error.data.status_message)
        } else {
          errorToast(JSON.stringify(error.data))
        }
        break

      default:
        if (error.status >= 500 && error.status < 600) {
          errorToast('Server error occurred. Please try again later.', error)
        } else {
          errorToast('Some error occurred')
        }
    }
  }
}