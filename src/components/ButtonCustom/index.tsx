import React from 'react'
import { Button, ButtonProps } from '@mui/material'

type ButtonCustomProps = {
  children: React.ReactNode
} & ButtonProps

export function ButtonCustom({ children, ...props }: ButtonCustomProps) {
  return (
    <Button
      sx={{ maxWidth: '100px' }}
      variant="contained"
      color="secondary"
      fullWidth
      {...props}
    >
      {children}
    </Button>
  )
}
