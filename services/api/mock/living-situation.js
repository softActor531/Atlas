import { getId } from './id'

var faker = require('faker')

export default () => {
  return {
    data: {
      ...getId('living-situations'),
      attributes: {
        name: faker.random.arrayElement(['Living with Parent/Legal Guardian', 'Living Independently'])
      }
    }
  }
}
