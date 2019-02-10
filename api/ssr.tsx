import * as React from 'react'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import { Helmet } from 'react-helmet'
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
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    ${title}
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
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
  const body = renderToString(sheet.collectStyles(<App {...props} />))
  const styles = sheet.getStyleTags()
  const helmet = Helmet.renderStatic()
  const title = helmet.title.toString()
  const meta = helmet.meta.toString()
  return template({ title, styles, body, meta })
}
