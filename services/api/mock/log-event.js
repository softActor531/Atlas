import { getId } from './id'
import studentFactory from './student'
import schoolFactory from './school'
import { extractId } from './helpers'

var faker = require('faker')

export default () => {
  const student = studentFactory()
  const school = schoolFactory()

  return {
    data: {
      ...getId('log-events'),
      attributes: {
        type: faker.random.arrayElement(['check_in', 'profile_update']),
        created_at: faker.date.recent()
      },
      relationships: {
        student: {
          data: extractId(student)
        },
        school: {
          data: extractId(school)
        }
      }
    },
    included: [
      student.data,
      school.data
    ]
  }
}
