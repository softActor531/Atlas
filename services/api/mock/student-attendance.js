var faker = require('faker')

export default () => {
  return {
    data: {
      type: 'student-attendance',
      id: faker.random.uuid(),
      attributes: {
        check_in: faker.date.recent(),
        check_out: faker.date.recent(),
        notes: faker.lorem.paragraph(),
        absence: faker.random.boolean(),
        next_date_committed: faker.date.future()
      }
    }
  }
}
