export default class Action {
  constructor(phase, district, priority, category, note) {
    this.phase = phase;
    this.district = district;
    this.priority = priority;
    this.category = category;
    this.note = note;
  }

  toJson = () => {
    const action = {
      data: {
        type: "actions",
        attributes: {
          phase: this.phase,
          district: this.district,
          priority: this.priority,
          category: this.category,
          note: this.note
        },
        links: {
          self: "https://jsonapi.org/"
        }
      }
    };
    return JSON.stringify(action);
  };

  fromJson = json => {
    const action = JSON.parse(json);
    return {
      phase: action["data"]["attributes"]["phase"],
      district: action["data"]["attributes"]["district"],
      priority: action["data"]["attributes"]["priority"],
      category: action["data"]["attributes"]["category"],
      note: action["data"]["attributes"]["noteaction"]
    };
  };
}
