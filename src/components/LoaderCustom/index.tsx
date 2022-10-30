import { Backdrop, CircularProgress } from '@mui/material'

type LoaderCustomProps = {
  open: boolean
}

export function LoaderCustom({ open }: LoaderCustomProps) {
  return (
    <Backdrop open={open}>
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}
