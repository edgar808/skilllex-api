import { Module } from '@nestjs/common';
import { ResponsesRepository } from './responses.repository';
import { ResponsesService } from './responses.service';
import { DatabaseModule } from '../../shared/db/db.module';

@Module({
  imports: [DatabaseModule],
  providers: [ResponsesRepository, ResponsesService],
  controllers: [],
  exports: [ResponsesService],
})
export class ResponsesModule {}
