const Joi = require('joi');

const todoSchema = Joi.object({
  title: Joi.string().trim().min(2).required(),
  desc: Joi.string(),
  dueDate: Joi.date(),
});

module.exports = todoSchema;
