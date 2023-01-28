const express = require('express');
const router = express.Router();
const OrdersService = require('./../services/orders.service');
const service = new OrdersService();

router.get('/', (req, res) => {
  res.json([{
    name: 'Order 1',
    price: 5000
  },
  {
    name: 'Order 2',
    price: 7000
  }
]);
})

router.get('/:orderId', (req, res) => {
  const {orderId} = req.params;
  res.json([{
    orderId,
    name: 'Order 1',
    price: 5000
  },
]);
})

module.exports = router;
