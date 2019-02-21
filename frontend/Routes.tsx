import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import { QuestionContainer } from '@frontend/containers/QuestionContainer'
import { QuestionListContainer } from '@frontend/containers/QuestionListContainer'
import { NewQuestionContainer } from '@frontend/containers/NewQuestionContainer'
import { TopContainer } from '@frontend/containers/TopContainer'
import { LoginContainer } from '@frontend/containers/LoginContainer'
import { SignUpContainer } from '@frontend/containers/SignUpContainer'

export const TOP_PATH = '/'
export const LOGIN_PATH = '/login'
export const SIGNUP_PATH = '/sign_up'
export const QUESTIONS_PATH = '/questions'
export const QUESTION_PATH = '/questions/:id'
export const NEW_QUESTION_PATH = '/questions/new'

// Get full path to a resource.
//     e.g.) getLink('/users/:id/edit', 1) => /customers/1/visits/new
export const getLink = (pathname: string, ...ids: any[]): string =>
  ids.reduce((cur, id) => cur.replace(/:[a-z|A-Z]+/, id), pathname)

export const Routes = () => (
  <Switch>
    <Route exact path={TOP_PATH} component={TopContainer} />
    <Route exact path={QUESTIONS_PATH} component={QuestionListContainer} />
    <Route exact path={QUESTION_PATH} component={QuestionContainer} />
    <Route exact path={NEW_QUESTION_PATH} component={NewQuestionContainer} />
    <Route exact path={LOGIN_PATH} component={LoginContainer} />
    <Route exact path={SIGNUP_PATH} component={SignUpContainer} />
    <Route component={() => <div>404 not found</div>} />
  </Switch>
)
