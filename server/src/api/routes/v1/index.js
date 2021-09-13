const express = require('express');
const userRouter = require('./user.routes');
const categoryRouter = require('./category.routes');

const indexRouter = express.Router();

indexRouter.use(userRouter);
indexRouter.use(categoryRouter);

module.exports = indexRouter;
