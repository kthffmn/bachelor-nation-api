const controller = require('./controller');

exports.map = {
  get: {
    '/': controller.read(),
    '/:id': controller.read(),
    '/:id/:related': controller.readRelated(),
    '/:id/relationships/:relation': controller.readRelation()
  }
};
