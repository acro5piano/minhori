import * as React from 'react'
import styled from 'styled-components'
import { Question } from '@frontend/entities/Question'
import { truncate } from '@shared/truncate'

const QuestionContainer = styled.div`
  border: solid 1px #eee;
  border-radius: 3px;
  background: #fff;
  padding: 12px;
  margin-top: 12px;
`

const QuestionTitle = styled.div`
  font-size: 14px;
  color: #333;
`

const QuestionContent = styled.div`
  font-size: 12px;
`

interface Props {
  question: Question
}

export const QuestionCard = ({ question }: Props) => (
  <QuestionContainer key={question.id}>
    <QuestionTitle>{question.title}</QuestionTitle>
    <QuestionContent>{truncate(question.content)}</QuestionContent>
    <QuestionContent>{question.created_at}</QuestionContent>
  </QuestionContainer>
)
