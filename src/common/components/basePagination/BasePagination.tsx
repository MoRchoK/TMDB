import { Pagination } from '@mui/material'
import { type ChangeEvent, useState } from 'react'

export const BasePagination = () => {

  const [page, setPage] = useState(0)
  const countPage = 1001

  const [siblingCount, setSiblingCount] = useState(0)

  const paginationChangeHandler = (_event:  ChangeEvent<unknown, Element>, value: number)=>{
    if(value>2  && page<1 && value<countPage-1){
      setPage(1)
      setSiblingCount(1)
    }
    if((value<=2 || value>countPage-1) && page>0) {
      setPage(0)
      setSiblingCount(0)
    }
  }

  return (
    <Pagination
      count={countPage}
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