import { getId } from './id'

var faker = require('faker')

export default () => {
  return {
    data: {
      ...getId('hear-about-us'),
      attributes: {
        name: faker.random.arrayElement(["Door Hanger", "TV"])
      }
    }
  }
}
