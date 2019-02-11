import { Subject } from 'rxjs'
import { User } from '@frontend/entities/User'

export const userObservable = new Subject<User>()
userObservable.subscribe(user => {
  console.log('user login')
  console.log(user)
})
