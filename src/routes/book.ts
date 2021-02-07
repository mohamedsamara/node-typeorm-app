import { ServerRoute } from '@hapi/hapi';

import BookController from '../controllers/book';

export const getBooks: ServerRoute = {
  method: 'GET',
  path: '/books',
  handler: BookController.getBooks,
  options: {
    description: 'Get books list',
    tags: ['api']
  }
};

export const getBook: ServerRoute = {
  method: 'GET',
  path: '/books/{id}',
  handler: BookController.getBook,
  options: {
    description: 'Get book',
    tags: ['api']
  }
};

export const addBook: ServerRoute = {
  method: 'POST',
  path: '/books',
  handler: BookController.addBook,
  options: {
    description: 'Add book',
    tags: ['api']
  }
};
