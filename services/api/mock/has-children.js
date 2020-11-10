import { getId } from './id'

var faker = require('faker')

export default () => {
  return {
    data: {
      ...getId('has-children'),
      attributes: {
        name: faker.random.arrayElement(['Parent', 'Expecting Parent', 'None'])
      }
    }
  }
}
