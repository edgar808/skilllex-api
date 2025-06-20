import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/shared/db/db.service';
import { CreateCombinationType } from 'src/shared/types/combinations/repo.type';

@Injectable()
export class CombinationsRepository {
  constructor(private readonly db: DatabaseService) {}

  async insert(data: CreateCombinationType) {
    const { responseId, combo } = data;

    await this.db.query(
      'INSERT INTO combinations (response_id, combo) VALUES ($1, $2)',
      [responseId, JSON.stringify(combo)],
    );
  }
}
