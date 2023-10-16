const Joi = require("joi");

exports.createReviewSchema = Joi.object({
  content: Joi.string().min(5).max(1000).required(),
});

exports.updateReviewSchema = Joi.object({
  content: Joi.string().min(5).max(1000).required(),
});

exports.paramsSchema = Joi.object({
  id: Joi.number().required()
});