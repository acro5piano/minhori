import { Router } from 'express'
import { QuestionList } from '@frontend/components/QuestionList'
import { Post } from '@frontend/components/Post'
import { withHelmet } from '@api/ssr'

export const router = Router()

const posts = [
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
  res.send(withHelmet(QuestionList, { posts }))
})

router.get('/questions/1', (_req, res) => {
  res.send(withHelmet(Post, { post: posts[0] }))
})
