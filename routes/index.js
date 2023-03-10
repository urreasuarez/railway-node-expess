
const express = require('express');
const productRouter = require('./products.router');
const userRouter = require('./user.router');
const categoriesRouter = require('./categories.router');
const ordersRouter = require('./order.router')

function routerApi(app){

  const router = express.Router();
  app.use('/api/v1',router);
  router.use('/products', productRouter);
  router.use('/users', userRouter);
  router.use('/categories', categoriesRouter);
  router.use('/orders', ordersRouter);
}

module.exports = routerApi;
