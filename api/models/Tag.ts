import { Model } from 'objection'
import { ModelBase } from '@api/models/ModelBase'

export class Tag extends ModelBase {
  name!: string

  static tableName = 'tags'

  static get relationMappings() {
    return {
      questions: {
        relation: Model.ManyToManyRelation,
        modelClass: __dirname + '/Question',
        join: {
          from: 'tags.id',
          through: {
            from: 'questions_tags.tag_id',
            to: 'questions_tags.question_id',
          },
          to: 'questions.id',
        },
      },
    }
  }
}
