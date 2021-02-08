import { ServerRoute } from '@hapi/hapi';

import AuthorController from '../controllers/author';

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
    description: 'Get Author',
    tags: ['api', 'authors']
  }
};

export const addAuthor: ServerRoute = {
  method: 'POST',
  path: '/api/authors',
  handler: AuthorController.addAuthor,
  options: {
    description: 'Add Author',
    tags: ['api', 'authors']
  }
};
