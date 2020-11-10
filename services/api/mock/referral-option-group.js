import { getId } from './id'

var faker = require('faker')

export default () => {
  return {
    data: {
      ...getId('referral-option-group'),
      attributes: {
        name: faker.lorem.word(),
      },
    },
  }
}
