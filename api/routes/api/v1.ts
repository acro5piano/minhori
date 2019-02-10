import { Router } from 'express'

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
