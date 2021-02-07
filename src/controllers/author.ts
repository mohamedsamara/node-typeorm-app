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

      const author = await authorRepository.findOne(id);

      return toolkit.response(author);
    } catch (error) {
      return toolkit.response('not found');
    }
  }

  static async addAuthor(request: Hapi.Request, toolkit: Hapi.ResponseToolkit) {
    try {
      const { name }: any = request.payload;

      const bookRepository = getRepository(Book);

      const book = new Book();
      book.title = 'test book';
      book.description = 'test book description';
      book.price = 200;

      const savedBook = await bookRepository.save(book);

      const authorRepository = getRepository(Author);

      const author = new Author();
      author.name = name;
      author.books = [savedBook];

      const savedAuthor = await authorRepository.save(author);

      return toolkit.response(savedAuthor);
    } catch (error) {
      logger.error(error);
      return toolkit.response('not found');
    }
  }
}

export default AuthorController;
