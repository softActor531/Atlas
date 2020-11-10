import { getId } from './id'

var faker = require('faker')

export default () => {
  return {
    data: {
      ...getId('races'),
      attributes: {
        name: faker.random.arrayElement(['African American', 'Asian', 'Caucasian', 'Hispanic'])
      }
    }
  }
}
