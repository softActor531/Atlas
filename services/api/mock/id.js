const faker = require('faker')

export const getId = (type) => {
  return {
    type,
    id: faker.random.uuid()
  }
}
