import "reflect-metadata";
import { DataSource } from "typeorm";

import ENV from "./env";
import { MESSAGES } from "../constants/messages";
import { Book } from "../entities/book.entity";

export const AppDataSource = new DataSource({
  type: "postgres",

  host: ENV.DB_HOST,
  port: ENV.DB_PORT,

  username: ENV.DB_USERNAME,
  password: ENV.DB_PASSWORD,
  database: ENV.DB_NAME,

  synchronize: false,

  logging: ENV.NODE_ENV === "development",

  entities: [Book],
  migrations: [
    "src/migrations/*.ts"
  ],
});

export const initializeDatabase = async (): Promise<void> => {
  try {
    await AppDataSource.initialize();

    console.log(MESSAGES.database.connected);
  } catch (error) {
    console.error(MESSAGES.database.connectionFailed, error);

    throw error;
  }
};