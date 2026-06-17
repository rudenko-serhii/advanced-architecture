import { InjectRepository } from '@nestjs/typeorm';
import { AlarmEntity } from '../entities/alarm.entity';
import { Repository } from 'typeorm';
import { Alarm } from '../../../../domain/alarm';
import { AlarmMapper } from '../mappers/alarm.mappers';

export class OrmAlarmRepository {
  constructor(
    @InjectRepository(AlarmEntity)
    private readonly alarmRepository: Repository<AlarmEntity>,
  ) {}

  async findAll(): Promise<Alarm[]> {
    const alarmEntities = await this.alarmRepository.find();
    return alarmEntities.map(AlarmMapper.toDomain);
  }

  async save(alarm: Alarm): Promise<Alarm> {
    const createdAlarmEntity = await this.alarmRepository.save(
      AlarmMapper.toPersistence(alarm),
    );

    return AlarmMapper.toDomain(createdAlarmEntity);
  }
}
