'use strict';

var utils = require('../utilities/seed-utilities.js');
var DATA = require('../data/data.json');
var MAX_ENTRIES = 199;

function contestantsArray() {
  var contestantsArray = [];
  var contestantId = 1;
  for (var showName in DATA) {
    var seasons = DATA[showName];
    for (var seasonName in seasons) {
      seasons[seasonName]['contestants'].forEach(function(contestant) {
        utils.addEligibleOrContestant(contestant, seasonName, showName, contestantsArray, contestantId);
        contestantId++;
      });
    }
  }

  return contestantsArray;
}

exports.seed = function(knex, Promise) {
  return utils.generateKnexStatements(knex, contestantsArray())
    .then(function(contestants) {
      var splitStatements = utils.sliceArray(contestants, knex, 'contestants', MAX_ENTRIES);
      return Promise.all(splitStatements);
    });
};
