import { createMuiTheme } from '@material-ui/core/styles'

export const theme = {
  typography: {
    useNextVariants: true,
  },
  palette: {
    type: 'light' as 'light',
    primary: {
      main: '#00a4d3',
      contrastText: '#fff',
    },
    secondary: {
      main: '#74daed',
    },
    url: {
      main: '#eee',
      contrastText: '#fff',
    },
    line: {
      main: '#00b900',
      contrastText: '#fff',
    },
    messenger: {
      main: '#0084ff',
      contrastText: '#fff',
    },
    twitter: {
      main: '#17a0e0',
      contrastText: '#fff',
    },
    danger: {
      main: '#ef7567',
      contrastText: '#fff',
    },
  },
}

export const muiTheme = createMuiTheme(theme)
