import { getId } from './id'
import { extractId } from './helpers'

var faker = require('faker')

const factory = (type) => {
  return {
    data: {
      ...getId('note-categories'),
      attributes: {
        type,
        name: faker.lorem.words(),
        active: faker.random.boolean()
      }
    }
  }
}

export default () => {
  let category = factory(faker.random.arrayElement(['category', 'sub_category', 'descriptor', 'actions']))
  let mainCategory = factory('category')
  let subCategory = factory('sub_category')

  category.data.relationships = {
    main_category: {
      data: extractId(mainCategory)
    },
    sub_category: {
      data: extractId(subCategory)
    }
  }

  category.included = [mainCategory.data, subCategory.data]

  return category
}
