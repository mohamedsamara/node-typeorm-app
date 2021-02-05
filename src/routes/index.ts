import { ServerRoute } from '@hapi/hapi';
import * as book from './book';

export const api: ServerRoute = {
  method: 'GET',
  path: '/',
  handler: () => {
    return 'Hello';
  },
  options: {
    description: 'Test api',
    tags: ['api']
  }
};

export const error: ServerRoute = {
  method: '*',
  path: '/{any*}',
  handler: () => {
    return '404 Error! Page Not Found!';
  }
};

export const routes: ServerRoute[] = [api, error, book.getBooks, book.getBook];
