import { getId } from './id'

var faker = require('faker')

export default () => {
  return {
    data: {
      ...getId('marital-statuses'),
      attributes: {
        name: faker.random.arrayElement(['Married', 'Single'])
      }
    }
  }
}
