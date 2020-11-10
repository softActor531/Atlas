import { getId } from './id'

var faker = require('faker')

export default () => {
  return {
    data: {
      ...getId('cohort-years'),
      attributes: {
        name: faker.date.future().getFullYear().toString()
      }
    }
  }
}
