const express = require('express');
const userRouter = require('./user.routes');

const indexRouter = express.Router();

indexRouter.use(userRouter);

module.exports = indexRouter;
