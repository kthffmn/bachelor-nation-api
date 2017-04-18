const BaseModel = require('../../classes/base_model');

const instanceProps = {
  tableName: 'shows',
  seasons: function() {
    return this.hasMany(require('../seasons/model'));
  },
  contestants: function() {
    return this
      .hasMany(require('../contestants/model'))
      .through(require('../seasons/model'));
  },
  eligibles: function() {
    return this
      .hasMany(require('../eligibles/model'))
      .through(require('../seasons/model'));
  }
};

const classProps = {
  typeName: 'shows',
  filters: {
    id: function (qb, value) {
      return qb.whereIn('id', value);
    },
    name: function (qb, value) {
      return qb.whereIn('name', value);
    }
  },
  relations: [
    'contestants',
    'eligibles',
    'seasons'
  ]
};

module.exports = BaseModel.extend(instanceProps, classProps);
