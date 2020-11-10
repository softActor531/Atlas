import { getId } from './id'

var faker = require('faker')

export default () => {
  return {
    data: {
      ...getId('phone-types'),
      attributes: {
        name: faker.random.arrayElement(['Mobile', 'Home', 'Work'])
      }
    }
  }
}
