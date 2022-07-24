const express = require('express');
const router = express.Router();
const {createValidator} = require('express-joi-validation');
const validator = createValidator({});
const {productQuerySchema, productBodySchema} = require('../middleware/validator');
const productsController = require('../controllers/productsController');

router.get('/tshirts', validator.query(productQuerySchema), productsController.getProduct)
router.post('/tshirts', validator.body(productBodySchema), productsController.createProduct)

module.exports = router