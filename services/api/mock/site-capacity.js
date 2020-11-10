import { getId } from './id'
import { extractId } from './helpers'
import schoolFactory from './school'
import districtFactory from './district'

var faker = require('faker')

export default () => {
  const school = schoolFactory()
  const district = districtFactory()

  return {
    data: {
      ...getId('site-capacities'),
      attributes: {
        people_per_site: faker.random.number(),
        student_appointment_limit_per_week: faker.random.number(),
        no_capacity_restriction: faker.random.boolean()
      },
      relationships: {
        school: {
          data: extractId(school)
        },
        district: {
          data: extractId(district)
        }
      }
    },
    included: [
      school.data,
      district.data
    ]
  }
}
