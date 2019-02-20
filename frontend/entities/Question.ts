import { Tag } from '@frontend/entities/Tag'
import { User } from '@frontend/entities/User'

export interface Question {
  id: string
  title: string
  content: string
  created_at: string
  tags: Tag[]
  user: User
}

export type CreateQuestionParams = Pick<Question, 'title' | 'content' | 'tags'>
