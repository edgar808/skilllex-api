import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { Client } from 'pg';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DatabaseService implements OnModuleInit, OnModuleDestroy {
  private client: Client;

  constructor(private configService: ConfigService) {}

  async onModuleInit() {
    const dbConfig = {
      user: this.configService.get('DB_USER'),
      password: this.configService.get('DB_PASSWORD'),
      host: this.configService.get('DB_HOST'),
      port: Number(this.configService.get('DB_PORT')),
      database: this.configService.get('DB_NAME'),
    };

    this.client = new Client(dbConfig);

    await this.client.connect();
  }

  getClient(): Client {
    return this.client;
  }

  async query(query: string, params?: any[]) {
    return this.client.query(query, params);
  }

  async beginTransaction() {
    await this.client.query('BEGIN');
  }

  async commit() {
    await this.client.query('COMMIT');
  }

  async rollback() {
    await this.client.query('ROLLBACK');
  }

  async onModuleDestroy() {
    await this.client.end();
  }
}
