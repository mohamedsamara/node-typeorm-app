import { ServerRoute } from '@hapi/hapi';
import AuthorController from '../controllers/author';

export const getAuthors: ServerRoute = {
  method: 'GET',
  path: '/authors',
  handler: AuthorController.getAuthors,
  options: {
    description: 'Get Authors list',
    tags: ['api']
  }
};

export const getAuthor: ServerRoute = {
  method: 'GET',
  path: '/authors/{id}',
  handler: AuthorController.getAuthor,
  options: {
    description: 'Get Author',
    tags: ['api']
  }
};

export const addAuthor: ServerRoute = {
  method: 'POST',
  path: '/authors',
  handler: AuthorController.addAuthor,
  options: {
    description: 'Add Author',
    tags: ['api']
  }
};
