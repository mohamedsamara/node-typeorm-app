import * as Hapi from '@hapi/hapi';
import { createConnection } from 'typeorm';
import Joi from 'joi';

import config from './config';
import logger from './plugins/logger';
import swagger from './plugins';
import { routes } from './routes';

const validator: any = Joi;

const { port } = config;

export default async (): Promise<Hapi.Server> => {
  const server: Hapi.Server = await new Hapi.Server({
    host: 'localhost',
    port
  });

  try {
    await server.register(swagger);
    await server.validator(validator);
    await server.route(routes);

    await server.start();
    await createConnection();

    logger.info('Server running on %s', server.info.uri);

    return server;
  } catch (error) {
    logger.error(error);
    throw error;
  }
};
