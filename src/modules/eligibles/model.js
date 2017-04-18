const BaseModel = require('../../classes/base_model');

const instanceProps = {
  tableName: 'eligibles',
  person: function () {
    return this.belongsTo(require('../persons/model'));
  },
  season: function () {
    return this.belongsTo(require('../seasons/model'));
  }
};

const classProps = {
  typeName: 'eligibles',
  filters: {
    id: function (qb, value) {
      return qb.whereIn('id', value);
    },
    status: function (qb, value) {
      return qb.whereIn('status', value);
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
