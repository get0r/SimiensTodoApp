/**
 * a method to catch errors by running sync functions.
 * @param {Function} fn asynchronous function to be wrapped under error handler.
 * @returns a function that can be run and checked for errors.
 */
const catchAsync = (fn) => (req, res, next) => {
  fn(req, res, next)
    .catch((err) => next(err));
};

module.exports = catchAsync;
