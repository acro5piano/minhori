import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from '@frontend/Routes'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import theme from '@frontend/theme'

const muiTheme = createMuiTheme(theme)

export class App extends React.Component<{}> {
  componentDidMount() {}
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={muiTheme}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </MuiThemeProvider>
      </React.Fragment>
    )
  }
}
