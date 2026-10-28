import { BooksService } from './books.service';
import { Book } from './book.interface';
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    findAll(): Book[];
}
