import { Router } from 'express'
import { QuestionList } from '@frontend/components/QuestionList'
import { Top } from '@frontend/components/Top'
import { Post } from '@frontend/components/Post'
import { withHelmet } from '@api/ssr'

export const router = Router()

router.get('/', (_req, res) => {
  res.send(withHelmet(Top, { questions }))
})

const questions = [
  {
    title: 'foo',
    content: 'foofoofoo',
  },
  {
    title: 'bar',
    content: 'barbarbar',
  },
]

router.get('/questions', (_req, res) => {
  res.send(withHelmet(QuestionList, { questions }))
})

router.get('/questions/1', (_req, res) => {
  res.send(withHelmet(Post, { post: questions[0] }))
})
