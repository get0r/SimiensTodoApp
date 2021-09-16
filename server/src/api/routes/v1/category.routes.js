const express = require('express');

const authUser = require('../../middlewares/auth/user.auth');
const CategoryController = require('../../controllers/category.controller');
const CategoryValidator = require('../../middlewares/validator/category.joi.validator');

const catRouter = express.Router();

catRouter
  .get('/categories', authUser, CategoryController.getCategories);

catRouter
  .post('/categories', authUser, CategoryValidator.validateCategory, CategoryController.newCategory);

catRouter
  .get('/categories/:categoryId', authUser, CategoryController.getCategory);

catRouter
  .put('/categories/:categoryId', authUser, CategoryController.updateCategory);

catRouter
  .delete('/categories/:categoryId', authUser, CategoryController.removeCategory);

module.exports = catRouter;
