const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const permission = require('../middlewares/permission');

// Get all orders
/*

Lista las ordenes que se encuentran en la tabla 

*/
router.get('/', permission('admin'), async (req, res) => {
  const orders = await sequelize.models.orders.findAndCountAll();
  return res.status(200).json({ data: orders });
});

// Creating a new order
/*
Crea la orden a partir de los valores que llegan en el body
*/
router.post('/', permission('admin', 'client'), async (req, res) => {
  const { body } = req;
  const order = await sequelize.models.orders.create({
    userId: body.userId,
    productId: body.productId,
    quantity: body.quantity,
  });

  await order.save();
  return res.status(201).json({ data: order });
});

// Update a order by id
/*
Actualiza la orden a partir de los valores que llegan en el body
*/
router.put('/:id', permission('admin', 'client'), async (req, res) => {
  const { body, params = { id }} = req;
  const order = await sequelize.models.orders.findByPk(id);

  if (!order) {
    return res.status(404).json({code: 404, message: 'Order not found' });
  }

  const updatedOrder = await order.update({
    userId: body.userId,
    productId: body.productId,
    quantity: body.quantity,
  });

  return res.json({ data: updatedOrder });
});

// Delete a order by id
/*
Borra la orden a partir de primary key que llega en el body
*/
router.delete('/:id', permission('admin'), async (req, res) => {
  const { params: { id } } = req;
  const order = await sequelize.models.orders.findByPk(id);

  if (!order) {
    return res.status(404).json({ code: 404, message: 'Order not found' });
  }

  await order.destroy();
  return res.json({ message: 'Deleted successfully' });
});

module.exports = router;
