import { getId } from './id'

var faker = require('faker')

export default () => {
  return {
    data: {
      ...getId('has-devices'),
      attributes: {
        name: faker.random.arrayElement(['Yes', 'No', 'Unknown'])
      }
    }
  }
}
