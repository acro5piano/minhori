const p = require('path')

const path = p.resolve(process.cwd(), '.env.testing')

const Knex = require('knex')
const knexConfig = require('./knexfile')
const knex = Knex(knexConfig)

global.migrate = async function() {
  await knex.migrate.rollback()
  await knex.migrate.latest()
}

require('dotenv').config({ path })
