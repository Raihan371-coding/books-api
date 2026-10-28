import { Injectable } from '@nestjs/common';
import { Book } from './book.interface';

@Injectable()
export class BooksService {
  private readonly books: Book[] = [
    {
      id: 1,
      title: 'Laskar Pelangi',
      author: 'Andrea Hirata',
      publisher: 'Bentang Pustaka',
      year: 2005,
      price: 89000,
    },
    {
      id: 2,
      title: 'Bumi Manusia',
      author: 'Pramoedya Ananta Toer',
      publisher: 'Hasta Mitra',
      year: 1980,
      price: 110000,
    },
    {
      id: 3,
      title: 'Negeri 5 Menara',
      author: 'Ahmad Fuadi',
      publisher: 'Gramedia Pustaka Utama',
      year: 2009,
      price: 79000,
    },
  ];

  findAll(): Book[] {
    return this.books;
  }
}