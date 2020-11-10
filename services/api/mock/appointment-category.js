import { getId } from './id'
import { extractId } from './helpers'
import schoolFactory from './school'

var faker = require('faker')

export default () => {
  const school = schoolFactory();

  return {
    data: {
      ...getId('appointment-categories'),
      attributes: {
        name: faker.lorem.word(),
        student_self_select: faker.random.boolean(),
        status: faker.random.arrayElement(['active', 'inactive']),
        duration: faker.random.arrayElement([
          {
            type: 'in-minutes',
            payload: {
              minutes: 90
            }
          },
          {
            type: 'set-time',
            payload: {
              date: faker.date.future(),
              from: '13:00',
              to: '14:00'
            }
          },
          {
            type: 'recurring',
            payload: {
              day: 'mon',
              from: '13:00',
              to: '14:00'
            }
          }
        ])
      },
      relationships: {
        school: {
          data: extractId(school)
        }
      }
    },
    included: [
      school.data
    ]
  }
}
