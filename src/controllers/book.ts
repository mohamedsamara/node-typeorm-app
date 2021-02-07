import * as Hapi from '@hapi/hapi';

import { getRepository } from 'typeorm';

import logger from '../plugins/logger';
import { Book } from '../entity/Book';

class BookController {
  static async getBooks(request: Hapi.Request, toolkit: Hapi.ResponseToolkit) {
    try {
      const bookRepository = getRepository(Book);

      const books = await bookRepository.find();

      return toolkit.response(books);
    } catch (error) {
      return toolkit.response('not found');
    }
  }

  static async getBook(request: Hapi.Request, toolkit: Hapi.ResponseToolkit) {
    try {
      const id = request.params.id;

      const bookRepository = getRepository(Book);

      const books = await bookRepository.findOne(id);

      return toolkit.response(books);
    } catch (error) {
      return toolkit.response('not found');
    }
  }

  static async addBook(request: Hapi.Request, toolkit: Hapi.ResponseToolkit) {
    try {
      const { title, description, price }: any = request.payload;

      const bookRepository = getRepository(Book);

      const book = new Book();
      book.title = title;
      book.description = description;
      book.price = price;

      const savedBook = await bookRepository.save(book);

      return toolkit.response(savedBook);
    } catch (error) {
      logger.error(error);
      return toolkit.response('not found');
    }
  }
}

export default BookController;
