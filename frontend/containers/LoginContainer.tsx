import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import { Login } from '@frontend/components/Login'
import { loginWithEmail, loginWithFacebook } from '@frontend/services/firebase'

export class LoginContainer extends React.Component<RouteComponentProps> {
  onLoginEmail = async (email: string, password: string) => {
    await loginWithEmail(email, password)
    this.props.history.push('/')
  }

  onLoginFacebook = async () => {
    await loginWithFacebook()
    this.props.history.push('/')
  }

  render() {
    return <Login onLoginWithEmail={this.onLoginEmail} onLoginWithFacebook={this.onLoginFacebook} />
  }
}
