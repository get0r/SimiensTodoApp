const app = require('./app');
const config = require('./config/config');
const { appLogger } = require('./helpers/logger/appLogger');

const PORT = config.app.port;

app.listen(PORT, () => {
  appLogger.info(`App Started and Listening on port ${PORT}`);
});
