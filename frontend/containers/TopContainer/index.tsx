import * as React from 'react'
import { QuestionApi } from '@frontend/services/api'
import { Top } from '@frontend/components/Top'
import * as firebase from 'firebase/app'

export class TopContainer extends React.Component<{}> {
  state = {
    questions: [],
  }

  async componentDidMount() {
    const questions = await QuestionApi.list()
    this.setState({ questions })

    firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        console.log(user)
        const token = await user.getIdToken()
        console.log(token)
      } else {
        console.log('sign out')
      }
    })

    // firebase.auth().signInWithEmailAndPassword(email, password)

    setTimeout(async () => {
      const user = (await firebase.auth()).currentUser
      console.log(user)
      if (!user) {
        const email = 'ketsume0211+minhori@gmail.com'
        const password = '123qweasd'
        firebase.auth().signInWithEmailAndPassword(email, password)
        // firebase.auth().createUserWithEmailAndPassword(email, password)
      }
    }, 1000)
  }

  render() {
    return <Top />
  }
}
