const express = require('express');
//const faker = require('faker');
const router = express.Router();
const ProductsService = require('./../services/products.service');

const validatorHandler = require('./../middleware/validator.handler');
const { createProductSchema, updateProductSchema, getProductSchema } = require('./../schemas/product.schema');

const service = new ProductsService();

router.get('/', async (req, res) => {
  /*const products = [];
  const { size } = req.query;
  const limit = size || 10;

  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(),10),
      image: faker.image.imageUrl(),
    });
  }*/
  const products = await service.find();
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Hola yo soy filter');
})

router.get('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {

  try {
    const {id} = req.params;
    const product = await service.findOne(id);
    res.json(product);
  } catch (error) {
    next(error)
  }

  /*if (id == '999'){
    res.status(404).json({
      message: 'Not Found'
    })
  }else{
    res.status(200).json(
      {
        id,
        name: 'Product 2',
        price: 2000
      });
  }*/
  }
);

router.post('/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);

  /*res.status(201).json({
    message: 'Created',
    data: body
  });*/
  }
);

router.put('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json(product);
    /*
    res.json({
      message: 'Update',
      data: body,
      id,
    });*/
  }
)

router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const product = await service.update(id, body);
      res.json(product);
    } catch (error) {
      next(error)
      /*res.status(404).json({
        message: error.message
      });*/
  }
  /*
  res.json({
    message: 'Update',
    data: body,
    id,
  });*/
  }
);

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const resp = await service.delete(id);
  res.json(resp);
  /*res.json({
    message: 'Deleted',
    id,
  });*/
})

module.exports = router;
