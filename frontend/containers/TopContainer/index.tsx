import * as React from 'react'
import { QuestionApi } from '@frontend/services/api'
import { Top } from '@frontend/components/Top'

export class TopContainer extends React.Component<{}> {
  state = {
    questions: [],
  }

  async componentDidMount() {
    const questions = await QuestionApi.list()
    this.setState({ questions })
  }

  render() {
    return <Top />
  }
}
