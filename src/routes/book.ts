import { ServerRoute } from '@hapi/hapi';

import BookController from '../controllers/book';
import bookValidator from '../validators/book';

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
    validate: bookValidator.getById,
    description: 'Get book',
    tags: ['api', 'books']
  }
};

export const addBook: ServerRoute = {
  method: 'POST',
  path: '/api/books',
  handler: BookController.addBook,
  options: {
    validate: bookValidator.create,
    description: 'Add book',
    tags: ['api', 'books']
  }
};
