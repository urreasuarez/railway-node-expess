const express = require('express');
const router = express.Router();
const CategoriesService = require('./../services/categories.service');
const service = new CategoriesService();

router.get('/', (req, res) => {
  res.json([{
    categoryId: 10,
    name: 'Color'
  },
  {
    categoryId: 20,
    name: 'Make Up'
  },
  {
    categoryId: 30,
    name: 'Body Care'
  },
]);
})

router.get('/:categoryId/products/:productId', (req, res) => {
  const {categoryId, productId} = req.params;
  res.json(
    {
      categoryId,
      productId
    }
  )
})

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'Created',
    data: body
  });
})

module.exports = router;
