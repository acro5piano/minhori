import { Router } from 'express'
import { authMiddleware } from '@api/middleware/auth'
import * as admin from 'firebase-admin'
import { User } from '@api/models/User'

export const router = Router()

router.get('/me', authMiddleware, async (req, res) => {
  res.send(req.params.user)
})

router.post('/register', async (req, res) => {
  const { authorization } = req.headers
  if (!authorization) {
    res.status(401).send('unauthorized')
    return
  }
  const { uid } = await admin.auth().verifyIdToken(authorization)
  const user = await User.query().insert({
    name: req.params.name,
    firebase_uid: uid,
  })
  res.send(user)
})
