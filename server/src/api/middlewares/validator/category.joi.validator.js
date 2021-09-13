const catchAsync = require('../../../helpers/error/catchAsyncError');
const UserValidationSchema = require('../../../helpers/validationSchema/user.joi.schema');
const categorySchema = require('../../../helpers/validationSchema/category.joi.schema');

/**
 * a method to validate client login data for further processing.
 * @param {Object} req request object
 * @param {Object} res response object
 * @param {Function} next next middleware function
 * @returns the result of the login controller.
 */
const validateCategory = catchAsync(async (req, res, next) => {
  //  asynchronously run validation.
  await categorySchema
    .validateAsync(req.body, UserValidationSchema.schemaOptions);
  return next();
});

module.exports = {
  validateCategory,
};
