import * as React from 'react'
import { Helmet } from 'react-helmet'

export const CommonHelmet = () => (
  <Helmet>
    <html lang="ja" />
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"
    />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    <style type="text/css">{`
        body {
          font-family: 'Roboto', 'ヒラギノ角ゴ Pro', 'Hiragino Kaku Gothic Pro', 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif;
          background: #f7f7f7;
          padding-top: 64px !important;
          color: #555;
        }
        body,h1,h2,h3,h4,h5,h6,p,div {
          font-size: 13px;
          font-weight: normal;
        }
        * {
          line-height: 1.67 !important;
          box-sizing: border-box;
          -moz-box-sizing: border-box;
          -webkit-box-sizing: border-box;
          -o-box-sizing: border-box;
          -ms-box-sizing: border-box;
        }
        @font-face {
          font-family: 'Material Icons';
          font-style: normal;
          font-weight: 400;
          src: local('Material Icons'), local('MaterialIcons-Regular');
        }

        a {
          text-decoration: none;
        }

        textarea {
          line-height: 1.6 !important;
          font-size: 16px !important;
        }
    `}</style>
  </Helmet>
)
