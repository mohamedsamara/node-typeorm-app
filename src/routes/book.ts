import { ServerRoute } from '@hapi/hapi';

import BookController from '../controllers/book';

export const getBooks: ServerRoute = {
  method: 'GET',
  path: '/api/books',
  handler: BookController.getBooks,
  options: {
    description: 'Get books list',
    tags: ['api', 'books']
  }
};

export const getBook: ServerRoute = {
  method: 'GET',
  path: '/api/books/{id}',
  handler: BookController.getBook,
  options: {
    description: 'Get book',
    tags: ['api', 'books']
  }
};

export const addBook: ServerRoute = {
  method: 'POST',
  path: '/api/books',
  handler: BookController.addBook,
  options: {
    description: 'Add book',
    tags: ['api', 'books']
  }
};
