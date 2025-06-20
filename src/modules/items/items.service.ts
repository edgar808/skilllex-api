import { Injectable } from '@nestjs/common';
import { ItemsRepository } from 'src/modules/items/items.repository';

@Injectable()
export class ItemsService {
  constructor(private readonly itemsRepository: ItemsRepository) {}

  async getItemsByTypes(types: number[]): Promise<string[]> {
    const itemMap = await this.itemsRepository.getItemsMap();

    const allItems: string[] = [];
    for (const type of types) {
      allItems.push(...(itemMap[type] || []));
    }
console.log(allItems)
    return allItems;
  }
}
