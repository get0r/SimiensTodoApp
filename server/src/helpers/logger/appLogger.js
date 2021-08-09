const winston = require('winston');
const morgan = require('morgan');

const transportOptions = {
  file: {
    level: 'info',
    filename: './logs/app.log',
    handleExceptions: true,
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.json(),
    ),
    maxsize: 5242880,
    maxFiles: 5,
    colorize: false,
  },

  console: {
    level: 'debug',
    format: winston.format.combine(
      winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSS' }),
      winston.format.simple(),
    ),
    handleExceptions: true,
    colorize: true,
  },
};

const loggerConfig = {
  levels: winston.config.npm.levels,
  transports: [
    new winston.transports.File(transportOptions.file),
    new winston.transports.Console(transportOptions.console),
  ],
  exitOnError: false,
};

//  core app logger.
const appLogger = winston.createLogger(loggerConfig);

//  a stream to get morgan logs to winston
const appLoggerStream = {
  write: (message) => {
    appLogger.info(message);
  },
};

//  http network logger.
const httpLogger = morgan('combined', { stream: appLoggerStream });

module.exports = {
  appLogger,
  httpLogger,
};
