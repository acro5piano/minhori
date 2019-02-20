import * as React from 'react'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import { Helmet } from 'react-helmet'
import { CommonHelmet } from '@frontend/Helmet'
import CssBaseline from '@material-ui/core/CssBaseline'
import { SheetsRegistry } from 'jss'
import JssProvider from 'react-jss/lib/JssProvider'
import { muiTheme } from '@frontend/theme'
import { MuiThemeProvider, createGenerateClassName } from '@material-ui/core/styles'
import { StaticRouter } from 'react-router-dom'
import { Header } from '@frontend/components/Header'
const assetFiles = require('../build/manifest.json')

const getStatic = (a: any) => /bundle.+\.js$/.test(a)
const assets = Object.values(assetFiles).filter(getStatic)

interface Template {
  title: string
  styles: string
  body: string
  meta: string
  muiCss: string
}

const template = ({ title, styles, body, meta, muiCss }: Template) => `
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    ${title}
    ${styles}
    ${meta}
    <style id="jss-server-side">${muiCss}</style>
  </head>
  <body>
    <div id="root">${body}</div>
  </body>
  ${assets.map(a => `<script src="/build/${a}"></script>`).join('')}
</html>
`

export function withHelmet<T extends {}>(App: React.ComponentType<T>, props: T) {
  const sheetsRegistry = new SheetsRegistry()
  const sheetsManager = new Map()
  const generateClassName = createGenerateClassName()
  const sheet = new ServerStyleSheet()
  const body = renderToString(
    sheet.collectStyles(
      <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
        <MuiThemeProvider theme={muiTheme} sheetsManager={sheetsManager}>
          <>
            <CssBaseline />
            <CommonHelmet />
            <StaticRouter context={{}}>
              <>
                <Header />
                <App {...props} />
              </>
            </StaticRouter>
          </>
        </MuiThemeProvider>
      </JssProvider>,
    ),
  )
  const helmet = Helmet.renderStatic()
  const title = helmet.title.toString()
  const meta = helmet.meta.toString()
  const styles = sheet.getStyleTags() + helmet.style.toString()
  const muiCss = sheetsRegistry.toString()
  return template({ title, styles, body, meta, muiCss })
}
