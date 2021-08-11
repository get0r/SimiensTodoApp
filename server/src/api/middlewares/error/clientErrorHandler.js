const { sendErrorResponse } = require('../../../utils/responseBuilder');

/**
 * a middleware to return error response to the client.
 * @param {*} req request object
 * @param {*} res response object
 * @param {*} next next routing function
 */
const clientErrorHandler = (err, req, res) => sendErrorResponse(res, err.httpCode, err.message);

module.exports = clientErrorHandler;
