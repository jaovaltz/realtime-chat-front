import { createTheme } from '@mui/material/styles'
import { ptBR } from '@mui/material/locale'

import 'global/fonts/SoleilFont/font.css'

export const theme = createTheme(
  {
    palette: {
      primary: {
        main: '#131324'
      },
      secondary: {
        main: '#4e0eff'
      },
      text: {
        primary: '#ffffff'
      },
      action: {
        disabled: '#a9a9a9',
        disabledBackground: '#808080'
      }
    },

    typography: {
      fontFamily: 'SoleilRegular, Times New Roman, Times, serif',
      fontSize: 14,
      h1: {
        fontFamily: 'SoleilBold'
      },
      button: {
        textDecoration: 'none',
        textTransform: 'none'
      }
    }
  },
  ptBR
)
