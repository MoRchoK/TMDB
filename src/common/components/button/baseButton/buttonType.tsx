
export type ButtonType = {
  title: string,
  accentBtn?: boolean
  type?: 'submit' | 'reset' | 'button'
  redirectPath?: string
  onClick?: () => void
}
