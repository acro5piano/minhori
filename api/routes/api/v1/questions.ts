import { Router } from 'express'
import { Question } from '@api/models/Question'
import { authMiddleware } from '@api/middleware/auth'

export const router = Router()

router.get('/', async (_req, res) => {
  const questions = await Question.query()
    .eager('tags')
    .orderBy('created_at', 'DESC')
    .limit(10)
  res.send(questions)
})

router.post('/', authMiddleware, async (req, res) => {
  const { tags } = req.body
  if (!tags) {
    res.status(422).send('missing_tags')
    return
  }
  const question = await Question.query().insertGraph({
    ...req.body,
    user_id: req.params.user.id,
    tags: tags.map((tag: any) => ({
      '#dbRef': tag.id,
    })),
  })
  res.send(question)
})
