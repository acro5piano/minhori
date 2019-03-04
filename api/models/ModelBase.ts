import { Model } from 'objection'
import * as Knex from 'knex'
// @ts-ignore
import * as KnexConfig from '@root/knexfile'

const knexTinyLogger = require('knex-tiny-logger').default

export const knex = Knex(KnexConfig)

Model.knex(knex)
knexTinyLogger(knex)

export abstract class ModelBase extends Model {
  id!: string
  created_at!: string
  updated_at!: string

  $beforeInsert() {
    this.created_at = new Date().toISOString()
    this.updated_at = new Date().toISOString()
  }

  $beforeUpdate() {
    this.updated_at = new Date().toISOString()
  }
}
