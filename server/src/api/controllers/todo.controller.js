const TodoServices = require('../../services/todo.service');
const catchAsync = require('../../helpers/error/catchAsyncError');
const { BAD_REQUEST, NOT_FOUND } = require('../../helpers/constants/statusCodeConstants');
const { sendErrorResponse, sendSuccessResponse } = require('../../utils/responseBuilder');

/**
 * a method to try add new todo by calling services function
 * and send response to the client
 * @param {Object} req request object
 * @param {Object} res response object
 */
const newTodo = catchAsync(async (req, res) => {
  const todo = { ...req.body, categoryId: req.params.categoryId };
  const savedTodo = await TodoServices.createTodo(req.userId, todo);

  if (!savedTodo) {
    return sendErrorResponse(res, BAD_REQUEST, 'todo title exists');
  }

  return sendSuccessResponse(res, savedTodo);
});

/**
 * a method to try to get todo's by their category by calling services function
 * and send response to the client
 * @param {Object} req request object
 * @param {Object} res response object
 */
const getTodosByCategory = catchAsync(async (req, res) => {
  const retrievedTodos = await TodoServices.getTodosByCategoryId(req.userId, req.params.categoryId);

  if (!retrievedTodos) {
    return sendErrorResponse(res, NOT_FOUND, 'category not found!');
  }

  return sendSuccessResponse(res, retrievedTodos);
});

/**
 * a method to try to get a todo item by its id by calling services function
 * and send response to the client
 * @param {Object} req request object
 * @param {Object} res response object
 */
const getTodo = catchAsync(async (req, res) => {
  const retrievedTodo = await TodoServices
    .getTodoById(req.userId, req.params.categoryId, req.params.todoId);

  if (!retrievedTodo) {
    return sendErrorResponse(res, NOT_FOUND, 'todo not found! or Unauthorized access!');
  }

  return sendSuccessResponse(res, retrievedTodo);
});

/**
 * a method to delete a todo item.
 * and send response to the client
 * @param {Object} req request object
 * @param {Object} res response object
 */
const removeTodo = catchAsync(async (req, res) => {
  const removedTodo = await TodoServices
    .removeTodoById(req.userId, req.params.categoryId, req.params.todoId);
  if (!removedTodo) {
    return sendErrorResponse(res, NOT_FOUND, 'Couldn\'t find todo.');
  }
  return sendSuccessResponse(res, removedTodo);
});

/**
   * a method to update a todo item.
   * and send response to the client
   * @param {Object} req request object
   * @param {Object} res response object
   */
const updateTodo = catchAsync(async (req, res) => {
  const updatedTodo = await TodoServices
    .updateTodoById(req.userId, req.params.categoryId, req.params.todoId, req.body);

  if (!updatedTodo) {
    return sendErrorResponse(res, NOT_FOUND, 'Couldn\'t find todo.');
  }
  return sendSuccessResponse(res, updatedTodo);
});
module.exports = {
  newTodo,
  getTodosByCategory,
  getTodo,
  removeTodo,
  updateTodo,
};
