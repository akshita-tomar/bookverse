import { Book } from "../entities/book.entity";
import { CreateBookDto } from "../dto/book/create.book.dto";
import { UpdateBookDto } from "../dto/book/update.book.dto";

export interface IBookRepository {
    create(data: CreateBookDto): Promise<Book>;

    findAll(): Promise<Book[]>;

    findById(id: number): Promise<Book | null>;

    update(
        id: number,
        data: UpdateBookDto
    ): Promise<Book | null>;

    delete(id: number): Promise<boolean>;
}