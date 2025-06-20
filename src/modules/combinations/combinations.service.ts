import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/shared/db/db.service';
import { CombinationsRepository } from 'src/modules/combinations/combinations.repository';
import { ItemsService } from '../items/items.service';
import { ResponsesService } from '../responses/responses.service';
import {
  CombinationDataType,
  GenerateType,
} from 'src/shared/types/combinations/generate.type';

@Injectable()
export class CombinationsService {
  constructor(
    private readonly db: DatabaseService,
    private readonly itemsService: ItemsService,
    private readonly responsesService: ResponsesService,
    private readonly combinationsRepository: CombinationsRepository,
  ) {}

  private getCombinations(data: CombinationDataType): string[][] {
    const { items, length } = data;

    const result: string[][] = [];

    const sorter = (start: number, path: string[]) => {
      if (path.length === length) {
        const prefixes = new Set(path.map((item) => item[0]));
        if (prefixes.size === path.length) {
          result.push([...path]);
        }
        return;
      }

      for (let i = start; i < items.length; i++) {
        path.push(items[i]);
        sorter(i + 1, path);
        path.pop();
      }
    };

    sorter(0, []);
    return result;
  }

  async generate(data: GenerateType) {
    const allItems = await this.itemsService.getItemsByTypes(data.items);

    const combos = this.getCombinations({
      items: allItems,
      length: data.length,
    });

    await this.db.beginTransaction();
    try {
      const responseId = await this.responsesService.create();

      for (const combo of combos) {
        await this.combinationsRepository.insert({ responseId, combo });
      }

      await this.db.commit();

      return {
        id: responseId,
        combination: combos,
      };
    } catch (err) {
      await this.db.rollback();
      throw err;
    }
  }
}
