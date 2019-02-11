import { Router } from 'express'
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

router.get('/questions', (_req, res) => {
  res.send(posts)
})

router.get('/auth/me', authMiddleware, async (req, res) => {
  res.send(req.params.user)
})
