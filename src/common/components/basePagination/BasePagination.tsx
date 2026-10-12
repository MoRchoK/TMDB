import { Pagination } from '@mui/material'
import { type ChangeEvent, type FC, useState } from 'react'
import type { BasePaginationType } from '@/common/components/basePagination/basePaginationType.ts'


export const BasePagination: FC<BasePaginationType> = ({totalPages, sizePage = 20}) => {

  const [page, setPage] = useState(0)

  const [siblingCount, setSiblingCount] = useState(0)

  const paginationChangeHandler = (_event: ChangeEvent<unknown, Element>, value: number) => {
    if (value > 2 && page < 1 && value < totalPages - 1) {
      setPage(1)
      setSiblingCount(1)
    }
    if ((value <= 2 || value > totalPages - 1) && page > 0) {
      setPage(0)
      setSiblingCount(0)
    }
  }
  if (totalPages<sizePage) return null

  return (
    <Pagination
      count={totalPages}
      sx={{
        '& .MuiPaginationItem-root.Mui-selected': {
          backgroundColor: '#2563eb',
          color: 'white',
        },
        '& .MuiPaginationItem-root:hover': {
          borderColor: '#2563eb',
        },
        '& .MuiPaginationItem-ellipsis': {
          pointerEvents: 'none',
        },
      }}
      hidePrevButton
      defaultPage={1}
      hideNextButton
      variant="outlined"
      shape="rounded"
      siblingCount={siblingCount}
      boundaryCount={1}
      onChange={paginationChangeHandler}
    />

  )
}