import * as React from 'react'
import { QuestionApi, TagApi } from '@frontend/services/api'
import { NewQuestion } from '@frontend/components/NewQuestion'
import { Question } from '@frontend/entities/Question'
import { Tag } from '@frontend/entities/Tag'

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
    const tags = await TagApi.list()
    this.setState({ tags })
  }

  async submit() {
    QuestionApi.create({})
  }

  render() {
    const { tags } = this.state

    return <NewQuestion tags={tags} />
  }
}
