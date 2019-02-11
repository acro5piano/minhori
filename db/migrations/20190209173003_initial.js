exports.up = async function(knex, Promise) {
  await knex.schema.createTable('users', function(table) {
    table
      .uuid('id')
      .notNullable()
      .primary()
    table.string('name')
    table.string('email').notNullable()
    table.string('avatar_url')
    table.timestamps()
  })

  await knex.schema.createTable('questions', function(table) {
    table
      .uuid('id')
      .notNullable()
      .primary()
    table.uuid('user_id').notNullable()
    table.foreign('user_id').references('users.id')
    table.string('title').notNullable()
    table.string('content')
    table.timestamps()
  })

  await knex.schema.createTable('answers', function(table) {
    table
      .uuid('id')
      .notNullable()
      .primary()
    table.uuid('user_id').notNullable()
    table.foreign('user_id').references('users.id')
    table.uuid('question_id').notNullable()
    table.foreign('question_id').references('questions.id')
    table.string('title').notNullable()
    table.string('content')
    table.timestamps()
  })
}

exports.down = async function(knex, Promise) {
  await knex.schema.dropTable('answers')
  await knex.schema.dropTable('questions')
  await knex.schema.dropTable('users')
}
