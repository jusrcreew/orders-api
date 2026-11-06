const Fastify = require('fastify');
const db = require('./db');

const app = Fastify({
  logger: true
});

require('./routes')(app, db);

app.listen({ port: 3000, host: '0.0.0.0' }, (err) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
});