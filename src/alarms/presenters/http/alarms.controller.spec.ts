import { Test, TestingModule } from '@nestjs/testing';
import { AlarmsController } from './alarms.controller';
import { AlarmsService } from '../../application/alarms.service';
import { beforeEach, describe, it, expect } from '@jest/globals';

describe('AlarmsController', () => {
  let controller: AlarmsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlarmsController],
      providers: [AlarmsService],
    }).compile();

    controller = module.get<AlarmsController>(AlarmsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
