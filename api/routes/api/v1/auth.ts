import { Router } from 'express'
import { authMiddleware } from '@api/middleware/auth'

export const router = Router()

router.get('/me', authMiddleware, async (req, res) => {
  res.send(req.params.user)
})
