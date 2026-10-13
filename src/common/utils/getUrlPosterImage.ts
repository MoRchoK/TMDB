import type { posterSizes } from '@/common/types'


export const getUrlPoserImage = (url: string, size: posterSizes): string => {

  return `${import.meta.env.VITE_BASE_IMAGEURL}/${size}${url}`

}