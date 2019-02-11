import { Router } from 'express'
import { authMiddleware } from '@api/middleware/auth'
import { verify } from '@api/services/firebase'
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
  const { uid } = await verify(authorization)
  const user = await User.query().insert({
    name: req.body.name,
    firebase_uid: uid,
  })
  res.send(user)
})

// router.put('/me' bbind
