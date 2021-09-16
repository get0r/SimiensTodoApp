const express = require('express');

const authUser = require('../../middlewares/auth/user.auth');
const TodoValidator = require('../../middlewares/validator/todo.joi.validator');
const TodoController = require('../../controllers/todo.controller');

const todoRouter = express.Router();

todoRouter
  .post('/todos/:categoryId', authUser, TodoValidator.validateTodo, TodoController.newTodo);

todoRouter
  .get('/todos/:categoryId', authUser, TodoController.getTodosByCategory);

todoRouter
  .get('/todos/:categoryId/:todoId', authUser, TodoController.getTodo);

todoRouter
  .patch('/todos/:categoryId/:todoId', authUser, TodoController.updateTodo);

todoRouter
  .delete('/todos/:categoryId/:todoId', authUser, TodoController.removeTodo);

module.exports = todoRouter;
