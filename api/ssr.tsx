import * as React from 'react'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import { Helmet } from 'react-helmet'
import { CommonHelmet } from '@frontend/Helmet'
import CssBaseline from '@material-ui/core/CssBaseline'
const assetFiles = require('../build/manifest.json')

const getStatic = (a: any) => /\/static.+\.js$/.test(a)
const assets = Object.values(assetFiles).filter(getStatic)

interface Template {
  title: string
  styles: string
  body: string
  meta: string
}

const template = ({ title, styles, body, meta }: Template) => `
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    ${title}
    ${styles}
    ${meta}
  </head>
  <body style="margin:0">
    <div id="root">${body}</div>
  </body>
  ${assets.map(a => `<script src="${a}"></script>`).join('')}
</html>
`

export function withHelmet<T extends {}>(App: React.ComponentType<T>, props: T) {
  const sheet = new ServerStyleSheet()
  const body = renderToString(
    sheet.collectStyles(
      <>
        <CssBaseline />
        <CommonHelmet />
        <App {...props} />
      </>,
    ),
  )
  const helmet = Helmet.renderStatic()
  const title = helmet.title.toString()
  const meta = helmet.meta.toString()
  const styles = sheet.getStyleTags() + helmet.style.toString()
  return template({ title, styles, body, meta })
}
