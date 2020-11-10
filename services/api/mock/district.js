import { getId } from "./id";

var faker = require("faker");

export default () => {
  return {
    data: {
      ...getId("districts"),
      attributes: {
        name: faker.company.companyName()
      }
    }
  };
};
