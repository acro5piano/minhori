import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import { QuestionContainer } from '@frontend/containers/QuestionContainer'
import { TopContainer } from '@frontend/containers/TopContainer'

export const TOP_PATH = '/'
export const LOGIN_PATH = '/login'
export const QUESTIONS_PATH = '/questions'

// Get full path to a resource.
//     e.g.) getLink('/users/:id/edit', 1) => /customers/1/visits/new
export const getLink = (pathname: string, ...ids: any[]): string =>
  ids.reduce((cur, id) => cur.replace(/:[a-z|A-Z]+/, id), pathname)

export const Routes = () => (
  <Switch>
    <Route exact path={TOP_PATH} component={TopContainer} />
    <Route exact path={QUESTIONS_PATH} component={QuestionContainer} />
    <Route component={() => <div>404 not found</div>} />
  </Switch>
)
