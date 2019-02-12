import * as React from 'react'

import { Subject, Subscription } from 'rxjs'
import { User } from '@frontend/entities/User'

export const userObservable = new Subject<User>()
userObservable.subscribe(user => {
  console.log('user login')
  console.log(user)
})

export type IUser = User

export interface WithUser {
  user?: User
}

export type IReactComponent<P = any> =
  | React.FunctionComponent<P>
  | React.ComponentClass<P>
  | React.ClassicComponentClass<P>

export function withUser<T extends WithUser>(
  Component: IReactComponent<T>,
): IReactComponent<Omit<T, 'user'>> {
  class WithUser extends React.Component<Omit<T, 'user'>, { user?: IUser }> {
    subscription!: Subscription

    state = {
      user: undefined,
    }

    componentDidMount() {
      this.subscription = userObservable.subscribe(user => this.setState({ user }))
    }

    componentWillUnmount() {
      this.subscription.unsubscribe()
    }

    render() {
      return <Component {...this.props as T} user={this.state.user} />
    }
  }

  return WithUser
}
