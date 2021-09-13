const catchAsync = require('../../helpers/error/catchAsyncError');

const CategoryServices = require('../../services/category.service');
const { sendErrorResponse, sendSuccessResponse } = require('../../utils/responseBuilder');
const { BAD_REQUEST } = require('../../helpers/constants/statusCodeConstants');

/**
 * a method to try add new todo category by calling services function
 * and send response to the client
 * @param {Object} req request object
 * @param {Object} res response object
 */
const newCategory = catchAsync(async (req, res) => {
  const category = { ...req.body, ownerId: req.userId };

  const savedCategory = await CategoryServices.createCategory(category);

  if (savedCategory == null) {
    return sendErrorResponse(res, BAD_REQUEST, 'category title exists');
  }

  return sendSuccessResponse(res, savedCategory);
});

/**
 * a method to get category by it's id (controller) by calling service functions
 * and send response to the client
 * @param {Object} req request object
 * @param {Object} res response object
 */
const getCategory = catchAsync(async (req, res) => {
  const category = await CategoryServices.getCategoryById(req.userId, req.params.categoryId);

  return sendSuccessResponse(res, category);
});

/**
 * a method to get categories for a user by it's id (controller) by calling service functions
 * and send response to the client
 * @param {Object} req request object
 * @param {Object} res response object
 */
const getCategories = catchAsync(async (req, res) => {
  const categories = await CategoryServices.getCategoriesByUserId(req.userId);

  return sendSuccessResponse(res, categories);
});

module.exports = {
  newCategory,
  getCategory,
  getCategories,
};
