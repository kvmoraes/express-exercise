const express = require('express');
const router = express.Router();
const {createValidator} = require('express-joi-validation');
const validator = createValidator({});
const {userQuerySchema, userBodySchema} = require('../middleware/validator');
const userController = require('../controllers/userController');

router.get('/users', validator.query(userQuerySchema), userController.getUser)
router.post('/users', validator.body(userBodySchema), userController.createUser)
router.put('/users', validator.body(userBodySchema), userController.updateUser)

module.exports = router