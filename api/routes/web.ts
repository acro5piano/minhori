import { Router } from 'express'
import { QuestionList } from '@frontend/components/QuestionList'
import { Login } from '@frontend/components/Login'
import { Top } from '@frontend/components/Top'
import { Post } from '@frontend/components/Post'
import { withHelmet } from '@api/ssr'
import { Question } from '@api/models/Question'
import { Controller } from '@shared/typings'
import { getTagsWithCount } from '@api/repository'

export const router = Router()

const TopController: Controller = async (_, res) => {
  const tags = await getTagsWithCount()
  const questions = await Question.query()
  res.send(withHelmet(Top, { questions, tags }))
}

router.get('/', TopController)

router.get('/questions', async (_, res) => {
  const questions = await Question.query().eager('tags')
  res.send(withHelmet(QuestionList, { questions }))
})

router.get('/questions/1', async (_req, res) => {
  const questions = await Question.query().eager('tags')
  res.send(withHelmet(Post, { post: questions[0] }))
})

router.get('/login', (_req, res) => {
  const dummyLogin = (..._args: any) => {}
  res.send(
    withHelmet(Login, {
      onLoginWithEmail: dummyLogin,
      onLoginWithFacebook: dummyLogin,
    }),
  )
})

router.get('/*', TopController)
