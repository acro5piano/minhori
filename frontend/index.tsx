import * as React from 'react'
import * as ReactDOM from 'react-dom'
import JssProvider from 'react-jss/lib/JssProvider'
import { createGenerateClassName } from '@material-ui/core/styles'

import { App } from './App'

// Create a new class name generator.
const generateClassName = createGenerateClassName()

ReactDOM.hydrate(
  <JssProvider generateClassName={generateClassName}>
    <App />
  </JssProvider>,
  document.getElementById('root'),
)
