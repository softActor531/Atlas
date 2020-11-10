import { extractId } from './helpers'
import gradeLevelFactory from './grade-level'
import cohortYearFactory from './cohort-year'
import phaseFactory from './phase'
import statusFactory from './status'
import userFactory from './user'

var faker = require('faker')

export default () => {
  const gradeLevel = gradeLevelFactory()
  const cohortYear = cohortYearFactory()
  const phase = phaseFactory()
  const status = statusFactory()
  const outreachResourceAdvocate = userFactory()
  const communityOutreachAdvocate = userFactory()

  return {
    data: {
      type: 'contacts',
      id: faker.random.uuid(),
      attributes: {
        first_name: faker.name.firstName(),
        middle_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        birthdate: faker.date.past(),
        street_address_1: faker.address.streetAddress(),
        street_address_2: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zip_code: faker.address.zipCode(),
        county: faker.address.county(),
        phone_number_1: faker.phone.phoneNumber(),
        phone_number_2: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        past_school: faker.company.companyName(),
        withdrawal_code: faker.finance.account(),
        withdrawal_date: faker.date.recent(),
        priority: faker.random.arrayElement(['low', 'medium', 'high']),
        notes: faker.lorem.paragraph()
      },
      relationships: {
        grade_level: {
          data: extractId(gradeLevel)
        },
        cohort_year: {
          data: extractId(cohortYear)
        },
        phase: {
          data: extractId(phase)
        },
        status: {
          data: extractId(status)
        },
        outreach_resource_advocate: {
          data: extractId(outreachResourceAdvocate)
        },
        community_outreach_advocate: {
          data: extractId(communityOutreachAdvocate)
        }
      }
    },
    included: [
      gradeLevel.data,
      cohortYear.data,
      phase.data,
      status.data,
      outreachResourceAdvocate.data,
      communityOutreachAdvocate.data
    ]
  }
}
