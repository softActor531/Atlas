import { getId } from './id'

var faker = require('faker')

export default () => {
  return {
    data: {
      ...getId('statuses'),
      attributes: {
        name: faker.lorem.word()
      }
    }
  }
}
