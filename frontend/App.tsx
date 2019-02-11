import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from '@frontend/Routes'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { muiTheme } from '@frontend/theme'
import { CommonHelmet } from '@frontend/Helmet'

import '@frontend/services/firebase'

function removeServerJss() {
  const jssStyles = document.getElementById('jss-server-side')
  if (jssStyles && jssStyles.parentNode) {
    jssStyles.parentNode.removeChild(jssStyles)
  }
}

export class App extends React.Component<{}> {
  componentDidMount() {
    removeServerJss()
  }

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
