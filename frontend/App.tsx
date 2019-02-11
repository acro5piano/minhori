import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from '@frontend/Routes'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { muiTheme } from '@frontend/theme'
import { CommonHelmet } from '@frontend/Helmet'

import '@frontend/services/firebase'
import 'firebase/auth'

export class App extends React.Component<{}> {
  componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
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
