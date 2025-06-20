import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CombinationsModule, ItemsModule, ResponsesModule } from './modules';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    CombinationsModule,
    ItemsModule,
    ResponsesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
