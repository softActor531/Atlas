import { getId } from './id'

var faker = require('faker')

export default () => {
  return {
    data: {
      ...getId('phases'),
      attributes: {
        name: faker.lorem.word()
      }
    }
  }
}
