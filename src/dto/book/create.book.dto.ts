import { BookType } from "../../enums/book-type.enum";

export interface CreateBookDto {
    bookName: string;

    authorName: string;

    description?: string;

    price: number;

    quantity: number;

    type: BookType;

    image?: string;
}