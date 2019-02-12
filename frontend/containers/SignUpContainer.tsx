import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import { SignUp } from '@frontend/components/SignUp'
import { signUpWithEmail } from '@frontend/services/firebase'

export class SignUpContainer extends React.Component<RouteComponentProps> {
  onSignUpWithEmail = async (email: string, password: string) => {
    await signUpWithEmail(email, password)
    this.props.history.push('/')
  }

  render() {
    return <SignUp onSignUpWithEmail={this.onSignUpWithEmail} />
  }
}
