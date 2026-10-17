import type { posterSizes } from '@/common/types'
import { getDefaultImage } from '@/common/utils/getDefaultImage.ts'


export const getUrlPoserImage = (url: string | undefined | null, size: posterSizes): string => {
if(!url) return  getDefaultImage({width: 200 , height: 300})
  return `${import.meta.env.VITE_BASE_IMAGEURL}/${size}${url}`

}