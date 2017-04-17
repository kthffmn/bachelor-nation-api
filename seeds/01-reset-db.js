'use strict';

exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('contestants').del(),
    knex('eligibles').del(),
    knex('seasons').del(),
    knex('persons').del(),
    knex('shows').del()
  );
};
