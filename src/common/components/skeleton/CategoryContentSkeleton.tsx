import type { FC } from 'react'
import { MovieCardSkeleton } from '@/common/components/skeleton/MovieMainPageSkeleton.tsx'
import Box from '@mui/material/Box'


export const CategoryContentSkeleton: FC = () => {
  return (
    <Box sx={{
      width: `100%`,
    }}>
      {Array(2).fill(null).map(()=> <MovieCardSkeleton countCard={5} />)}
    </Box>)
}