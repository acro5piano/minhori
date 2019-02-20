import { Tag } from '@api/models/Tag'

export const getTagsWithCount = () => {
  return Tag.query().select([
    'tags.*',
    Tag.relatedQuery('questions')
      .count()
      .as('questionCount'),
  ])
}
