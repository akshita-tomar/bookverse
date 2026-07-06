import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";

import { BookType } from "../enums/book-type.enum";

@Entity({ name: "books" })
export class Book {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        name: "book_name",
        type: "varchar",
        length: 255
    })
    bookName!: string;

    @Column({
        name: "author_name",
        type: "varchar",
        length: 255
    })
    authorName!: string;

    @Column({
        type: "text",
        nullable: true
    })
    description!: string | null;

    @Column({
        type: "decimal",
        precision: 10,
        scale: 2
    })
    price!: string;

    @Column({
        type: "int",
        default: 0
    })
    quantity!: number;

    @Column({
        type: "enum",
        enum: BookType
    })
    type!: BookType;

    @Column({
        type: "varchar",
        length: 500,
        nullable: true
    })
    image!: string | null;

    @CreateDateColumn({
        name: "created_at"
    })
    createdAt!: Date;

    @UpdateDateColumn({
        name: "updated_at"
    })
    updatedAt!: Date;
}