const BaseModel = require('../../classes/base_model');
const utils = require('../../../utilities/looker-upper');

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
      return utils.iLike(qb, value, 'name');
    },
    occupation: function (qb, value) {
      return utils.iLike(qb, value, 'occupation');
    },
    hometown: function (qb, value) {
      return utils.iLike(qb, value, 'hometown');
    }
  },
  relations: [
    'contestant_seasons',
    'eligible_seasons'
  ]
};

module.exports = BaseModel.extend(instanceProps, classProps);
