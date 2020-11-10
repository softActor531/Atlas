import { getId } from './id'
import statusFactory from './status'
import roleFactory from './role'
import districtFactory from './district'
import { extractId } from './helpers'

var faker = require('faker')

export default () => {
  const status = statusFactory();
  const role = roleFactory();
  const district1 = districtFactory();
  const district2 = districtFactory();
  const district3 = districtFactory();

  return {
    data: {
      ...getId('users'),
      attributes: {
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        email: faker.internet.email(),
        title: faker.name.prefix()
      },
      relationship: {
        status: {
          data: extractId(status)
        },
        role: {
          data: extractId(role)
        },
        districts: {
          data: [
            extractId(district1),
            extractId(district2),
            extractId(district3)
          ]
        },
      },
      included: [
        status.data,
        role.data,
        district1.data,
        district2.data,
        district3.data
      ]
    }
  }
}
