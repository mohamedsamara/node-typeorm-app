import 'dotenv/config';
import 'reflect-metadata';

import server from './server';
import logger from './plugins/logger';

(async () => {
  await server();
})();

process.on('unhandledRejection', (error) => {
  logger.error(error);
  process.exit(1);
});
