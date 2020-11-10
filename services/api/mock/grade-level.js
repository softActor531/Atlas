import { getId } from './id'

var faker = require('faker')

export default () => {
  return {
    data: {
      ...getId('grade-levels'),
      attributes: {
        name: faker.lorem.word()
      }
    }
  }
}
