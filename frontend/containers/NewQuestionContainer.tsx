import * as React from 'react'
import { QuestionApi, TagApi } from '@frontend/services/api'
import { NewQuestion } from '@frontend/components/NewQuestion'
import { Question } from '@frontend/entities/Question'
import { Tag } from '@frontend/entities/Tag'
import { CreateQuestionParams } from '@frontend/entities/Question'

interface State {
  questions: Question[]
  tags: Tag[]
}

export class NewQuestionContainer extends React.Component<{}, State> {
  state = {
    questions: [],
    tags: [],
  }

  async componentDidMount() {
    const tags = await TagApi.list()
    this.setState({ tags })
  }

  submit = async (params: CreateQuestionParams) => {
    await QuestionApi.create(params)
  }

  render() {
    const { tags } = this.state

    return <NewQuestion tags={tags} onSubmit={this.submit} />
  }
}
