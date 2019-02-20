import * as React from 'react'
import { QuestionApi, TagApi } from '@frontend/services/api'
import { Top } from '@frontend/components/Top'
import { Question } from '@frontend/entities/Question'
import { Tag } from '@frontend/entities/Tag'
// import { emailLogin } from '@frontend/services/firebase'
// import { facebookLogin } from '@frontend/services/firebase'

interface State {
  questions: Question[]
  tags: Tag[]
}

export class TopContainer extends React.Component<{}, State> {
  state = {
    questions: [],
    tags: [],
  }

  async componentDidMount() {
    const questions = await QuestionApi.list()
    const tags = await TagApi.list()
    this.setState({ questions, tags })

    // facebookLogin()
    // emailLogin('ketsume0211@gmail.com', '123qweasd')
  }

  render() {
    const { questions, tags } = this.state

    return <Top questions={questions} tags={tags} />
  }
}
