import 'dotenv/config';

import server from './server';
import logger from './plugins/logger';

const start = async () => {
  await server();
};

// start the server
start();

process.on('unhandledRejection', (error) => {
  logger.error(error);
  process.exit(1);
});
