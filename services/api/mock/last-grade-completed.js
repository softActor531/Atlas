import { getId } from './id'

var faker = require('faker')

export default () => {
  return {
    data: {
      ...getId('last-grades-completed'),
      attributes: {
        name: faker.random.arrayElement(['12th', '11th', '10th'])
      }
    }
  }
}
