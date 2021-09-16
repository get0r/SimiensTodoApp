const catchAsync = require('../../../helpers/error/catchAsyncError');
const UserValidationSchema = require('../../../helpers/validationSchema/user.joi.schema');
const todoSchema = require('../../../helpers/validationSchema/todo.joi.schema');

/**
 * a method to validate todo data sent by client while creating todo's for further processing.
 * @param {Object} req request object
 * @param {Object} res response object
 * @param {Function} next next middleware function
 * @returns the result of the todo creator controller.
 */
const validateTodo = catchAsync(async (req, res, next) => {
  //  asynchronously run validation.
  await todoSchema
    .validateAsync(req.body, UserValidationSchema.schemaOptions);
  return next();
});

module.exports = {
  validateTodo,
};
