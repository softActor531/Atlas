import { getId } from './id'

var faker = require('faker')

export default () => {
  return {
    data: {
      ...getId('last-years-completed'),
      attributes: {
        name: faker.random.arrayElement(['2019', '2018', '2017'])
      }
    }
  }
}
