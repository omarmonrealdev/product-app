const Joi = require("joi");

exports.createProductSchema = Joi.object({
  image: Joi.string().uri(),
  sku: Joi.string()
    .min(7)
    .max(7)
    .pattern(/^[A-Za-z]{3}\d{4}$/)  //tres letras, 4 digitos
    .required(),
  description: Joi.string().min(5).max(2500).required(),
});

exports.updateProductSchema = Joi.object({
  image: Joi.string().uri().optional(),
  sku: Joi.string()
    .min(7)
    .max(7)
    .pattern(/^[A-Za-z]{3}\d{4}$/)  //tres letras, cuatro numeros
    .optional(),
  description: Joi.string().min(5).max(2500).optional(),
}).min(1);

exports.paramsSchema = Joi.object({
  id: Joi.number().required()
});