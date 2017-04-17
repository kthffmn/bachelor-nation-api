exports.up = function (knex) {
  return knex.schema
    .createTable('shows', function (t) {
      t.increments('id');
      t.text('name').notNullable();
    })
    .createTable('seasons', function (t) {
      t.increments('id');
      t.integer('show_id').notNullable().references('id').inTable('shows');
      t.text('name');
      t.date('start');
      t.date('end');
    })
    .createTable('persons', function (t) {
      t.increments('id');
      t.text('name').notNullable();
      t.text('occupation');
      t.text('hometown').notNullable();
    })
    .createTable('eligibles', function (t) {
      t.increments('id');
      t.integer('person_id').notNullable().references('id').inTable('persons');
      t.integer('season_id').notNullable().references('id').inTable('seasons');
      t.text('status').notNullable();
      t.integer('age').notNullable();
    })
    .createTable('contestants', function (t) {
      t.increments('id');
      t.integer('person_id').notNullable().references('id').inTable('persons');
      t.integer('season_id').notNullable().references('id').inTable('seasons');
      t.text('status');
      t.integer('age').notNullable();
    });
};


exports.down = function (knex) {
  return knex.schema
    .dropTable('contestants')
    .dropTable('eligibles')
    .dropTable('seasons')
    .dropTable('persons')
    .dropTable('shows');
};
