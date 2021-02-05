import * as Hapi from '@hapi/hapi';

import config from './config';
import logger from './plugins/logger';
import swagger from './plugins/swagger';
import { routes } from './routes';

const { port } = config;

export default async () => {
  const server = await new Hapi.Server({
    host: 'localhost',
    port
  });

  try {
    logger.info('Server running on %s', server.info.uri);

    await server.route(routes);

    await server.register(swagger);

    await server.start();
    return server;
  } catch (error) {
    logger.error(error);
    throw error;
  }
};
