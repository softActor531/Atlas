import { getId } from './id'
import phaseFactory from './phase'
import statusFactory from './status'
import { extractId } from './helpers'

var faker = require('faker')

export default () => {
  const phase = phaseFactory()
  const status = statusFactory()

  return {
    data: {
      ...getId('contact-actions'),
      attributes: {
        priority: faker.random.arrayElement(['Low', 'Normal', 'High']),
        category: faker.lorem.word(),
        note: faker.lorem.paragraph()
      },
      relationships: {
        phase: {
          data: extractId(phase)
        },
        status: {
          data: extractId(status)
        }
      }
    },
    included: [
      phase.data,
      status.data
    ]
  }
}
