const create = require('./create');
const read = require('./read');
const remove = require('./delete');
const update = require('./update');

module.exports = (app, db) => {
  create(app, db);
  read(app, db);
  remove(app, db);
  update(app, db);
};