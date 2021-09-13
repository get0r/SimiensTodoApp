const Joi = require('joi');

const nameSchema = Joi.string().regex(/^[A-za-z\s]+$/).required();

const categorySchema = Joi.object({
  title: nameSchema,
  subTitle: nameSchema,
});

module.exports = categorySchema;
