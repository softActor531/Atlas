import { getId } from './id'

var faker = require('faker')

export default () => {
  return {
    data: {
      ...getId('genders'),
      attributes: {
        name: faker.random.arrayElement(['Male', 'Female'])
      }
    }
  }
}
