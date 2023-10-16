const Joi = require("joi");

exports.createUserSchema = Joi.object({
  username: Joi.string()
    .min(5)
    .max(30)
    .pattern(/^(?=.{5,50}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/)
    .required(),
  email: Joi.string().max(50).email().required(),
  password: Joi.string().min(6).max(20).required(),
});


exports.loginSchema = Joi.object({
  username: Joi.string()
    .min(5)
    .max(30)
    .required(),
  password: Joi.string().min(6).max(20).required(),
});