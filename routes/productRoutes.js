const express = require('express');
const productRouter = express.Router();
const checkAuth = require('../middlewares/auth');
const productController = require('../controllers/productController');

productRouter.get('/', (req, res) => res.send('hellow')); // 測試用

module.exports = productRouter;