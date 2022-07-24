const joi = require('joi');

const userQuerySchema = joi.object ({
    id: joi.string().required()
})

const userBodySchema = joi.object ({
    id: joi.string().required(),
    name: joi.string().required()
})

const productQuerySchema = joi.object ({
    id: joi.string().required()
})

const productBodySchema = joi.object ({
    id: joi.string().required(),
    size: joi.string().required()
})

module.exports = {
    userQuerySchema,
    userBodySchema,
    productBodySchema,
    productQuerySchema
}