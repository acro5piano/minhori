import * as React from 'react'

import { Subject } from 'rxjs'
import { User } from '@frontend/entities/User'

export const userObservable = new Subject<User>()
userObservable.subscribe(user => {
  console.log('user login')
  console.log(user)
})

export type IUser = User

export type IReactComponent<P = any> =
  | React.FunctionComponent<P>
  | React.ComponentClass<P>
  | React.ClassicComponentClass<P>

export function withUser<T extends { user?: IUser }>(
  Component: IReactComponent<T>,
): IReactComponent<Omit<T, 'user'>> {
  class WithUser extends React.Component<Omit<T, 'user'>, { user?: IUser }> {
    state = {
      user: undefined,
    }

    componentDidMount() {
      userObservable.subscribe(user => this.setState({ user }))
    }

    componentWillUnmount() {
      userObservable.unsubscribe()
    }

    render() {
      return <Component {...this.props as T} user={this.state.user} />
    }
  }

  return WithUser
}
