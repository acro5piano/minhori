exports.up = async function(knex, Promise) {
  await knex.schema.createTable('tags', function(table) {
    table
      .uuid('id')
      .notNullable()
      .primary()
    table.string('name').notNullable()
  })

  await knex.schema.createTable('questions_tags', function(table) {
    table.uuid('question_id').notNullable()
    table.foreign('question_id').references('questions.id')
    table.uuid('tag_id').notNullable()
    table.foreign('tag_id').references('tags.id')
  })
}

exports.down = async function(knex, Promise) {
  await knex.schema.dropTable('questions_tags')
  await knex.schema.dropTable('tags')
}
