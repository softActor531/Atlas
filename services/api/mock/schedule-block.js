import { getId } from './id'

var faker = require('faker')

export default () => {
  return {
    data: {
      ...getId('schedule-blocks'),
      attributes: {
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
      }
    }
  }
}
