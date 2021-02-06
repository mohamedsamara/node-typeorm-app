import 'dotenv/config';
import 'reflect-metadata';
import { createConnection } from 'typeorm';

import server from './server';
import logger from './plugins/logger';

const start = async () => {
  await server();
};

const startDb = async () => {
  try {
    await createConnection();
  } catch (error) {
    logger.error(error);
  }
};

// start the server
start();
startDb();

process.on('unhandledRejection', (error) => {
  logger.error(error);
  process.exit(1);
});
