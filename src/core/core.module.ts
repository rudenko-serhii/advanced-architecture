import { Module } from '@nestjs/common';
import { AppBootstrapOptions } from '../common/interfaces/app-bootstrap-options';
import { TypeOrmModule } from '@nestjs/typeorm';

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
          ]
        : [];

    return {
      module: CoreModule,
      imports,
    };
  }
}
