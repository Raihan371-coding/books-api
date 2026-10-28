import { Controller, Get } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './book.interface';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  findAll(): Book[] {
    return this.booksService.findAll();
  }
}