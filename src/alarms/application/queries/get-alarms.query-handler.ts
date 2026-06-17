import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Alarm } from '../../domain/alarm';
import { GetAlarmsQuery } from './get-alarms.query';
import { AlarmRepository } from '../ports/alarm.repository';

@QueryHandler(GetAlarmsQuery)
export class GetAlarmsQueryHandler implements IQueryHandler<
  GetAlarmsQuery,
  Alarm[]
> {
  constructor(private readonly alarmRepository: AlarmRepository) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async execute(_query: GetAlarmsQuery): Promise<Alarm[]> {
    return this.alarmRepository.findAll();
  }
}
