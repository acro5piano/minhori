import * as React from 'react'
import { QuestionApi } from '@frontend/services/api'
import { QuestionList } from '@frontend/components/QuestionList'

export class QuestionContainer extends React.Component<{}> {
  state = {
    questions: [],
  }

  async componentDidMount() {
    const questions = await QuestionApi.list()
    this.setState({ questions })
  }

  render() {
    return (
      <React.Fragment>
        <QuestionList questions={this.state.questions} />
      </React.Fragment>
    )
  }
}
