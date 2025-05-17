import { InferInsertModel, InferSelectModel, Table } from 'drizzle-orm';
import { NodePgDatabase } from "drizzle-orm/node-postgres";

export class Service<TTable extends Table> {
    private db:NodePgDatabase;
    private model: TTable;

    constructor(db: NodePgDatabase, model: TTable) {
        this.db = db;
        this.model = model;
    }

    async insert(entity: InferInsertModel<TTable>): Promise<InferSelectModel<TTable>[]> {
        return await this.db.insert(this.model).values(entity).returning() as InferSelectModel<TTable>[];
    }
}