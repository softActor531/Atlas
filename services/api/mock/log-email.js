import { getId } from './id'
import studentFactory from './student'
import userFactory from './user'
import { extractId } from './helpers'

var faker = require('faker')

export default () => {
  const student = studentFactory()
  const user = userFactory()

  return {
    data: {
      ...getId('log-emails'),
      attributes: {
        initiator: faker.lorem.words(),
        to: faker.internet.email(),
        from: faker.internet.email(),
        subject: faker.lorem.words(),
        message: faker.lorem.paragraph(),
        created_at: faker.date.recent()
      },
      relationships: {
        user: {
          data: extractId(user)
        },
        student: {
          data: extractId(student)
        }
      }
    },
    included: [
      user.data,
      student.data
    ]
  }
}
