import { Model } from 'objection'
import { ModelBase } from '@api/models/ModelBase'

export class Answer extends ModelBase {
  title!: string
  content!: string

  static tableName = 'answers'

  static get relationMappings() {
    return {
      questions: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/Question',
        join: {
          from: 'answers.question_id',
          to: 'questions.id',
        },
      },
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/User',
        join: {
          from: 'answers.user_id',
          to: 'users.id',
        },
      },
    }
  }
}
