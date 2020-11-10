import { getId } from './id'

var faker = require('faker')

export default () => {
  return {
    data: {
      ...getId('legal-statuses'),
      attributes: {
        name: faker.random.arrayElement(['On Probation', 'Parent Incarcerated'])
      }
    }
  }
}
