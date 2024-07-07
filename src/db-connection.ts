import dotenv from "dotenv";
import { RecordId, Surreal } from "surrealdb.js";
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
    });

    await this.db.signin({
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
    });
  }

  async close() {
    await this.db.close();
  }

  async createDocument<T extends Aeroplan.DocumentType>(
    type: T,
    document: Aeroplan.DocumentMapping[T]["document"]
  ): Promise<{ [x: string]: unknown; id: RecordId<string> }[]>;
  async createDocument<T extends Aeroplan.DocumentType>(
    type: T,
    document: Aeroplan.DocumentMapping[T]["document"],
    id: Aeroplan.DocumentMapping[T]["id"]
  ): Promise<{ [x: string]: unknown; id: RecordId<string> }[]>;

  async createDocument<T extends Aeroplan.DocumentType>(
    type: T,
    document: Aeroplan.DocumentMapping[T]["document"],
    id?: Aeroplan.DocumentMapping[T]["id"]
  ): Promise<{ [x: string]: unknown; id: RecordId<string> }[]> {
    if (id) document = { id, ...document };

    const created = await this.db.create(type, document);
    return created;
  }
}
