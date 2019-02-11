import { Router } from 'express'
import { Question } from '@api/models/Question'
import { authMiddleware } from '@api/middleware/auth'

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

router.get('/', (_req, res) => {
  res.send(posts)
})

router.post('/', authMiddleware, async (req, res) => {
  const question = await Question.query().insert({
    ...req.body,
    user_id: req.params.user.id,
  })
  res.send(question)
})
