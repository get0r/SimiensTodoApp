const express = require('express');
const userRouter = require('./user.routes');
const categoryRouter = require('./category.routes');
const todoRouter = require('./todo.routes');

const indexRouter = express.Router();

indexRouter.use(userRouter);
indexRouter.use(categoryRouter);
indexRouter.use(todoRouter);

module.exports = indexRouter;
