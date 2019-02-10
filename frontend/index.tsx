import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from './App'

const render = (module as any).hot ? ReactDOM.render : ReactDOM.hydrate
render(<App />, document.getElementById('root'))
