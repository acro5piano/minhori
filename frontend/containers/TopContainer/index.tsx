import * as React from 'react'
import styled from 'styled-components'
import { Header } from '@frontend/components/Header'
import { QuestionApi } from '@frontend/services/api'
import { Top } from '@frontend/components/Top'

const Container = styled.div``

export class TopContainer extends React.Component<{}> {
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
        <Container>
          <Header />
          <Top />
        </Container>
      </React.Fragment>
    )
  }
}
