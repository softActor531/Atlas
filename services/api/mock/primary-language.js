import { getId } from './id'

var faker = require('faker')

export default () => {
  return {
    data: {
      ...getId('primary-languages'),
      attributes: {
        name: faker.random.arrayElement(['English', 'Spanish', 'Creole'])
      }
    }
  }
}
