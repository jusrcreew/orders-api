module.exports = (app, db) => {
  app.get('/orders', async (request, reply) => {
    let Order = require('../schema').Order;
    const orders = await Order.find().sort({ date: -1 });
    return reply.send({ count: orders.length, orders });
  });

  app.get('/order/:id', async (request, reply) => {
    let Order = require('../schema').Order;
    const { id } = request.params;
    if (!/^[a-f\d]{24}$/i.test(id)) {
      return reply.code(400).send({ message: 'Invalid order id' });
    }
    const order = await Order.findById(id);
    if (!order) {
      return reply.code(404).send({ message: 'Order not found' });
    }
    return reply.send(order);
  });
};