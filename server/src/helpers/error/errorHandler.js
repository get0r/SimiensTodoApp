const { appLogger } = require('../logger/appLogger');

const errorHandler = (err) => {
  // assemble the error for logging
  const errorMessage = JSON.stringify({
    message: err.message,
    type: err.constructor.name,
  });
  appLogger.warn(errorMessage);
};

module.exports = errorHandler;
