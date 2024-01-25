/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = knex => knex.schema.createTable('studentRegistration', table => {
  table.string('id', 255).primary().comment('Unique student code');
  table.string('name', 255).notNullable().comment('Student full name');
  table.string('email', 255).collate('utf8_unicode_ci').comment('Student email');
  table.string('cpf', 11).notNullable().unique().comment('Student CPF number');
  table.timestamp('createdAt').defaultTo(knex.fn.now()).comment('Student registration date');
  table.boolean('flagDelete').defaultTo(false).comment('Flag signals record has been deleted');
})

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = knex => knex.schema.dropTable('studentRegistration')
