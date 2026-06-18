import { Module } from '@nestjs/common';
import { AppBootstrapOptions } from '../common/interfaces/app-bootstrap-options';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';

@Module({})
export class CoreModule {
  static forRoot(options: AppBootstrapOptions) {
    const imports =
      options.driver === 'orm'
        ? [
            // hardcode connection options for simplicity
            TypeOrmModule.forRoot({
              type: 'postgres',
              host: 'localhost',
              port: 5432,
              password: 'pass123',
              username: 'postgres',
              autoLoadEntities: true,
              synchronize: true,
            }),
            MongooseModule.forRoot('mongodb://localhost:27017/vf-read-db'),
          ]
        : [];

    return {
      module: CoreModule,
      imports,
    };
  }
}
