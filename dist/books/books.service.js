"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksService = void 0;
const common_1 = require("@nestjs/common");
let BooksService = class BooksService {
    constructor() {
        this.books = [
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
    }
    findAll() {
        return this.books;
    }
};
exports.BooksService = BooksService;
exports.BooksService = BooksService = __decorate([
    (0, common_1.Injectable)()
], BooksService);
//# sourceMappingURL=books.service.js.map