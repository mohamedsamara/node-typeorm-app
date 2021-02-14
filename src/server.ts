import * as Hapi from '@hapi/hapi';
import { createConnection } from 'typeorm';

import config from './config';
import logger from './plugins/logger';
import swagger from './plugins/swagger';
import { routes } from './routes';

const { port } = config;

export default async (): Promise<Hapi.Server> => {
  const server: Hapi.Server = await new Hapi.Server({
    host: 'localhost',
    port
  });

  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    server.validator(require('@hapi/joi'));

    await server.route(routes);
    await server.register(swagger);
    await server.start();
    await createConnection();

    logger.info('Server running on %s', server.info.uri);

    return server;
  } catch (error) {
    logger.error(error);
    throw error;
  }
};
