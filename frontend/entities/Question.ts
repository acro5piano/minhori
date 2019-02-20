import { Tag } from '@frontend/entities/Tag'

export interface Question {
  id: string
  title: string
  content: string
  tags: Tag[]
}

export type CreateQuestionParams = Omit<Question, 'id'>
