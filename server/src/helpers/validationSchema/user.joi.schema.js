const Joi = require('joi');

const schemaOptions = {
  abortEarly: false,
  stripUnknown: true,
};

const nameSchema = Joi.string().regex(/^[A-za-z\s]+$/).required();
const usernameSchema = Joi.string().min(3).max(10).regex(/[A-za-z1-9\s]+/)
  .required();
const passwordSchema = Joi.string().min(8).max(22).required();

//  validator for login purpose.
const loginSchema = Joi.object({
  username: usernameSchema,
  password: passwordSchema,
});

const signUpSchema = Joi.object({
  fname: nameSchema,
  lname: nameSchema,
  username: usernameSchema,
  password: passwordSchema,
});

module.exports = {
  schemaOptions,
  loginSchema,
  signUpSchema,
};
