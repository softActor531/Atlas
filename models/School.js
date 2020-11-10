export default class School {
    constructor(name) {
        this.name = name;
    }

    toJson = () => {
        const school = {
            data: {
                type: "school",
                attributes: {
                    name: this.name
                },
                links: {
                    self: "https://jsonapi.org/"
                }
            }
        };
        return JSON.stringify(school);
    }

    fromJson = (json) => {
        const school = JSON.parse(json);
        return {
            name: school["data"]["attributes"]["name"]
        }
    }
}