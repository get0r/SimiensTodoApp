const Joi = require('joi');

const categorySchema = Joi.object({
  title: Joi.string().trim().min(2).required(),
  subTitle: Joi.string(),
});

module.exports = categorySchema;
