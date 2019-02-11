const p = require('path')

const path = p.resolve(process.cwd(), '.env.testing')

const Knex = require('knex')
const knexConfig = require('./knexfile')
global.knex = Knex(knexConfig)

require('dotenv').config({ path })
