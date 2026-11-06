const db = require('mongoose');

db.connect(process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/orders')
  .catch((err) => console.error(err));

module.exports = db;