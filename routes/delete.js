module.exports = (app, db) => {
  app.delete('/order/:id', async (request, reply) => {
    let Order = require('../schema').Order;
    const { id } = request.params;
    if (!/^[a-f\d]{24}$/i.test(id)) {
      return reply.code(400).send({ message: 'Invalid order id' });
    }
    const order = await Order.findByIdAndDelete(id);
    if (!order) {
      return reply.code(404).send({ message: 'Order not found' });
    }
    return reply.send({ message: 'Order deleted successfully', order });
  });
};