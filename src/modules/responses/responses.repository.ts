import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/shared/db/db.service';

@Injectable()
export class ResponsesRepository {
  constructor(private readonly db: DatabaseService) {}

  async create(): Promise<number> {
    const res = await this.db.query(
      'INSERT INTO responses DEFAULT VALUES RETURNING id',
    );
    return res.rows[0].id;
  }
}
