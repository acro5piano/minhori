exports.up = async function(knex, Promise) {
  await knex.schema.table('users', function(table) {
    table.dropColumn('email')
    table.string('firebase_uid')
  })
}

exports.down = async function(knex, Promise) {
  await knex.schema.table('users', function(table) {
    table.string('email')
    table.dropColumn('firebase_uid')
  })
}
