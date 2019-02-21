import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import { Question } from '@frontend/entities/Question'
import { QuestionApi } from '@frontend/services/api'
import { QuestionDetail } from '@frontend/components/QuestionDetail'

interface State {
  question: Question | null
}

export class QuestionContainer extends React.Component<RouteComponentProps<{ id: string }>, State> {
  state = {
    question: null,
  }

  async componentDidMount() {
    const { id } = this.props.match.params
    const question = await QuestionApi.get(id)
    this.setState({ question })
  }

  render() {
    const { question } = this.state

    return <QuestionDetail question={question} />
  }
}
