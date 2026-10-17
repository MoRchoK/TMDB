import type { FC, InputEventHandler } from 'react'
import type { TextFieldProps } from '@mui/material/TextField'
import TextField from '@mui/material/TextField'
import { useAppSelector } from '../../../utils/hooks/useAppSelector.ts'
import { getTheme } from '@/common/theme/theme.ts'
import { selectThemeMode } from '@/app/appReducer.ts'





type BaseInput = TextFieldProps & {
  resetValue?: () => void
}

export const BaseInput: FC<BaseInput> = ({ defaultValue,resetValue, ...props }) => {

  const themeMode = useAppSelector(selectThemeMode)
  const theme = getTheme(themeMode)

  const onInputHandler: InputEventHandler<HTMLDivElement> = (e) => {
    const value = (e.target as HTMLInputElement).value
    if (!resetValue || value.length) return null
    resetValue()
  }



  return (
    <TextField id="outlined-basic" variant="outlined"
               type={'search'}
               onInput={onInputHandler}
               defaultValue={defaultValue}
               sx={{
                 maxWidth: '465px',
                 minWidth: '240px',
                 width: '100%',

                 '& .MuiInputBase-input::placeholder': {
                   color: theme.palette.text.secondary,
                 },
                 '& .MuiInputBase-root': {
                   height: 40,
                   borderRadius: '999px',
                   color: theme.palette.text.primary,
                   border: `1px solid ${theme.palette.secondary.main}`,
                   backgroundColor: theme.palette.background.default,
                 },
                 '& .MuiOutlinedInput-notchedOutline': {
                   border: 'none',
                 },
                 '& .MuiInputBase-root.Mui-focused': {
                   outlineOffset: '2px',
                   outline: '3px solid #2563eb',
                   border: `1px solid ${theme.palette.secondary.main}`,
                 },
               }} placeholder={'Search for a movie'}  {...props} />
  )
}