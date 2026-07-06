import { Repository } from "typeorm";
import { AppDataSource } from "../config/database";
import { Book } from "../entities/book.entity";
import { CreateBookDto } from "../dto/book/create.book.dto";
import { UpdateBookDto } from "../dto/book/update.book.dto";
import { IBookRepository } from "../interfaces/book.interface";


class BookRepository implements IBookRepository {
    private get repository(): Repository<Book> {
        return AppDataSource.getRepository(Book);
    }

    public async create(
        data: CreateBookDto
    ): Promise<Book> {
        const book = this.repository.create({
            ...data,
            price: data.price.toString()
        });

        return this.repository.save(book);
    }

    public async findAll(): Promise<Book[]> {
        return this.repository.find();
    }

    public async findById(
        id: number
    ): Promise<Book | null> {
        return this.repository.findOne({
            where: {
                id
            }
        });
    }

    public async update(
        id: number,
        data: UpdateBookDto
    ): Promise<Book | null> {
        const book = await this.findById(id);

        if (!book) {
            return null;
        }

        const updatedBook = this.repository.merge(
            book,
            {
                ...data,
                price:
                    data.price !== undefined
                        ? data.price.toString()
                        : book.price
            }
        );

        return this.repository.save(updatedBook);
    }

    public async delete(
        id: number
    ): Promise<boolean> {
        const result = await this.repository.delete(id);

        return (result.affected ?? 0) > 0;
    }
}

export default new BookRepository();