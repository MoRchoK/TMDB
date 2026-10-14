import { Pagination } from '@mui/material'
import { type ChangeEvent, type FC } from 'react'
import type { BasePaginationType } from '@/common/components/basePagination/basePaginationType.ts'


export const BasePagination: FC<BasePaginationType> = ({ totalPages, page, onChange, maxPages, disabled }) => {

  if (totalPages <= 1) return null

  let countPages: number = totalPages
  let siblingCount

  if(maxPages && totalPages >= maxPages){
    countPages =  maxPages
  }

  if ((countPages > 2 && page < 3 )|| (countPages < page + 2)) {
    siblingCount = 0
  } else {
    siblingCount = 1
  }

  const paginationChangeHandler = (_event: ChangeEvent<unknown, Element>, value: number) => {
    if (onChange) {
      onChange(value)
    }
  }

  return (
    <Pagination
      count={countPages}
      sx={{
        '& .MuiPaginationItem-root.Mui-selected': {
          backgroundColor: '#2563eb',
          color: 'white',
        },
        '& .MuiPaginationItem-root.Mui-selected:hover': {
          backgroundColor: '#2563eb',

        },
        '& .MuiPaginationItem-root:hover': {
          borderColor: '#2563eb',
        },
        '& .MuiPaginationItem-ellipsis': {
          pointerEvents: 'none',
        },
      }}

      hidePrevButton
      page={page}
      hideNextButton
      variant="outlined"
      disabled={disabled}
      shape="rounded"
      siblingCount={siblingCount}
      boundaryCount={1}
      onChange={paginationChangeHandler}
    />

  )
}