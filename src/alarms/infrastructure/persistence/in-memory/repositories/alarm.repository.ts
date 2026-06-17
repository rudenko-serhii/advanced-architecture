import { AlarmEntity } from '../entities/alarm.entity';
import { Alarm } from '../../../../domain/alarm';
import { AlarmMapper } from '../mappers/alarm.mappers';

export class InMemoryAlarmRepository {
  private storage = new Map<string, AlarmEntity>();

  async findAll(): Promise<Alarm[]> {
    const alarmEntities = Array.from(this.storage.values());
    return alarmEntities.map(AlarmMapper.toDomain);
  }

  async save(alarm: Alarm): Promise<Alarm> {
    const persistence = AlarmMapper.toPersistence(alarm);

    this.storage.set(persistence.id, persistence);

    return AlarmMapper.toDomain(this.storage.get(persistence.id));
  }
}
