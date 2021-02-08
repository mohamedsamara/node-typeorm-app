import * as Hapi from '@hapi/hapi';

import { getRepository } from 'typeorm';

import logger from '../plugins/logger';
import { Book } from '../entity/Book';
import { Author } from '../entity/Author';

class BookController {
  static async getBooks(request: Hapi.Request, toolkit: Hapi.ResponseToolkit) {
    try {
      const bookRepository = getRepository(Book);

      const books = await bookRepository.find({ relations: ['authors'] });

      return toolkit.response(books);
    } catch (error) {
      return toolkit.response('not found');
    }
  }

  static async getBook(request: Hapi.Request, toolkit: Hapi.ResponseToolkit) {
    try {
      const id = request.params.id;

      const bookRepository = getRepository(Book);

      const books = await bookRepository.findOne(id, {
        relations: ['authors']
      });

      return toolkit.response(books);
    } catch (error) {
      return toolkit.response('not found');
    }
  }

  static async addBook(request: Hapi.Request, toolkit: Hapi.ResponseToolkit) {
    try {
      const { title, description, price }: any = request.payload;

      const authorRepository = getRepository(Author);
      const authorOne = new Author();
      authorOne.name = 'Mo';
      const savedAuthorOne = await authorRepository.save(authorOne);

      const authorTwo = new Author();
      authorTwo.name = 'Mo';
      const savedAuthorTwo = await authorRepository.save(authorTwo);

      const bookRepository = getRepository(Book);
      const book = new Book();
      book.title = title;
      book.description = description;
      book.price = price;
      book.authors = [savedAuthorOne, savedAuthorTwo];

      const savedBook = await bookRepository.save(book);

      return toolkit.response(savedBook);
    } catch (error) {
      logger.error(error);
      return toolkit.response('not found');
    }
  }
}

export default BookController;
