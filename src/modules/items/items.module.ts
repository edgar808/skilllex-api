import { Module } from '@nestjs/common';
import { ItemsRepository } from './items.repository';
import { ItemsService } from './items.service';
import { DatabaseModule } from '../../shared/db/db.module';

@Module({
  imports: [DatabaseModule],
  providers: [ItemsRepository, ItemsService],
  controllers: [],
  exports: [ItemsService],
})
export class ItemsModule {}
