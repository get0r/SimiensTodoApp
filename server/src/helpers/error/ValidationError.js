const { BAD_REQUEST } = require('../constants/statusCodeConstants');
const BaseError = require('./BaseError');

module.exports = class ValidationError extends BaseError {
  constructor(description = 'internal server error') {
    super('Validation Error', BAD_REQUEST, true, description);
  }
};
