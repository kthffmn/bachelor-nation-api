'use strict';

var utils = require('../utilities/seed-utilities.js');
var DATA = require('../data/data.json');

var MAX_ENTRIES = 249;
var personsObject = {};

function addPersonsToPersonsObject() {
  for (var showName in DATA) {
    var seasons = DATA[showName];
    for (var seasonName in seasons) {
      addPersonsBySeason(seasons[seasonName]);
    }
  }
}

function addPersonsBySeason(season) {
  addPersonToObject(season['eligible']);
  season['contestants'].forEach(function(contestant) {
    addPersonToObject(contestant);
  });
}

function addPersonToObject(person) {
  if (personNotInPersons(person)) {
    personsObject[person['name']] = slimmedDownPersonObject(person);
  }
}

function slimmedDownPersonObject(person) {
  return {
    name: person['name'],
    occupation: person['occupation'],
    hometown: person['hometown']
  }
}

function personNotInPersons(person) {
  return !personInPersons(person);
}

function personInPersons(person) {
  return personsObject[person['name']] &&
    personsObject[person['name']]['hometown'] == person['hometown'];
}

exports.seed = function(knex, Promise) {
  addPersonsToPersonsObject();
  var persons = utils.collectValuesAndAddId(personsObject);
  var knexStatements = utils.sliceArray(persons, knex, 'persons', MAX_ENTRIES);
  return Promise.all(knexStatements);
};
