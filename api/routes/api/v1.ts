import { Router } from 'express'
import * as admin from 'firebase-admin'

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

router.get('/auth/me', async (req, res) => {
  const { authorization } = req.headers
  if (authorization) {
    const user = await admin.auth().verifyIdToken(authorization)
    console.log(user)
    res.send(user)
  } else {
    res.status(401).send('unauthorized')
  }
})
