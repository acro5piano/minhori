import { Router } from 'express'
import { Question } from '@api/models/Question'
import { authMiddleware } from '@api/middleware/auth'

export const router = Router()

router.get('/', async (_req, res) => {
  const questions = await Question.query().limit(10)
  res.send(questions)
})

router.post('/', authMiddleware, async (req, res) => {
  const question = await Question.query().insert({
    ...req.body,
    user_id: req.params.user.id,
  })
  res.send(question)
})
