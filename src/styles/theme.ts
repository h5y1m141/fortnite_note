import green from '@material-ui/core/colors/green'
import blueGrey from '@material-ui/core/colors/blueGrey'
import { createMuiTheme } from '@material-ui/core'

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[500],
      contrastText: '#ffffff',
    },
    secondary: {
      main: blueGrey[100],
      contrastText: '#222222',
    },
  },
  typography: {
    fontSize: 12,
  },
})
