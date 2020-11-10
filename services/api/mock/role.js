import { getId } from './id'
import { extractId } from './helpers'
import { getRandomRange } from './helpers'
import permissionFactory from './permission'

var faker = require('faker')

export default () => {
  let permissionList = [];
  getRandomRange().map(() => {
    permissionList.push(permissionFactory());
  })

  return {
    data: {
      ...getId('roles'),
      attributes: {
        name: faker.lorem.word()
      },
      relationships: {
        permissions: {
          data: permissionList.map(permission => extractId(permission))
        }
      }
    },
    included: [
      ...permissionList.map(permission => permission.data)
    ]
  }
}
