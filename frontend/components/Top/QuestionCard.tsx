import * as React from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import styled from 'styled-components'
import { truncate } from '@shared/truncate'
import { toRelative } from '@shared/time'
import { Question } from '@frontend/entities/Question'
import { QUESTION_PATH, getLink } from '@frontend/Routes'

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

export const QuestionCard = withRouter(({ question, history }: Props & RouteComponentProps) => (
  <QuestionContainer
    key={question.id}
    onClick={() => history.push(getLink(QUESTION_PATH, question.id))}
  >
    <QuestionTitle>{question.title}</QuestionTitle>
    <QuestionContent>{truncate(question.content)}</QuestionContent>
    <QuestionContent>{toRelative(question.created_at)}</QuestionContent>
  </QuestionContainer>
))
