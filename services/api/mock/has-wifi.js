import { getId } from './id'

var faker = require('faker')

export default () => {
  return {
    data: {
      ...getId('has-wifis'),
      attributes: {
        name: faker.random.arrayElement(['Yes', 'No', 'Unknown'])
      }
    }
  }
}
