import { Injectable } from '@nestjs/common';
import { ResponsesRepository } from './responses.repository';

@Injectable()
export class ResponsesService {
  constructor(private readonly responsesRepository: ResponsesRepository) {}

  async create(): Promise<number> {
    return await this.responsesRepository.create();
  }
}
