'use strict';

exports.sliceArray = function(array, knex, table, maxEntries) {
  var min = 0;
  var max = maxEntries;
  var arrayOfArrays = [];
  var maxSteps = Math.ceil(array.length / maxEntries);
  for (var step = 0; step < maxSteps; step++) {
    arrayOfArrays.push(
      knex(table).insert(array.slice(min, max))
    );
    min = max;
    max = max + maxEntries;
  }
  return arrayOfArrays;
};

exports.collectValuesAndAddId = function(object) {
  var values = [];
  var id = 1;
  for(var key in object) {
    var personObject = object[key];
    personObject['id'] = id;
    values.push(personObject);
    id++;
  }
  return values;
};

exports.getSeasonId = function(knex, showId, seasonName) {
  return knex('seasons').where({
    name: seasonName,
    show_id: showId
  }).select('id');
};

exports.getIdByName = function(knex, table, name) {
  return knex(table).where({
    name: name
  }).select('id');
};

exports.addEligibleOrContestant = function(person, season, show, array, id) {
  array.push({
    name: person['name'],
    age: person['age'],
    status: person['status'],
    show: show,
    season: season,
    id: id
  });
};

exports.generateKnexStatements = function(knex, array) {
  var _this = this;
  return Promise.all(array.map(function(person) {
    console.log('***name***', person['name']);
    return Promise.all([
      _this.getIdByName(knex, 'persons', person['name']),
      _this.getIdByName(knex, 'shows', person['show']).then(function(data) {
          var showId = data[0].id;
          return _this.getSeasonId(knex, showId, person['season'])
        }
      )
    ]).then(function(data) {
      var personId = data[0][0].id;
      var seasonId = data[1][0].id;
      return _this.slimmedDownObject(person, personId, seasonId);
    });
  }));
};

exports.slimmedDownObject = function(personObj, personId, seasonId) {
  return {
    age: personObj['age'],
    status: personObj['status'],
    season_id: seasonId,
    person_id: personId,
    id: personObj['id']
  }
};
