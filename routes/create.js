module.exports = (app, db) => {
  app.post('/order', async (request, reply) => {
    let Order = require('../schema').Order;
    const body = request.body;
    const name = body && typeof body.name === 'string' ? body.name.trim() : '';
    if (!name) {
      return reply.code(400).send({ message: 'Name is required' });
    }
    const order = await Order.create({ name });
    return reply.code(201).send({ message: 'Order created successfully', order });
  });
};