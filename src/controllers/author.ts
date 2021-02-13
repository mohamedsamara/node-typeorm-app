import * as Hapi from '@hapi/hapi';
import * as Boom from '@hapi/boom';

import { getRepository } from 'typeorm';

import logger from '../plugins/logger';
import { Author } from '../entity/Author';
import { Book } from '../entity/Book';

class AuthorController {
  static async getAuthors(_: any, h: Hapi.ResponseToolkit) {
    try {
      const authorRepository = getRepository(Author);

      const authors = await authorRepository.find({ relations: ['books'] });

      if (authors.length > 0) {
        return h.response(authors).code(200);
      } else {
        return h.response('No authors Found.').code(404);
      }
    } catch (error) {
      logger.error(error);
      return Boom.badImplementation('failed to get authors');
    }
  }

  static async getAuthor(request: Hapi.Request, h: Hapi.ResponseToolkit) {
    try {
      const id = request.params.id;
      const authorRepository = getRepository(Author);

      const author = await authorRepository.findOne(id, {
        relations: ['books']
      });

      if (!author) {
        return h.response('No Author Found.').code(404);
      } else {
        return h.response(author).code(200);
      }
    } catch (error) {
      logger.error(error);
      return Boom.badImplementation('failed to get author');
    }
  }

  static async addAuthor(request: Hapi.Request, h: Hapi.ResponseToolkit) {
    try {
      const { name }: any = request.payload;

      const bookRepository = getRepository(Book);
      const bookOne = new Book();
      bookOne.title = 'test book';
      bookOne.description = 'test book description';
      bookOne.price = 200;

      const bookTwo = new Book();
      bookTwo.title = 'test book two';
      bookTwo.description = 'test book description two';
      bookTwo.price = 100;

      const savedBookOne = await bookRepository.save(bookOne);
      const savedBookTwo = await bookRepository.save(bookTwo);

      const authorRepository = getRepository(Author);
      const author = new Author();
      author.name = name;
      author.books = [savedBookOne, savedBookTwo];

      const savedAuthor = await authorRepository.save(author);

      return h.response(savedAuthor).code(201);
    } catch (error) {
      logger.error(error);
      return Boom.badImplementation('failed to add author');
    }
  }

  static async updateAuthor(request: Hapi.Request, h: Hapi.ResponseToolkit) {
    try {
      const id = request.params.id;
      const { name }: any = request.payload;

      const authorRepository = getRepository(Author);

      // eslint-disable-next-line prefer-const
      let authorToUpdate = await authorRepository.findOne(id);

      if (!authorToUpdate) {
        return h.response().code(404);
      }

      authorToUpdate.name = name;

      const updatedAuthor = await authorRepository.save(authorToUpdate);

      return h.response(updatedAuthor).code(201);
    } catch (error) {
      logger.error(error);
      return Boom.badImplementation('failed to update author');
    }
  }

  static async deleteAuthor(request: Hapi.Request, h: Hapi.ResponseToolkit) {
    try {
      const id = request.params.id;

      const authorRepository = getRepository(Author);

      const deletedAuthor = await authorRepository.delete(id);

      return h.response(deletedAuthor).code(200);
    } catch (error) {
      logger.error(error);
      return Boom.badImplementation('failed to delete author');
    }
  }
}

export default AuthorController;
