import { DynamicModule, Module } from '@nestjs/common';
import { OrmPersistenceModule } from './persistence/orm/orm-persistence.module';
import { InMemoryPersistenceModule } from './persistence/in-memory/in-memory-persistence.module';

@Module({})
export class AlarmInfrastructureModule {
  static use(driver: 'orm' | 'in-memory'): DynamicModule {
    const persistenceModule =
      driver === 'orm' ? OrmPersistenceModule : InMemoryPersistenceModule;

    return {
      module: AlarmInfrastructureModule,
      imports: [persistenceModule],
      exports: [persistenceModule],
    };
  }
}
