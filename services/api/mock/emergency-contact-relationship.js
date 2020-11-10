import { getId } from './id'

var faker = require('faker')

export default () => {
  return {
    data: {
      ...getId('emergency-contact-relationships'),
      attributes: {
        name: faker.random.arrayElement(["Parent", 'Legal Guardian', 'Sibling'])
      }
    }
  }
}
