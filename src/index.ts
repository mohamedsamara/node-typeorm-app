import 'dotenv/config';
import * as Hapi from '@hapi/hapi';

import config from './config';
import logger from './plugins/logger';

const { port } = config;

const init = async () => {
  const server = Hapi.server({
    port,
    host: 'localhost'
  });

  await server.start();

  logger.info('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (error) => {
  logger.error(error);
  process.exit(1);
});

init();
