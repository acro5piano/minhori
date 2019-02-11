import { Router } from 'express'
import { router as authRouter } from '@api/routes/api/v1/auth'
import { router as questionRouter } from '@api/routes/api/v1/questions'

export const router = Router()

router.use('/auth', authRouter)
router.use('/questions', questionRouter)
