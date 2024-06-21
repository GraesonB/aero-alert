import dotenv from "dotenv";
import { Surreal } from "surrealdb.js";
dotenv.config();

export class DBConnection {
  private db: Surreal = new Surreal();

  async init() {
    if (!process.env.DB_URL || !process.env.DB_USER || !process.env.DB_PASS) {
      throw new Error("Missing DB env vars");
    }

    await this.db.connect(process.env.DB_URL, {
      namespace: "aeroplan",
      database: "aeroplan",

      auth: {
        namespace: "aeroplan",
        database: "aeroplan",
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
      },
    });
  }

  async createDocument<T extends Aeroplan.DocumentType>(
    type: T,
    id: Aeroplan.DocumentMapping[T]["id"],
    document: Aeroplan.DocumentMapping[T]["document"]
  ) {
    try {
      const created = await this.db.create(type, { id, ...document });
      console.log(created);
    } catch (e) {
      console.error(e);
    }
  }
}
