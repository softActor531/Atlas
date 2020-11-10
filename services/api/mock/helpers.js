export const extractId = (resource) => {
  return {
    type: resource.data.type,
    id: resource.data.id
  }
}

export const asCollection = (resources) => {
  let included = []

  const data = resources.map(resource => {
    if (resource.included === undefined) {
      resource.included = []
    }

    included = [...included, ...resource.included]

    return {
      ...extractId(resource),
      attributes: resource.data.attributes,
      relationships: resource.data.relationships
    }
  })

  return {
    data,
    included
  }
}

export const getRandomRange = (max = 10) => {
  let upto = Math.floor(Math.random() * Math.floor(max))

  let range = []
  for (let i = 0; i < upto; i++) {
    range.push(i)
  }

  return range
}
