const BaseModel = require('../../classes/base_model');

const instanceProps = {
  tableName: 'persons',
  eligible_seasons: function () {
    return this.belongsToMany(require('../seasons/model'), 'eligibles', 'person_id', 'season_id');
  },
  contestant_seasons: function () {
    return this.belongsToMany(require('../seasons/model'), 'contestants', 'person_id', 'season_id');
  }
};

const classProps = {
  typeName: 'persons',
  filters: {
    id: function (qb, value) {
      return qb.whereIn('id', value);
    },
    name: function (qb, value) {
      return qb.whereIn('name', value);
    },
    occupation: function (qb, value) {
      return qb.whereIn('occupation', value);
    },
    hometown: function (qb, value) {
      return qb.whereIn('hometown', value);
    }
  },
  relations: [
    'contestant_seasons',
    'eligible_seasons'
  ]
};

module.exports = BaseModel.extend(instanceProps, classProps);
