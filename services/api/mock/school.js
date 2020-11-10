import { getId } from './id'

var faker = require('faker')

export default () => {
  return {
    data: {
      ...getId('schools'),
      attributes: {
        name: faker.company.companyName(),
        barcode_type: faker.random.arrayElement(['Barcode Type 1', 'Barcode Type 2'])
      }
    }
  }
}
