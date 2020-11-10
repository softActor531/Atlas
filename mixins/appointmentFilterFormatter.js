export default {
  methods: {
    appintmentFilterFormat (data) {
      let filter = {
        data: {
          type: 'appointment-categories',
          attributes: {
            ...data.attributes
          }
        }
      }

      const site = data.included.site || ''

      if (site) {
        const relationships = {
          relationships: {
            site: {
              data: [
                {
                  type: 'sites',
                  id: data.included.site
                }
              ]
            }
          },
          included: [
            {
              type: 'sites',
              id: data.included.site
            }
          ]
        }

        filter = {
          ...filter,
          ...relationships
        }
      }

      return filter
    }
  }
}
