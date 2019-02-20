import { Router } from 'express'
import { getTagsWithCount } from '@api/repository'

export const router = Router()

router.get('/', async (_req, res) => {
  const tags = await getTagsWithCount()
  res.send(tags)
})
