import * as Hapi from '@hapi/hapi';

import { getRepository } from 'typeorm';

import logger from '../plugins/logger';
import { Author } from '../entity/Author';
import { Book } from '../entity/Book';

class AuthorController {
  static async getAuthors(
    request: Hapi.Request,
    toolkit: Hapi.ResponseToolkit
  ) {
    try {
      const authorRepository = getRepository(Author);

      const authors = await authorRepository.find({ relations: ['books'] });

      return toolkit.response(authors);
    } catch (error) {
      return toolkit.response('not found');
    }
  }

  static async getAuthor(request: Hapi.Request, toolkit: Hapi.ResponseToolkit) {
    try {
      const id = request.params.id;
      const authorRepository = getRepository(Author);

      const author = await authorRepository.findOne(id, {
        relations: ['books']
      });

      return toolkit.response(author);
    } catch (error) {
      return toolkit.response('not found');
    }
  }

  static async addAuthor(request: Hapi.Request, toolkit: Hapi.ResponseToolkit) {
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

      return toolkit.response(savedAuthor);
    } catch (error) {
      logger.error(error);
      return toolkit.response('not found');
    }
  }
}

export default AuthorController;
