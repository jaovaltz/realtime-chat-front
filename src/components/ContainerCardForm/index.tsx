import React from 'react'
import { Box, Container, BoxProps } from '@mui/material'

type ContainerCardFormProps = {
  children: React.ReactNode
} & BoxProps

export function ContainerCardForm({
  children,
  ...props
}: ContainerCardFormProps) {
  return (
    <Container maxWidth="sm">
      <Box
        padding={6}
        component="form"
        bgcolor="#00000056"
        alignItems="center"
        border="2px solid black"
        borderRadius={2}
        {...props}
      >
        {children}
      </Box>
    </Container>
  )
}
