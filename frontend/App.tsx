import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from '@frontend/Routes'

export class App extends React.Component<{}> {
  componentDidMount() {}
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </React.Fragment>
    )
  }
}
