import { ServerRoute } from '@hapi/hapi';

import AuthorController from '../controllers/author';
import authorValidator from '../validators/author';

export const getAuthors: ServerRoute = {
  method: 'GET',
  path: '/api/authors',
  handler: AuthorController.getAuthors,
  options: {
    description: 'Get Authors list',
    tags: ['api', 'authors']
  }
};

export const getAuthor: ServerRoute = {
  method: 'GET',
  path: '/api/authors/{id}',
  handler: AuthorController.getAuthor,
  options: {
    validate: authorValidator.getById,
    description: 'Get Author',
    tags: ['api', 'authors']
  }
};

export const addAuthor: ServerRoute = {
  method: 'POST',
  path: '/api/authors',
  handler: AuthorController.addAuthor,
  options: {
    validate: authorValidator.create,
    description: 'Add Author',
    tags: ['api', 'authors']
  }
};

export const updateAuthor: ServerRoute = {
  method: 'PUT',
  path: '/api/authors/{id}',
  handler: AuthorController.updateAuthor,
  options: {
    validate: authorValidator.updateById,
    description: 'Update Author',
    tags: ['api', 'authors']
  }
};

export const deleteAuthor: ServerRoute = {
  method: 'DELETE',
  path: '/api/authors/{id}',
  handler: AuthorController.deleteAuthor,
  options: {
    validate: authorValidator.deleteById,
    description: 'Delete Author',
    tags: ['api', 'authors']
  }
};
