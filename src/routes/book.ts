import { ServerRoute } from '@hapi/hapi';

export const getBooks: ServerRoute = {
  method: 'GET',
  path: '/books',
  handler: () => {
    return 'Books';
  },
  options: {
    description: 'Get books list',
    tags: ['api']
  }
};

export const getBook: ServerRoute = {
  method: 'GET',
  path: '/books/{id}',
  handler: (request) => {
    return `${request.params.id} book!`;
  },
  options: {
    description: 'Get book',
    tags: ['api']
  }
};
