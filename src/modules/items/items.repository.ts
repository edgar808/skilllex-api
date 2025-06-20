import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/shared/db/db.service';

@Injectable()
export class ItemsRepository {
  constructor(private readonly db: DatabaseService) {}

  async getItemsMap(): Promise<Record<number, string[]>> {
    const result = await this.db.query('SELECT type_id, name FROM items');
    const itemMap: Record<number, string[]> = {};

    for (const row of result.rows) {
      if (!itemMap[row.type_id]) {
        itemMap[row.type_id] = [];
      }
      itemMap[row.type_id].push(row.name);
    }

    return itemMap;
  }
}
