import * as Hapi from '@hapi/hapi';
import * as Boom from '@hapi/boom';

import { getRepository } from 'typeorm';

import logger from '../plugins/logger';
import { Book } from '../entity/Book';
import { Author } from '../entity/Author';

class BookController {
  static async getBooks(_: any, h: Hapi.ResponseToolkit) {
    try {
      const bookRepository = getRepository(Book);

      const books = await bookRepository.find({ relations: ['authors'] });

      if (books.length > 0) {
        return h.response(books).code(200);
      } else {
        return h.response().code(404);
      }
    } catch (error) {
      logger.error(error);
      return Boom.badImplementation('failed to get books');
    }
  }

  static async getBook(request: Hapi.Request, h: Hapi.ResponseToolkit) {
    try {
      const id = request.params.id;

      const bookRepository = getRepository(Book);

      const book = await bookRepository.findOne(id, {
        relations: ['authors']
      });

      if (!book) {
        return h.response().code(404);
      } else {
        return h.response(book).code(200);
      }
    } catch (error) {
      logger.error(error);
      return Boom.badImplementation('failed to get book');
    }
  }

  static async addBook(request: Hapi.Request, h: Hapi.ResponseToolkit) {
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

      return h.response(savedBook).code(201);
    } catch (error) {
      logger.error(error);
      return Boom.badImplementation('failed to add book');
    }
  }
}

export default BookController;
