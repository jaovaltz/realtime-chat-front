import { CssBaseline, ThemeProvider } from '@mui/material'

import { AppRoutes } from 'routes/appRoutes'
import { theme } from 'global/styles/theme'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
      <CssBaseline />
    </ThemeProvider>
  )
}
