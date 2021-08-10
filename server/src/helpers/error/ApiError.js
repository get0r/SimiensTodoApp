const { INTERNAL_SERVER } = require('../constants/statusCodeConstants');
const BaseError = require('./BaseError');

module.exports = class ApiError extends BaseError {
  constructor(name, httpCode = INTERNAL_SERVER, isOperational = true, description = 'internal server error') {
    super(name, httpCode, isOperational, description);
  }
};
