import { Body, Controller, Post } from '@nestjs/common';
import { CombinationsService } from './combinations.service';
import { GenerateDto } from 'src/dto/combinations/generate.dto';

@Controller('combinations')
export class CombinationsController {
  constructor(private readonly service: CombinationsService) {}

  @Post('/generate')
  async generate(@Body() body: GenerateDto) {
    return await this.service.generate(body);
  }
}
