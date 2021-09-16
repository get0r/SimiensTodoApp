const TodoModel = require('../database/models/todo.model');
const CategoryServices = require('./category.service');

/**
 * a method to create a new todo record in the database.
 * @param {Object} param0 todo details like title, sub title..
 * @returns the saved todo item if saving to db successful null if not
 */
const createTodo = async (userId, {
  title, desc, categoryId, dueDate,
}) => {
  const doesTodoExist = await TodoModel.findOne({ title }).lean();

  if (doesTodoExist) {
    return null;
  }

  const category = await CategoryServices.getCategoryById(userId, categoryId);
  if (!category) return null;

  const newTodo = await new TodoModel({
    title,
    desc: (desc === null || desc === undefined) ? '' : desc,
    categoryId,
    dueDate: (dueDate === null || dueDate === undefined) ? '' : dueDate,
  }).save();

  return newTodo;
};

/**
 * a method to retrieve all todos belonging to a certain category by category id.
 * @param {String} userId user id
 * @param {String} categoryId category Id
 * @returns retrieved todo items- might be empty
 */
const getTodosByCategoryId = async (userId, categoryId) => {
  const category = await CategoryServices.getCategoryById(userId, categoryId);
  if (!category) {
    return null;
  }

  const todos = await TodoModel.find({ categoryId }).lean();
  if (!todos) {
    return [];
  }
  return todos;
};

/**
 * a method to retrieve a todo by its id benchmarking its category.
 * @param {String} userId user id
 * @param {String} categoryId category id
 * @param {String} todoID todo id
 * @returns retrieved category- might be empty
 */
const getTodoById = async (userId, categoryId, todoId) => {
  if (todoId.length !== 24) return null;
  const category = await CategoryServices.getCategoryById(userId, categoryId);

  if (!category) {
    return null;
  }

  const todo = await TodoModel.findById(todoId).lean();
  if (todo.categoryId.toString() !== categoryId) {
    return null;
  }
  return todo;
};

/**
 * a method to delete a todo record from db using its id.
 * @param {String} userId user id
 * @param {String} categoryId category id
 * @param {String} todoId todo id
 * @returns the removed todo.
 */
const removeTodoById = async (userId, categoryId, todoId) => {
  const toBeRemoved = await getTodoById(userId, categoryId, todoId);
  if (!toBeRemoved) {
    return null;
  }
  const removedTodo = await TodoModel.deleteOne({ _id: todoId }).lean();
  if (!removedTodo) {
    return null;
  }

  return toBeRemoved;
};

/**
   * a method to update a tod record i.e items in the record from db using its id.
   * @param {String} categoryId category id
   * @returns updated category
   */
const updateTodoById = async (userId, categoryId, todoId, updatedObject) => {
  const toBeUpdated = await getTodoById(userId, categoryId, todoId);
  if (!toBeUpdated) {
    return null;
  }
  const updatedCategory = await TodoModel
    .updateOne({ _id: todoId }, { $set: updatedObject }).lean();
  if (!updatedCategory) {
    return null;
  }
  return true;
};

module.exports = {
  createTodo,
  getTodosByCategoryId,
  getTodoById,
  removeTodoById,
  updateTodoById,
};
