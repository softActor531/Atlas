import { getId } from './id'
import { extractId } from './helpers'
import schoolFactory from './school'

var faker = require('faker')

export default () => {
  const school1 = schoolFactory()
  const school2 = schoolFactory()
  const school3 = schoolFactory()

  return {
    data: {
      ...getId('academy-closures'),
      attributes: {
        type: faker.random.arrayElement(['Emergency', 'Holiday', 'Professional Development']),
        name: faker.lorem.word(),
        start_date: faker.date.recent(),
        end_date: faker.date.soon(),
        start_time: '14:00',
        end_time: '16:00',
        available_onsite: faker.random.boolean(),
        available_virtually: faker.random.boolean(),
        reason: faker.lorem.paragraph(),
        is_active: faker.random.boolean(),
      },
      relationships: {
        schools: {
          data: [extractId(school1), extractId(school2), extractId(school3)]
        }
      },
      included: [
        school1.data,
        school2.data,
        school3.data
      ]
    }
  }
}
