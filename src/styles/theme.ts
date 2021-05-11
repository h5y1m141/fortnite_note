import green from '@material-ui/core/colors/green'
import { createMuiTheme } from '@material-ui/core'

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[500],
      contrastText: '#ffffff',
    },
    secondary: {
      main: green[300],
      contrastText: '#ffffff',
    },
  },
  typography: {
    fontSize: 12,
  },
})
