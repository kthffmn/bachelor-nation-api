const BaseModel = require('../../classes/base_model');
const utils = require('../../../utilities/looker-upper');

const instanceProps = {
  tableName: 'contestants',
  person: function () {
    return this.belongsTo(require('../persons/model'));
  },
  season: function () {
    return this.belongsTo(require('../seasons/model'));
  }
};

const classProps = {
  typeName: 'contestants',
  filters: {
    id: function (qb, value) {
      return qb.whereIn('id', value);
    },
    status: function (qb, value) {
      return utils.iLike(qb, value, 'status');
    },
    youngerThan: function (qb, value) {
      return qb.where('age', '<', value);
    },
    olderThan: function (qb, value) {
      return qb.where('age', '>', value);
    }
  },
  relations: [
    'person',
    'season'
  ]
};

module.exports = BaseModel.extend(instanceProps, classProps);
