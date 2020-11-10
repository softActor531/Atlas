import { getId } from './id'
import { extractId } from './helpers'
import referralOptionGroupFactory from './referral-option-group'

var faker = require('faker')

export default () => {
  const referralOptionGroup = referralOptionGroupFactory()

  return {
    data: {
      ...getId('referral-options'),
      attributes: {
        name: faker.lorem.word(),
        active: faker.random.boolean(),
      },
      relationships: {
        group: {
          data: extractId(referralOptionGroup)
        }
      }
    },
    included: [
      referralOptionGroup.data
    ]
  }
}
