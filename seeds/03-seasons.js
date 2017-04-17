var json = require('../data/data.json');
'use strict';

function seasonArray(json) {
  var seasons = [];
  var showId = 1;
  var id = 1;
  for (var showName in json) {
    var showData = json[showName];

    for (var seasonName in showData) {
      seasons.push({
        id: id,
        name: seasonName,
        show_id: showId
      });
      id++;
    }

    showId++;
  }

  return seasons;
}

exports.seed = function(knex, Promise) {

  return knex('seasons').insert(seasonArray(json))
};
