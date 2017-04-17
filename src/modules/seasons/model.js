const BaseModel = require('../../classes/base_model');

// const instanceProps = {
//   tableName: 'seasons',
//   contestants: function () {
//     return this.hasMany(require('../contestants/model'));
//   },
//   eligible: function () {
//     return this.hasOne(require('../eligibles/model'));
//   },
//   show: function () {
//     return this.belongsTo(require('../show/model'));
//   }
// };

const instanceProps = {
  tableName: 'seasons',
  show: function () {
    return this.belongsTo(require('../shows/model'));
  }
};


const classProps = {
  typeName: 'seasons',
  filters: {
    id: function (qb, value) {
      return qb.whereIn('id', value);
    },
    name: function (qb, value) {
      return qb.whereIn('name', value);
    }
  },
  relations: [
    'show'
  ]
};

module.exports = BaseModel.extend(instanceProps, classProps);
