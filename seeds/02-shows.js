var json = require('../data/data.json');
'use strict';

function showArray(json) {
  var shows = [];
  var id = 1;
  for (var showName in json) {
    shows.push({id: id, name: showName});
    id++;
  }
  return shows;
}

exports.seed = function(knex, Promise) {
  return knex('shows').insert(showArray(json));
};
