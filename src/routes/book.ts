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

export const updateBook: ServerRoute = {
  method: 'PUT',
  path: '/api/books/{id}',
  handler: BookController.updateBook,
  options: {
    validate: bookValidator.updateById,
    description: 'Update Book',
    tags: ['api', 'books']
  }
};

export const deleteBook: ServerRoute = {
  method: 'DELETE',
  path: '/api/books/{id}',
  handler: BookController.deleteBook,
  options: {
    validate: bookValidator.deleteById,
    description: 'Delete book',
    tags: ['api', 'books']
  }
};
