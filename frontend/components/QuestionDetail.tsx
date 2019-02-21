import * as React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import { Question } from '@frontend/entities/Question'
import { truncate } from '@shared/truncate'

const Container = styled.div`
  background: orange;
  margin-top: 12px;
`

const Title = styled.div`
  color: #333;
`

interface Props {
  question: Question | null
}

export const QuestionDetail = ({ question }: Props) => (
  <div>
    <Helmet>
      <title>{question ? truncate(question.title) : ''} - みんなのワーキングホリデー</title>
    </Helmet>
    {question ? (
      <Container>
        <Title>{question.title}</Title>
        <Title>{question.content}</Title>
      </Container>
    ) : (
      'loading...'
    )}
  </div>
)
