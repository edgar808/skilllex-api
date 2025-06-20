import { Module } from '@nestjs/common';
import { ItemsModule } from '../items';
import { ResponsesModule } from '../responses';
import { CombinationsService } from './combinations.service';
import { CombinationsController } from './combinations.controller';
import { CombinationsRepository } from './combinations.repository';

import { DatabaseModule } from 'src/shared/db/db.module';

@Module({
  imports: [ItemsModule, ResponsesModule, DatabaseModule],
  providers: [CombinationsService, CombinationsRepository],
  controllers: [CombinationsController],
})
export class CombinationsModule {}
