export default {
  methods: {
    academyFilterFormat(data) {
      let filter = {
        type: "academy_closure",
        id: "97c76e4a-502a-4b67-92ae-ac5e27c6e26c",
        attributes: {
          ...data.attributes
        }
      };

      let included = data.included;

      if (Object.keys(included).length > 0) {
        let relationships = {
          relationships: {
            site: {
              data: [
                {
                  type: "academy_closure_site",
                  id: "97c76e4a-502a-4b67-92ae-ac5e27c6e26c"
                }
              ]
            },
            district: {
              data: [
                {
                  type: "academy_closure_district",
                  id: "97c76e4a-502a-4b67-92ae-ac5e27c6e26c"
                }
              ]
            }
          },
          included: [
            {
              type: "academy_closure_site",
              id: "97c76e4a-502a-4b67-92ae-ac5e27c6e26c",
              attributes: {
                name: data.included.site
              }
            },
            {
              type: "academy_closure_district",
              id: "97c76e4a-502a-4b67-92ae-ac5e27c6e26c",
              attributes: {
                name: data.included.district
              }
            }
          ]
        };

        data = {
          ...filter,
          ...relationships
        };
      }

      return {
        data
      };
    }
  }
};
