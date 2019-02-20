import { Model } from 'objection'
import { ModelBase } from '@api/models/ModelBase'
import { Tag } from '@api/models/Tag'
import { User } from '@api/models/User'

export class Question extends ModelBase {
  title!: string
  content!: string
  tags!: Tag[]
  user!: User

  static tableName = 'questions'

  static get relationMappings() {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/User',
        join: {
          from: 'users.id',
          to: 'questions.user_id',
        },
      },
      tags: {
        relation: Model.ManyToManyRelation,
        modelClass: __dirname + '/Tag',
        join: {
          from: 'questions.id',
          through: {
            from: 'questions_tags.question_id',
            to: 'questions_tags.tag_id',
          },
          to: 'tags.id',
        },
      },
      answers: {
        relation: Model.HasManyRelation,
        modelClass: __dirname + '/Answer',
        join: {
          from: 'questions.id',
          to: 'answers.question_id',
        },
      },
    }
  }
}
