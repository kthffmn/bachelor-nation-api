'use strict';

var utils = require('../utilities/seed-utilities.js');
var DATA = require('../data/data.json');

function eligiblesArray() {
  var eligibles = [];
  var id = 1;
  for (var showName in DATA) {
    var seasons = DATA[showName];
    for (var seasonName in seasons) {
      var eligible = seasons[seasonName]['eligible'];
      utils.addEligibleOrContestant(eligible, seasonName, showName, eligibles, id);
      id++;
    }
  }
  return eligibles;
}

exports.seed = function(knex, Promise) {
  var eligibles = eligiblesArray();
  return utils.generateKnexStatements(knex, eligibles).then(function(knexStatements) {
    return knex('eligibles').insert(knexStatements);
  });
};
