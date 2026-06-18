import { InjectRepository } from '@nestjs/typeorm';
import { AlarmEntity } from '../entities/alarm.entity';
import { Repository } from 'typeorm';
import { Alarm } from '../../../../domain/alarm';
import { AlarmMapper } from '../mappers/alarm.mappers';

export class OrmCreateAlarmRepository {
  constructor(
    @InjectRepository(AlarmEntity)
    private readonly alarmRepository: Repository<AlarmEntity>,
  ) {}

  async save(alarm: Alarm): Promise<Alarm> {
    const createdAlarmEntity = await this.alarmRepository.save(
      AlarmMapper.toPersistence(alarm),
    );

    return AlarmMapper.toDomain(createdAlarmEntity);
  }
}
