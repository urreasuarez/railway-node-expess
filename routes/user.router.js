const express = require('express');
const router = express.Router();
const UsersService = require('./../services/users.service');
const service = new UsersService();

router.get('/', (req, res) => {
  res.json([{
    name: 'User 1',
    rol: 'admin'
  },
  {
    name: 'user 2',
    rol: 'agent'
  }
]);
})

router.get('/:userId', (req, res) => {
  const {userId} = req.params;
  res.json([{
    userId,
    name: 'User 1',
    rol: 'admin'
  },
]);
})

module.exports = router;
