import { Model } from 'objection'
import { ModelBase } from '@api/models/ModelBase'

export class User extends ModelBase {
  name!: string
  email!: string
  avatar_url?: string

  static tableName = 'users'

  static get relationMappings() {
    return {
      containers: {
        relation: Model.HasManyRelation,
        modelClass: __dirname + '/Questions',
        join: {
          from: 'users.id',
          to: 'questions.user_id',
        },
      },
    }
  }
}
