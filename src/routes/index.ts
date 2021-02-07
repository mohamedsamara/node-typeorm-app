import { ServerRoute } from '@hapi/hapi';

import * as book from './book';
import * as author from './author';

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

export const favicon: ServerRoute = {
  method: 'GET',
  path: '/favicon.ico',
  handler: (request, reply) => {
    return reply.file('public/favicon.ico');
  }
};

export const error: ServerRoute = {
  method: '*',
  path: '/{any*}',
  handler: () => {
    return '404!';
  }
};

export const routes: ServerRoute[] = [
  api,
  favicon,
  error,
  book.getBooks,
  book.getBook,
  book.addBook,
  author.getAuthors,
  author.getAuthor,
  author.addAuthor
];
