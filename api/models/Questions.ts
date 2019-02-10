import { Model } from 'objection'
import { ModelBase } from '@api/models/ModelBase'

export class Question extends ModelBase {
  title!: string
  content!: string

  static tableName = 'users'

  static get relationMappings() {
    return {
      containers: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/User',
        join: {
          from: 'users.id',
          to: 'questions.user_id',
        },
      },
    }
  }
}
