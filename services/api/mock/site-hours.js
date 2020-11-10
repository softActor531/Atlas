import { getId } from './id'
import { extractId } from './helpers'
import schoolFactory from './school'
import scheduleBlockFactory from './schedule-block'

var faker = require('faker')

export default () => {
  const school = schoolFactory()
  const hasScheduleBlocks = true;

  let scheduleBlocks = []
  if (hasScheduleBlocks) {
    scheduleBlocks.push(scheduleBlockFactory())
    scheduleBlocks.push(scheduleBlockFactory())
  }

  return {
    data: {
      ...getId('site-hours'),
      attributes: {
        has_schedule_blocks: hasScheduleBlocks,
        schedule: [
          {
            day: faker.random.arrayElement(['Mon', 'Tue', 'Wed', 'Thu', 'Fri']),
            from: '14:00',
            to: '16:00'
          },
          {
            day: faker.random.arrayElement(['Mon', 'Tue', 'Wed', 'Thu', 'Fri']),
            from: '14:00',
            to: '16:00'
          },
          {
            day: faker.random.arrayElement(['Mon', 'Tue', 'Wed', 'Thu', 'Fri']),
            from: '14:00',
            to: '16:00'
          }
        ],
      },
      relationships: {
        school: {
          data: extractId(school)
        },
        scheduleBlocks: {
          data: scheduleBlocks.map(scheduleBlock => extractId(scheduleBlock))
        }
      }
    },
    included: [
      school.data,
      ...scheduleBlocks.map(scheduleBlock => scheduleBlock.data)
    ]
  }
}
