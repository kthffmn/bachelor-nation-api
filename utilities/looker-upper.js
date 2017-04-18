module.exports.iLike = function(qb, encodedValue, columnName) {
  var value = decodeURI(encodedValue).toLowerCase();
  return qb.whereRaw('LOWER(' + columnName + ') LIKE ?', '%'+ value +'%');
};
