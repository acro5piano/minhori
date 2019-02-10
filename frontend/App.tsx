import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from '@frontend/Routes'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import theme from '@frontend/theme'
import { CommonHelmet } from '@frontend/Helmet'

const muiTheme = createMuiTheme(theme)

export class App extends React.Component<{}> {
  componentDidMount() {}
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <CommonHelmet />
        <MuiThemeProvider theme={muiTheme}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </MuiThemeProvider>
      </React.Fragment>
    )
  }
}
