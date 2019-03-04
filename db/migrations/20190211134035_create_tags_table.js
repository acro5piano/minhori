exports.up = async function(knex, Promise) {
  await knex.schema.createTable('tags', function(table) {
    table.increments('id')
    table.string('name').notNullable()
  })

  await knex.schema.createTable('questions_tags', function(table) {
    table
      .integer('question_id')
      .unsigned()
      .notNullable()
    table.foreign('question_id').references('questions.id')
    table
      .integer('tag_id')
      .unsigned()
      .notNullable()
    table.foreign('tag_id').references('tags.id')
  })
}

exports.down = async function(knex, Promise) {
  await knex.schema.dropTable('questions_tags')
  await knex.schema.dropTable('tags')
}
