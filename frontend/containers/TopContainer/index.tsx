import * as React from 'react'
import { QuestionApi } from '@frontend/services/api'
import { Top } from '@frontend/components/Top'
// import { emailLogin } from '@frontend/services/firebase'
// import { facebookLogin } from '@frontend/services/firebase'

export class TopContainer extends React.Component<{}> {
  state = {
    questions: [],
  }

  async componentDidMount() {
    const questions = await QuestionApi.list()
    this.setState({ questions })
    // facebookLogin()
    // emailLogin('ketsume0211@gmail.com', '123qweasd')
  }

  render() {
    return <Top />
  }
}
