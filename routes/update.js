module.exports = (app, db) => {
  app.put('/order/:id', async (request, reply) => {
    let Order = require('../schema').Order;
    const { id } = request.params;
    if (!/^[a-f\d]{24}$/i.test(id)) {
      return reply.code(400).send({ message: 'Invalid order id' });
    }
    const body = request.body;
    const name = body && typeof body.name === 'string' ? body.name.trim() : '';
    if (!name) {
      return reply.code(400).send({ message: 'Name is required' });
    }
    const order = await Order.findByIdAndUpdate(id, { name }, { runValidators: true });
    if (!order) {
      return reply.code(404).send({ message: 'Order not found' });
    }
    return reply.code(204).send();
  });
};