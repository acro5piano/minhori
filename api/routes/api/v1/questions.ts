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

router.get('/', (_req, res) => {
  res.send(posts)
})
