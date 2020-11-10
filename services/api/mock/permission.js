import { getId } from './id'

var faker = require('faker')

export default () => {
  return {
    data: {
      ...getId('permissions'),
      attributes: {
        name: faker.lorem.words(),
        group: faker.lorem.word()
      }
    }
  }
}
